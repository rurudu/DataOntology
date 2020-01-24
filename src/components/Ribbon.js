import React, { Component } from 'react';
import ribbon from './Ribbon.css';
import DataGrid from './DataGrid';

class Ribbon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridColumn: 1 / -1
		}
	}
	
	render() {
		return (
			<div>
				<button class="ribbon btn">Merge Labels</button>
				<button class="ribbon btn"> New Label</button>
				{/* <button onClick={this.undo(this)}>Undo</button>
            	<button onClick={this.redo(this)}>Redo</button> */}
			</div>
		);
	}
}

export default Ribbon;