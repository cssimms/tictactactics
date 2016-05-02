        var React = require('react'),
 CurrentUserMixin = require('../mixins/currentUser'),
GameClientActions = require('../actions/game/GameClientActions');

var GameCell = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return {
      selected: false
    };
  },

  componentWillReceiveProps: function () {
    if (this.state.selected) {
      this.setState({
        selected: ""
      });
    }
  },

  handleClick: function (event) {
    event.preventDefault();
    if (this.props.mark === 'e' && this.props.currTurn) {
      GameClientActions.selectMove({
        pos: this.props.pos,
        mark: this.state.currentUser.id
       });
       this.setState({
         selected: true
       });
    }
  },

  render: function () {
    var mark = (this.props.mark === 'e') ? '' : this.props.mark;
    var sel = "";
    if (this.state.selected){
      sel = " selected";
    }
    return (
      <div className={'game-cell' + sel} onClick={this.handleClick} >
        {mark}
      </div>
    );
  }
});

module.exports = GameCell;
