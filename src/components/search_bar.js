import React, { Component } from 'react';

class SearchBar extends Component {
    //initial state 
    constructor (props){
        super(props);
        this.state = {term: ''};
    }
    
    //define methods on the class we use render method
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term} 
                onChange= { event => this.onInputChange( event.target.value )} />
            </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}



export default SearchBar;