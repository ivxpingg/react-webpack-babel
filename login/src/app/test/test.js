
require("./test.css")

import React from 'react';
import ReactDOM from 'react-dom';


// var App = React.createClass({
// 	render() {
// 		return (
//                <div>我只是测试热加载dd0</div>
// 			);
// 	}
// });

export class App extends React.Component {
		render() {
		return (
               <div>我只是测试热加载554000</div>
			);
	}
}




ReactDOM.render(<App/>, document.querySelector("#react"));