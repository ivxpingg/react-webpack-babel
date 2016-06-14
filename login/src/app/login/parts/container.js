import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component{
	render() {
		return (
               <div className="container">
                   <div className="left">
                       <div className="band-cover"></div>
                       <div className="logo-img"></div>
                   </div>
                   <div className="right">
                        <div className="band-bg">
                             <div className="logo"></div>
                        </div>
                   </div>
               </div>
			);
	}
}