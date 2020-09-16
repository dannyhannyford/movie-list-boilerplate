import React, { Component } from 'react';
import { render } from 'react-dom';


//display matches/partial matches to search
class NavbarSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSearch() {
        this.props.handleSearch(this.state);
        this.setState({
            title: ''
        })
    }

    render() {
        return (<div className="navbar">
        <div className="container">
            <h2>Movie List</h2>
            <input placeholder="Search..." 
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            />
            <button onClick={this.handleSearch} className="button">Go!</button>
        </div>
    </div>)
    } 
};

export default NavbarSearch;