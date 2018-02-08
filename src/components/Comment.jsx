var Comment = (props) => {
// console.log(props)
  return (
    <div className="comment">
      <div className="image"><img src={props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl} /></div>
      <div className="userName">{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
      <div className="text">{props.comment.snippet.topLevelComment.snippet.textDisplay}</div>
    </div>
  );
};

