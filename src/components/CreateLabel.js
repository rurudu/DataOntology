import React, { Component } from 'react';
import btn from './CreateLabel.css';

class CreateLabel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return (
            <div>
                <button id="createLabelButton" class="Button btn" 
                    /*onClick={document.getElementById("LabelModal").style.display="block"}*/>
                    New Label
                </button>
                <div id="LabelModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Create a New Label</h2>
                        </div>
                        <div class="modal-body">
                            <input type="text"></input>
                        </div>
                        <div class="modal-footer">
                            <button class="create">Create Label</button>
                            <button class="close">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default CreateLabel;