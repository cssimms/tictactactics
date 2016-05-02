        var React = require('react'),
            Modal = require('react-modal'),
 CurrentUserMixin = require('../mixins/currentUser'),
        UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
GameClientActions = require('../actions/game/GameClientActions');

var GameMenu = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return({
      users: [],
      selected: "",
      modalOpen: false
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
    this.updateUser();
    this.setState({
      users: UserStore.allUsers()
    });
  },

  allUsers: function () {
    if (this.state.users.length < 1){
      return;
    } else {
      return this.state.users.map(function (usr, i) {
        if (this.state.currentUser.id === usr.id){
          return;
        } else {
          return <option
            key={i}
            value={usr.id}>{usr.username}</option>;
        }
      }.bind(this));
    }
  },

  setSelected: function (event) {
    event.preventDefault();
    this.setState({
      selected: event.target.value
    });
  },

  createGame: function (event) {
    event.preventDefault();
    var otherUserId = parseInt(event.target.userId.value);

    GameClientActions.createGame({
      x_id: this.state.currentUser.id,
      o_id: otherUserId
    });
    this.closeModal();
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
        background: 'gainsboro',
        position: 'fixed',
        top: '100px',
        left: '300px',
        right: '300px',
        bottom: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        zIndex: 11,
        textAlign: 'center'
      }
    };

    return (
      <Modal
        style={modalStyle}
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <h3>Create a New Game</h3>
        <form onSubmit={this.createGame}>
          <h4>Who do you want to challange?</h4>
          <select className='player-select' name='userId'>
            {this.allUsers()}
          </select><br/><br/>
        <input className='game-button create'
               type='submit'
               value='Create Game' />
        </form>
        <button className='game-button' onClick={this.closeModal}>
          Nevermind, take me back to my games.
        </button>
      </Modal>
    );
  },


  render: function () {
    return (
      <div className="game-menu">
        <button
          className='game-button create'
          onClick={this.openModal}>Create Game</button>
        {this.createGameModal()}
      </div>
    );
  }
});

module.exports = GameMenu;
