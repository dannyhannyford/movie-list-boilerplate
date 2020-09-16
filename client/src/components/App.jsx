import React from 'react';
import moviesData from '../initData';
import MovieList from './movieList';
import NavbarSearch from './navbar.jsx';
import MovieAdder from './movieAdder';

//moviesData

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.addClick = this.addClick.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState({
      movies: this.state.movies
    })
  }

  handleSearch(search) {
    if(search.title.length === 0) {
      this.getMovies();
    } else {
      const moviesFound = this.state.movies.filter(movie => {
        let lowerTitle = movie.title.toLowerCase();
        return (lowerTitle.includes(search.title.toLowerCase()))
      });
      console.log('moviesFound', moviesFound);
      this.setState({
        movies: moviesFound
      })
    }
  }

  handleToggle(toggle) {
    console.log('toggle', toggle);
    //go through all movies and change the hasWatched property of the selected movie
    const updatedMovies = this.state.movies.map(movie => {
      if(toggle.title ===  movie.title) {
        movie.hasWatched = !movie.hasWatched;
      }
      return movie;
    })
    this.setState({
      movies: updatedMovies
    })
  }
  

  addClick(movie) {
    const movies = [...this.state.movies];
    movies.push(movie)
      this.setState({
       movies: movies
      })
  }  

  render() {
    return (<>
       <NavbarSearch 
        handleSearch={this.handleSearch}
      />
      <MovieAdder 
        handleClick={this.addClick}   
      />
      <MovieList 
        handleToggle={this.handleToggle}
        movies={this.state.movies}
      />
    </>)
  }
}

export default App;