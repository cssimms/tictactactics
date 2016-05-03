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
    if (this.state.selected){
      GameClientActions.deSelectMove({
        pos: this.props.pos,
        mark: this.state.currentUser.id
      });
    } else if (this.props.mark === 'e' && this.props.currTurn) {
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
    var filled = (mark !== '') ? ' filled' : '';
    var sel = (this.state.selected) ? ' selected' : '';
    var avail = (this.props.currTurn) ? ' avail' : '';
    var status = '';
    if (this.props.status && filled === ''){
      status = this.props.status;
    }

    return (
      <div className={'game-cell' + sel + filled + avail + status}
        onClick={this.handleClick} >
        {mark}
      </div>
    );
  }
});

module.exports = GameCell;
