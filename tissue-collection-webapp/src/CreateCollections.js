import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateCollections = () => {
    const [disease_term,setDisease_termTerm] = useState('');
    const [title,setTitle] = useState('');
    const [id, setId] =  useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const collection = { id, disease_term, title};

        fetch('http://localhost:8000/collections', {
          method: 'POST',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(collection)  
        }).then(()=>{
            console.log('new collection added')
            history.push('/'); // goes back to the home page
        })
    }


    return (  
        <div className="CreateCollections">
            <h2>CreateCollections a new Collection</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID
                </label>
                <input
                type="text"
                required
                value = {id}
                onChange={(e)=>setId(e.target.value)} 
                />
                <label>
                    Disease Term
                </label>
                <input
                type="text"
                required
                value = {disease_term}
                onChange={(e)=>setDisease_termTerm(e.target.value)}
                />
                <label> Title  </label>
                <input
                type="text"
                required
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <button>Add collection</button>

            </form>
        </div>
    ); // form to add collection
}
 
export default CreateCollections;