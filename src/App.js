import React, { Component } from 'react';
import './App.css';
import Play from './play/Play';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      genre: '',
      sort: '',
      error: null
    }
  }

  setSearch(genre) {
    this.setState({
      genre
    });
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'http://localhost:8001/apps';
    const params = [];
    if (this.state.genre) {
      params.push(`genre=${this.state.genre}`);
    }
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;
    console.log("this is url", url)

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get apps at this time.'
        });
      })

  }

  render() {
    const results = this.state.results.map((app, i) => {
      return <Play {...app} 
      key={i}
  />
      
    })
    return (
      <main className="App">
        <h1>App Playlist</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="search">Genre: </label>
            <input
              type="text"
              id="search"
              name="search"
              value={this.state.search}
              onChange={e => this.setSearch(e.target.value)}/>

            <label htmlFor="sort">Sort: </label>
            <select id="sort" name="sort" onChange={e => this.setSort(e.target.value)}>
              <option value="">None</option>
              <option value="Rating">Rating</option>
              <option value="App">App</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{ this.state.error }</div>
        </div>
        {results}
      </main>
    );
  }
}

export default App;