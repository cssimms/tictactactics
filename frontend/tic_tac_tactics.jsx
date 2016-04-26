  var React = require('react'),
   ReactDOM = require('react-dom'),
     Router = require('react-router').Router,
      Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
hashHistory = require('react-router').hashHistory;

var User = require('./components/User'),
    App = require('./components/App'),
    SignInForm = require('./components/SignInForm');

var routes = (
	<Route path='/' component={App}>
    <IndexRoute component={SignInForm} />
    <Route path='users' component={SignInForm}/>
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
