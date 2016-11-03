import React from 'react'
import { Link, hashHistory } from 'react-router';
import {addAlbum} from 'api/data'
import store from 'store'

export default React.createClass({
	submitHandler: function () {

	},
	render: function () {
		return (
		<div className="addAlbum_wrapper"> 
			<div>
				<form method="post" onSumbit={this.submitHandler}>
					<input id="name" type="text" value="" placeholder="Name" />
					<input id="coverphoto" type="url" value="" placeholder="Image URL" />
					<button type="submit">Upload</button>
				</form>
			</div>
		</div>
		)
	}
})	