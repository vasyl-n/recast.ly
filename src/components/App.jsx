class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: exampleVideoData[0],
      youTubeData: exampleVideoData,
      searchQueryText: 'panda'
    };
    this.handleListEntryClick = this.handleListEntryClick.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.sendRequest = debounce(searchYouTube, 500, false);
  }

  handleListEntryClick(arg) {
    this.setState({
      currentVideo: arg
    });
  }

  setYouTubeData(arg) {
    this.setState({
      youTubeData: arg,
      currentVideo: arg[0]
    });
  }

  updateSearchQuery(arg) {
    this.setState({
      searchQueryText: arg
    });
    this.sendRequest(arg, this.setYouTubeData.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search updateSearchQuery={this.updateSearchQuery}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
            <div className="commentBox"><CommentsList video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleListEntryClick={this.handleListEntryClick} videos={this.state.youTubeData} /></div>
          </div>

        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


