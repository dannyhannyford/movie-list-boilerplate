import React from 'react';


//display matches/partial matches to search


const NavbarSearch = ({handleSearch, handleClick}) => (
        <div className="navbar">
            <div className="container">
                <h2>Movie List</h2>
                <input placeholder="Search..." 
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                />
                <button onClick={() => handleClick()} className="button">Go!</button>
            </div>
        </div>
        
    
);


export default NavbarSearch;