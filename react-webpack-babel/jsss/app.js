import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello.js';

let App = React.createClass({
	render() {
		return (
			<div className="nav">
               <Link to="app" class="homelink">Home </Link>
               <Link to="hello" class="hellolink"> Say Hello </Link>
               <RouteHandler/>
			</div>
			);
	}
});

let routes = (
    <Route name="app" path="/" handler={App}>
       <Route  name="hello" path="/hello" handler={HelloHandler} />
    </Route>
);

Route.run(routes, function(){
	React.render(<Handler />, document.body);
});