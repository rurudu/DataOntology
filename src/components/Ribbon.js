import React, { Component } from 'react';
import Button from './Button.css';
import DataGrid from './DataGrid';

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
				{/* <button onClick={this.undo(this)}>Undo</button>
            	<button onClick={this.redo(this)}>Redo</button> */}
			</div>
		);
	}
}

export default Ribbon;