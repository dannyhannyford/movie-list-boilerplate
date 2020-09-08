import React from 'react';




const Movie = ({movie, handleClick, id}) => 
{ 
    return (
    <div className="movie">
        <p>{movie.title}</p>
        <button onClick={() => handleClick(id)} className='addbutton'>{movie.hasWatched ? 'watched' : 'to watch'}</button>
    </div>
    )
};

export default Movie;