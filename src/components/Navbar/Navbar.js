import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const navStyle = {
        color:'black'
    }
    return(
        <nav className="nav">
            <ul className="nav__ul">
                

           
                <Link style={navStyle} to="/" data-testid="home-link">
                    <li>Random Joke</li>
                </Link>

            

                <Link style={navStyle} to="/search" data-testid="search-link">
                    <li>Search Joke</li>
                </Link>
               


            </ul>
        </nav>
    )
};

export default Navbar