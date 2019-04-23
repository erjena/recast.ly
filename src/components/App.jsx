import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

//var App = (exampleVideoData) => (
  class App extends React.Component{

  render(){
    return(
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
      <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={exampleVideoData[0]} />
      </div>
      <div className="col-md-5">
        <div>
          {/* <h5>Video List</h5> */}
            <VideoList video={exampleVideoData} />
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

