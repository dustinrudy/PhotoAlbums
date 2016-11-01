import React from 'react'
import { Link } from 'react-router';
import store from 'store'
import {getImage} from 'api/data.js'

const imageContainer = React.createClass({
	getInitialState: function() {
		return {
			photo: {
				url: '',
				name: ''
			}
		}
	},
	componentWillMount: function() {
	getImage(this.props.params.id)

		this.unsubscribe = store.subscribe(() => {
      		const appState = store.getState()
      			this.setState({
      				photo: appState.currentPhoto
        })
      }
    )
  },
  componentWillUnmount: function() {
  	this.unsubscribe()
  },
	render: function () {
		return (
			<Photo photo={this.state.photo} />
		)
	}
})

const Photo = React.createClass({
	render: function () {
		return (

			<div className="single_photo"><img src={this.props.photo.url}/></div>
			
		)
	}
})


export default imageContainer