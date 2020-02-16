import React, { Component } from 'react';
// ribbon is "not used" but it's necessary for out button UI(?)
import ribbon from './Ribbon.css';

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
				<button class="Button btn">Auto-Merge Selected Labels</button>
				<button class="Button btn">New Label</button>
				{//<button class="Button btn" onClick={this.undo.bind(this)}>Open File Temp</button>
				}
				{/* <button onClick={this.undo(this)}>Undo</button>
            	<button onClick={this.redo(this)}>Redo</button> */}
			</div>
		);
	}
}

export default Ribbon;