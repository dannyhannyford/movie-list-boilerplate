import React from 'react';
import moviesData from '../initData';
import MovieList from './movieList';
import NavbarSearch from './navbar.jsx';
import MovieAdder from './movieAdder';
import movies from '../initData';

//moviesData

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      inputValue: '',
      searched: false,
      filteredMovies: [],
      addMovieInput: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.addClick = this.addClick.bind(this);
    this.inputAddChange = this.inputAddChange.bind(this);
    this.watchToggleClick = this.watchToggleClick.bind(this);
  }

  handleClick() {
    if (this.state.inputValue !== '') {
      const moviesFound = this.state.movies.filter(movie => {
        let lowerTitle = movie.title.toLowerCase();
        return (lowerTitle.includes(this.state.inputValue.toLowerCase()))
      });
      console.log('moviesFound', moviesFound);
      this.setState({
        ...this.state,
        searched: true,
        filteredMovies: moviesFound
      })
    } else {
      this.setState({
        ...this.state,
        searched: false
      })
    }
  }

  addClick() {
    if (this.state.addMovieInput !== '') {
      this.setState({
        ...this.state,
        movies: [...this.state.movies, {
          title: this.state.addMovieInput,
          hasWatched: false
        }]
      })
    }
  }  

  inputAddChange(value) {
    this.setState({
      ...this.state,
      addMovieInput: value
    });
  }

  inputOnChange(value) {
    this.setState({
      ...this.state,
      inputValue: value
    });
  }

  watchToggleClick(id) {
    
    const newList = this.state.movies.map(movie => {
      if (movie.id === id) {
        const updated = {
          ...movie,
          hasWatched: !movie.hasWatched
        };
        console.log('updated')
        return updated;
      }
      return movie;
    })
    this.setState({
      ...this.state,
      movies: newList
    })
  }

  render() {
    return (<>
      <NavbarSearch 
        handleSearch={this.inputOnChange}
        handleClick={this.handleClick}
      />
      <MovieAdder 
        handleAddInput={this.inputAddChange}
        handleClick={this.addClick}/>
      <MovieList 
        movies={this.state.searched ? this.state.filteredMovies : this.state.movies}
        handleClick={this.watchToggleClick}
      />
    </>)
  }
}

export default App;