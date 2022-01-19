import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateSample = () => {
    const [id,setid] = useState('');
    const [collection_id,setCollection_id] = useState('');
    const [donor_count,setDonor_count] = useState('');
    const [material_type, setMaterial_type] =  useState('');
    const [last_updated, setLast_updated] =  useState('');

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const sample = { id, collection_id, donor_count,material_type,last_updated};

        fetch('http://localhost:8000/samples', {
          method: 'POST',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(sample)  
        }).then(()=>{
            console.log('new sample added')
            history.push('/');  //goes back to the home page
        })
    }


    return (  
        <div>
        <h2>Create a new Sample</h2>
            
            <form onSubmit={handleSubmit}>
                <label>
                    ID
                </label>
                <input
                type="text"
                required
                value = {id}
                onChange={(e)=>setid(e.target.value)}
                />
                <label>
                    Collection ID
                </label>
                <input
                type="text"
                required
                value = {collection_id}
                onChange={(e)=>setCollection_id(e.target.value)}
                />
                <label> Donor Count  </label>
                <input
                type="text"
                required
                value = {donor_count}
                onChange={(e)=>setDonor_count(e.target.value)}
                />
                 <label> Material Type   </label>
                <input
                type="text"
                required
                value = {material_type}
                onChange={(e)=>setMaterial_type(e.target.value)}
                />
                 <label> Last Updated  </label>
                <input
                type="text"
                required
                value = {last_updated}
                onChange={(e)=>setLast_updated(e.target.value)}
                />
                <button>Add sample</button>
            
            </form>
        </div>
    ); // form to add samples
}
 
export default CreateSample;