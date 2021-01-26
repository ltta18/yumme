import React from 'react';
import './App.css';
import BusinessList from '../business-list/business-list';
import SearchBar from '../search-bar/search-bar';
import Yelp from '../../util/yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses =>  {
      this.setState({businesses: businesses});
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Yumme</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses} />
      </div>
    )
  };
}

export default App;
