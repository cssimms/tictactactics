        var React = require('react'),
            Modal = require('react-modal'),
        UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
GameClientActions = require('../actions/game/GameClientActions');

var GameMenu = React.createClass({
  getInitialState: function() {
    return({
      users: []
    });
  },

  componentDidMount: function() {
    this.userToken = UserStore.addListener(this._onChange);
    UserClientActions.fetchUsers();
  },

  componentWillUnmount: function() {
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.allUsers()
    });
  },

  allUsers: function () {
    if (this.state.users.length < 1){
      return;
    } else {
      return this.state.users.map(function (usr, i) {
        return <option key={i} value={usr.id}>{usr.username}</option>;
      });
    }
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    this.setState({ modalOpen: true });
  },

  createGameModal: function () {
    var modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 10
      },
      content: {
        position: 'fixed',
        top: '100px',
        left: '150px',
        right: '150px',
        bottom: '100px',
        border: '1px solid #ccc',
        padding: '20px',
        zIndex: 11
      }
    };

    return (
      <Modal
        style={modalStyle}
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <h3>Create a New Game</h3>
        <form onSubmit={GameClientActions.createGame}>
          <select name="Players">
            {this.allUsers()}
          </select>
        </form>
      </Modal>
    );
  },


  render: function () {
    return (
      <div className="game-menu">
        <button onClick={this.openModal}>Create Game</button>
        {this.createGameModal()}
      </div>
    );
  }
});

module.exports = GameMenu;
