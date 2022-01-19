import { Link } from 'react-router-dom';


//navbarcomponent
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Tissue Sample Collection Details</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/createcollections">Add Collection </Link>
          <Link to="/createsample">Add Samples </Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;


