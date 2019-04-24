var Search = ({ handleChange, handleSubmit }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(evt) => { handleChange(evt); }} />
    <button className="btn hidden-sm-down" onClick={(evt) => { handleSubmit(evt); }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
