  var React = require('react'),
   ReactDOM = require('react-dom'),
     Router = require('react-router').Router,
      Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
hashHistory = require('react-router').hashHistory;

var UserShow = require('./components/UserShow'),
     App = require('./components/app'),
    Home = require('./components/Home'),
    SignInForm = require('./components/SignInForm'),
    SignUpForm = require('./components/SignUpForm');

var routes = (
	<Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='signin' component={SignInForm} />
    <Route path='signup' component={SignUpForm} />
    <Route path='signup' component={SignUpForm} />
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
