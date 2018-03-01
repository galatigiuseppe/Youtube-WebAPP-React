import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDm8pR9gBt9wmuN85nRwiiYmiY0lPSKSQ4';



// Create new Component. This component produce HTML

//Declaring a function old way
//const App = function() {
    
// return <div> hello </div>;

//}

/*Declaring a function ES6
const App = () => {
    
    return( <div> 
                <SearchBar />
            </div>
    );
}*/

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch ({key: API_KEY, term: term}, (videos) => {
            this.setState ({ 
                videos: videos, 
                selectedVideo: videos[0]    
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange= {term => this.videoSearch(term)} />
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

//Take this components and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));