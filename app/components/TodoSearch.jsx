var React = require('react');

var TodoSearch = React.createClass({
  handleChange: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searctText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searctText);
  },
  render: function(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
