  var React = require('react'),
   ReactDOM = require('react-dom'),
     Router = require('react-router').Router,
      Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
hashHistory = require('react-router').hashHistory;

var User = require('./components/User'),
    App = require('./components/App'),
    Home = require('./components/Home'),
    UserForm = require('./components/UserForm'),
    SignInForm = require('./components/SignInForm');

var routes = (
	<Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='users' component={SignInForm} />
	</Route>
);

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(
		<Router history={hashHistory}>
      {routes}
    </Router>,
		document.getElementById('root')
	);
});
