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
      movies: [],
      watched: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.addClick = this.addClick.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleWatchList = this.toggleWatchList.bind(this);
    this.toggleWatchedList = this.toggleWatchedList.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState({
      movies: this.state.movies,
      watched: this.state.watched
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
        movies: moviesFound,
        watched: this.state.watched
      })
    }
  }

  handleToggle(toggle) {
    //go through all movies and change the hasWatched property of the selected movie
    const updatedMovies = this.state.movies.map(movie => {
      if(toggle.title ===  movie.title) {
        movie.hasWatched = !movie.hasWatched;
      }
      return movie;
    })
    this.setState({
      movies: updatedMovies,
      watched: this.state.watched
    })
  }
  

  addClick(movie) {
    const movies = [...this.state.movies];
    movies.push(movie)
      this.setState({
       movies: movies,
       watched: this.state.watched
      })
  }

  toggleWatchList() {
    this.setState({
      movies: this.state.movies,
      watched: false
    })
  }

  toggleWatchedList() {
    this.setState({
      movies: this.state.movies,
      watched: true
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
      <button onClick={this.toggleWatchList}>To Watch</button>
      <button onClick={this.toggleWatchedList}>Watched</button>
      <MovieList 
        handleToggle={this.handleToggle}
        movies={this.state.movies.filter(movie => {
          return (movie.hasWatched === this.state.watched)
        })}
      />
    </>)
  }
}

export default App;