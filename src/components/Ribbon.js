import React, { Component } from 'react';
import Button from './Button.css';

class Ribbon extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<button class="Button btn">Merge Labels</button>
				<button class="Button btn"> New Label</button>
			</div>
		);
	}
}

export default Ribbon;