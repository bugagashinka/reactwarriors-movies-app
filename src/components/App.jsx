import React from "react";
import MovieList from "./MovieList";
import MovieListWillWatch from "../MovieListWillWatch";
import MovieTabs from "./MovieTabs";
import { POPULARITY_DESC_FILTER } from "../utils/filters";
import { ENDPOINT, PATH, API_KEY } from "../utils/api";
import Pagination from "./Pagination";

class App extends React.Component {
  state = {
    sortBy: POPULARITY_DESC_FILTER,
    currentPage: 1,
    totalPages: 1,
    movies: [],
    moviesWillWatch: []
  };

  removeMovie = id => {
    this.setState({
      movies: this.state.movies.filter(movieItem => movieItem.id !== id)
    });
  };

  addToWillWatch = movie => {
    this.setState({
      moviesWillWatch: [...this.state.moviesWillWatch, movie]
    });
  };

  removeFromWillWatch = removeMovie => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.filter(willWatchMovie => willWatchMovie.id !== removeMovie.id)
    });
  };

  tabChangeHandler = tabKey => () => {
    this.setState({
      sortBy: tabKey
    });
  };

  changePage = newPage => event => {
    event.preventDefault();
    this.setState({
      currentPage: newPage
    });
  };

  clearWillWatch = () => {
    this.setState({ moviesWillWatch: [] });
  };

  async getMoviesData() {
    return await fetch(
      `${ENDPOINT}/${PATH}?api_key=${API_KEY}&sort_by=${this.state.sortBy}&page=${this.state.currentPage}`
    )
      .then(response => response.json())
      .catch(console.error);
  }

  componentDidMount() {
    this.getMoviesData().then(({ total_pages: totalPages, results: movies }) => {
      this.setState({ movies, totalPages });
    });
  }

  componentDidUpdate(_, prevState) {
    const { sortBy, currentPage } = this.state;
    if (prevState.sortBy !== sortBy || prevState.currentPage !== currentPage) {
      this.getMoviesData().then(({ total_pages: totalPages, results: movies }) => {
        this.setState({ movies, totalPages });
      });
    }
  }

  render() {
    const { sortBy, currentPage, totalPages, movies, moviesWillWatch } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 p-4">
            <MovieTabs makeActive={sortBy} onChange={this.tabChangeHandler} />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-9">
            <div className="row">
              <MovieList
                list={movies}
                willWatchClick={this.addToWillWatch}
                removeWillWatchClick={this.removeFromWillWatch}
                onDelete={this.removeMovie}
              />
            </div>
          </div>
          <div className="col-3">
            <MovieListWillWatch list={moviesWillWatch} clearWillWatchClick={this.clearWillWatch} />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-12">
            <Pagination currentPage={currentPage} total={totalPages} changePage={this.changePage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
