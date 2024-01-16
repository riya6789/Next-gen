import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
 // state= { clicked : false};
 // handleClick = () => {
 //  this.setState({ clicked : !this.state.clicked})
 // }

 render(){
 return (
   <header className="Navmain">
    {/* <img src="/images/logo.jpg" alt="NextGen Logo" className="Navlogo" /> */}
    <h3 className="Logoname">NextGen</h3>
    <nav className="Navcomp">
     <Link to="/">Home</Link>
     <Link to="/cohort">Cohort</Link>
     <Link to="/blog">Blogs</Link>
     <Link to="/about">About</Link>
    </nav>
    {/* <button className="Navbutton">Login / Sign Up</button> */}
    {/* <div className="mobile">
     <i id="bar" className={this.state.clicked ? "fas-fa-bars" : "fas-fa-times"}></i>
    </div> */}
   </header>
 );
}
}

export default Navbar;