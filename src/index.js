import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY='AIzaSyDwH8kZohqNQ_aNe6yFoasgEqQEmZ7_7QU'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null,
    };
    this.onVideoSearch('surfboards');
  }

  onVideoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
    this.setState({videos,selectedVideo:videos[0]});
  });
}
  render(){
    const videoSearch= _.debounce((searchTerm)=>{this.onVideoSearch(searchTerm)},300);
    return (
      <div>
      <SearchBar onSearch={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'))
