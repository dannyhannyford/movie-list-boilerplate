import React from 'react';
import Movie from './movie';

const MovieList = ({movies, handleToggle}) => { 
    
    return (
        <div>
            {movies.map((movie, index) => {
                return (<Movie 
                    key={index}
                    movie={movie}
                    handleToggle={handleToggle}
                    id={index}
                />);
            })}
        </div>
    )
};

export default MovieList;