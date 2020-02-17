import React, { Component } from 'react';
// ribbon is "not used" but it's necessary for our button UI(?)
import btn from './Ribbon.css';
import Modal from 'react-modal';
import './CreateLabel.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-80%',
		transform: 'translate(-50%, -50%)'
	}
}

class Ribbon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// Placement in grid defined in App.css
			gridColumn: 1 / -1,
			modalIsOpen: false
		}

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	
	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = 'White';
	}
	 
	closeModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		return (
			<div>
				<button class="Button btn">Auto-Merge Selected Labels</button>
				<button class="Button btn" onClick={this.openModal}>New Label</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="CreateLabelModal"
				>

                        <div class="modal-header">
                            <h2 ref={subtitle => this.subtitle = subtitle}>
								Create a New Label
							</h2>
                        </div>
                        <div class="modal-body">
							<p><b>Label Name</b></p>
							<textarea id="labelNameInput" rows="1" cols="50"/>
							<p><b>Label Definition</b></p>
                            <textarea id="labelDefInput" rows="5" cols="50"></textarea>
                        </div>
                        <div class="modal-footer">
							<button onClick={this.closeModal} class="close">
								Cancel
							</button>
                            <button onClick={this.closeModal} class="create">
								Create Label
							</button>
                        </div>
				</Modal>
			</div>
		);
	}
}

export default Ribbon;