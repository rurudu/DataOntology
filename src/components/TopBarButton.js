import React, { Component } from 'react';

class TopBarButton extends Component {
	render() {
		return (
			<div className="TopBarButton">
                <div className="card">
                    {console.log(this)}
                    <div className="card-body">{this.props.buttonName}</div>
                </div>
			</div>
			)
		}
	}
	
	export default TopBarButton;