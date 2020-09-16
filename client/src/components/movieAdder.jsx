import React, { Component } from 'react';

class MovieAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hasWatched: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleClick() {
        this.props.handleClick(this.state);
        this.setState({
            title: '',
            hasWatched: false
        })
    }


    //handleAddInput
    //handleClick
    render() {
        return (
            <div className="container">
                <input 
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                />
                <button className='addbutton' onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}



export default MovieAdder;