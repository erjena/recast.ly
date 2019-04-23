import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.setVideoPlayerItem = this.setVideoPlayerItem.bind(this);
  }

  setVideoPlayerItem(item) {
    var oldVideos = this.state.videoList;
    this.setState({
      videoList: oldVideos,
      currentVideo: item
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videoList} videoClickCB={this.setVideoPlayerItem}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

