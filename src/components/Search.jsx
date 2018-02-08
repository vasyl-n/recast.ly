var Search = (props) => {

  var handleClick = function() {
    var text = document.getElementById('searchField').value;
    props.updateSearchQuery( text );
    // debugger
  };

  return (
    <div className="search-bar form-inline">
      <input onChange={ handleClick } id="searchField" className="form-control" type="text" />
      <button onClick={ handleClick } className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

