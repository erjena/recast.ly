import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setVideoPlayerItem = this.setVideoPlayerItem.bind(this);
  }


  getInitialState() {
    return {
      inputValue: ''
    };
  }

  setVideoPlayerItem(item) {
    this.setState({
      currentVideo: item
    });
  }

  handleChange(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  handleSubmit(evt) {
    this.getVideos();
  }

  getVideos() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.inputValue,
      max: 5
    };

    searchYouTube(options, data => (
      this.setState({
        videoList: data,
        currentVideo: data[0]
      })
    ));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videoList} videoClickCB={this.setVideoPlayerItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

