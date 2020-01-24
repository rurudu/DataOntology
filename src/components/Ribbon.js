import React, { Component } from 'react';
import ribbon from './Ribbon.css';

class Ribbon extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<button class="ribbon btn">Merge Labels</button>
				<button class="ribbon btn"> New Label</button>
			</div>
		);
	}
}

export default Ribbon;