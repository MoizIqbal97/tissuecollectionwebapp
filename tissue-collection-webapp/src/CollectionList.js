import './index.css';

const CollectionsList = ({collections,setCollectionId}) => {

    return (
      <div>
        <table >
        <thead>
          <tr>
            <th>Disease Term</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection)=>( 
                      <tr key={collection.id}>
                      <td> {collection.disease_term} </td>
                      <td> {collection.title}</td>
                      <td> 
                      <button onClick={()=> {setCollectionId(collection.id)}}> View Associated Samples </button> 
                      </td>
                      </tr>
                      
          ))}
        </tbody>
        </table>
      </div>
    );// jsx/html code to create a table
  }
   
  export default CollectionsList;
  