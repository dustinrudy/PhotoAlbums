import React from 'react'
import{addAlbum}from 'api/data'

const AddAlbumContainer = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			coverphoto: ''
			
		}
	},
	componentWillMount: function() {
		
	},
	render: function () {
		return (
			<AddAlbum />
		)
	}
})

const AddAlbum = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault()
		var albumObj = {
			name: this.state.name,
			coverphoto: this.state.coverphoto
		}
	addAlbum(albumObj)
	},
	update: function(e) {
		var val = e.target.val
		var id = e.target.id

		var stateObj = {}

		stateObj[id]

		this.setState(stateObj)
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input id="name" type="text" value={this.state.name} placeholder="Name" />
					<input id="coverphoto" type="url" value={this.state.coverphoto} placeholder="Cover Photo URL" />
					<button type="submit">Upload</button>
				</form>
			</div>
		)
	}
})


export default AddAlbumContainer	