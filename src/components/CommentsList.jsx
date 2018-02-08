class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendRequst = debounce(getComments, 500, false);
    this.sendRequst(this.props.video.id.videoId, this.setCurrentCommentsState.bind(this));
  }

  setCurrentCommentsState(arg) {
    this.setState({
      currentComments: arg
    });
  }

  componentWillReceiveProps(nextProps) {
    this.sendRequst(nextProps.video.id.videoId, this.setCurrentCommentsState.bind(this));
  }

  render() {
    if ( this.state.currentComments === undefined ) {
      return (
        <div>Loading comments..</div>
      );
    }
    return (
      <div>
        {
          this.state.currentComments.items.map(comment =>
            <Comment comment={comment} />
          )}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


