import React from 'react';
import Movie from './movie';
import { v4 as uuidv4 } from 'uuid';

const MovieList = ({movies}) => (
    <div>
        {movies.map(movie => {
            return (<Movie 
                key={uuidv4()}
                movie={movie}
            />);
        })}
    </div>
)

export default MovieList;