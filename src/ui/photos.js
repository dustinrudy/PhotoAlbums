import React from 'react'
import { Link, hashHistory } from 'react-router';
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
		})
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
  goBack: function() {
    hashHistory.push(`albums/${id}`)
  },
	render: function () {
		return (

			<div className="photo_wrapper">
       <div onClick={this.goBack} className="photo__header"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{this.props.photo.name}</div>
        <div className="single_photo"><img className="image" src={this.props.photo.url}/></div>
      </div>
			
		)
	}
})


export default imageContainer