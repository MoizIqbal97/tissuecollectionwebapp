import './index.css';

const SampleList = ({ samples , setCollectionId }) => {

  
    return (
      <div>
        <table >
        <thead>
          <tr>
            <th>Donor Count</th>
            <th>Material Type</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {samples.map((sample)=>( 
                      <tr key={sample.id}>
                        <td>{sample.donor_count}</td>
                        <td>{sample.material_type}</td>
                        <td>{sample.last_updated}</td>
                      </tr>      
          ))}
        </tbody>
        </table>
        {setCollectionId && <button onClick={()=>{setCollectionId(null)}}>Close sample</button>}
      </div>
    );
  }
   
  export default SampleList;
  