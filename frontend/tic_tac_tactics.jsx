  var React = require('react'),
   ReactDOM = require('react-dom'),
     Router = require('react-router').Router,
      Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
hashHistory = require('react-router').hashHistory,
      Modal = require('react-modal');

    var App = require('./components/app'),
       Home = require('./components/Home'),
   UserShow = require('./components/UserShow'),
 SignInForm = require('./components/SignInForm'),
 SignUpForm = require('./components/SignUpForm'),
CurrentGame = require('./components/CurrentGame'),
  UserStore = require('./stores/UserStore');

var routes = (
	<Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='signin' component={SignInForm} />
    <Route path='signup' component={SignUpForm} />
    <Route path='play/:gameId' component={CurrentGame}/>
    <Route path='users/:userId' component={UserShow} />
	</Route>
);

document.addEventListener('DOMContentLoaded', function () {
  Modal.setAppElement(document.body);
	ReactDOM.render(
		<Router history={hashHistory}>
      {routes}
    </Router>,
		document.getElementById('root')
	);
});
