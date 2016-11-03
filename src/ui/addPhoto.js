import React from 'react'
import {addPhoto} from 'api/data'

const AddPhotoContainer = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			url: ''
		}
	},
	componentWillMount: function() {
		
	},
	render: function () {
		return (
			<AddPhoto />
		)
	}
})

const AddPhoto = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault()
		var photoObj = {
			name: this.state.name,
			url: this.state.url,
			albumId: this.props.params.albumid
		}
	addPhoto(photoObj)
	},
	update: function(e) {
		var val = e.target.value
		var id = e.target.id

		var stateObj = {}

		stateObj[id] = val

		this.setState(stateObj)
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input id="name" onChange={this.update} type="text" value={this.state.name} />
					<input id="url" onChange={this.update} type="url" value={this.state.url} />
					<button type="submit">Upload</button>
				</form>
			</div>
		)
	}
})


export default AddPhotoContainer