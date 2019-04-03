import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="search-wrapper">
            <h1>Search</h1>
            <SearchBar />
            </div>
        )
    }
}

export default SearchWrapper;