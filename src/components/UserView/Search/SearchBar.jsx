import React, { Component } from 'react';
import { Input } from 'antd';
import './style.css';
const Search = Input.Search;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="search-bar">
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    style={{width: 400}}
                    onSearch={value => console.log(value)}
                />
            </div>
        )
    }
}

export default SearchBar;