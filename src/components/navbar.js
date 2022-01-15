import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav className="navbar">
        <h1>CRUD Operations</h1>
       <div className="links">
           <Link to="/">Home</Link>
           <Link to="/create" style ={{
               color:'white',
               backgroundColor:'#f1356d',
               borderRadius:'8px'
           }}>New user</Link>
       </div>
    </nav>
     );
}
 
export default Navbar;