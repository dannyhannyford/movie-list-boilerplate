import React from 'react';

const Movie = ({movie, handleToggle}) => 
{ 
    return (
    <div className="movie">
        <p>{movie.title}</p>
        <button 
            onClick={() => handleToggle(movie)} 
            className='addbutton'>{movie.hasWatched ? 'watched' : 'to watch'}
        </button>
    </div>
    )
};

export default Movie;