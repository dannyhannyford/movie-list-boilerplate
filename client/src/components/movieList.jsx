import React from 'react';
import Movie from './movie';
import { v4 as uuidv4 } from 'uuid';

const MovieList = ({movies, handleClick}) => (
    <div>
        {movies.map(movie => {
            let unique = uuidv4();
            return (<Movie 
                key={unique}
                movie={movie}
                handleClick={handleClick}
                id={unique}
            />);
        })}
    </div>
)

export default MovieList;