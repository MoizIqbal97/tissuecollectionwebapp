import CollectionsList from "./CollectionList"; //contains list of collections
import SampleList from "./SampleList"; //contains list of samples
import useFetch from "./useFetch"; //custon hook that fetches data from JSON file
import { useState } from "react";

const Home = () => {
 const { data: collections , isLoading, error } = useFetch('http://localhost:8000/collections')  //runs useFetch custom hook, gets data from JSON files and saves it as collection
 const { data: samples} = useFetch('http://localhost:8000/samples')

 const [collectionId, setCollectionId] =useState(null);  //useState hook- rerenders value and changes states



  return (
    <div className="home">
      { error && <div>{ error }</div> } 
      { isLoading && <div>loading...</div>}

      
      { collections && <CollectionsList collections={collections} setCollectionId={setCollectionId} />}
      { collectionId != null && samples && <SampleList samples={samples.filter((sample) => sample.collection_id === collectionId) } setCollectionId={setCollectionId} />}
      { collectionId == null && samples && <SampleList samples={samples}/>}    

    </div>
  );  //returns error and isLoading from useFetch custom hook and the collection and sample table 
    //data from the JSON file(collections/samples) is being passed to the child component(CollectionsList/SampleList) as a prop
  //filtering data to show samples with the collection id 
}

export default Home;

   