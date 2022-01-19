import { useState,useEffect } from "react";


const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => { //useEffect used to fetch data
      const abortCont = new AbortController(); //stop fetch

        fetch(url, { signal: abortCont.signal })  //fetch data from the json with for the url variable on first render
            .then(res => {
              if(!res.ok){ // server sending an error
                throw Error('data failed to be fetched from the json server') //throwing error with the message 
              }
              return res.json()
            })
            .then(data => {
              setData(data) //updating data state
              setIsLoading(false);
              setError(null);
            })
            .catch(err =>{
              if (err.name === 'AbortError'){
                console.log('fetch aborted')
              } else { // catches connection network and server error
                setIsLoading(false);
                setError(err.message); //sets error if json server not working
              }   
            })
            
            return() => abortCont.abort(); // abort the fetch
      }, [url]);

    return { data, isLoading, error }
}

export default useFetch;