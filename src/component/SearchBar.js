import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  OnSubmits = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.OnSubmits}>
          <div className="field">
            <lavel>Search Image</lavel>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
