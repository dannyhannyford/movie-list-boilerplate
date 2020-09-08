import React from 'react';

const MovieAdder = ({handleAddInput, handleClick}) => (
    <div className="container">
        <input onChange={(e) => handleAddInput(e.target.value)}/>
        <button className='addbutton' onClick={() => handleClick()}>Add</button>
    </div>
);


export default MovieAdder;