  var React = require('react'),
   ReactDOM = require('react-dom'),
     Router = require('react-router').Router,
      Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
hashHistory = require('react-router').hashHistory;

var UserShow = require('./components/UserShow'),
<<<<<<< HEAD
     App = require('./components/app'),
=======
    App = require('./components/App'),
>>>>>>> 001959d0026fdef76df0230930a0eda8bc328ec7
    Home = require('./components/Home'),
    SignInForm = require('./components/SignInForm'),
    SignUpForm = require('./components/SignUpForm');

var routes = (
	<Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='signin' component={SignInForm} />
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
