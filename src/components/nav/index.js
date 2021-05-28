import React from 'react';
import {Link} from 'react-router-dom';
 
function Nav() {

    return(
        <nav className= "navbar navbar-expand-lg">
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/user" className="nav-item nav-link">User</Link>
                </div>
            </div>
        </nav>
    )

}

export default Nav;