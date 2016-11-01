import React from 'react'
import { Link, hashHistory } from 'react-router';
import {getAlbums, getImages} from 'api/data'
import store from 'store'
import fonts from 'assets/font-awesome/css/font-awesome.css'

const photosContainer = React.createClass({
  getInitialState: function () {
    return {
      albums: [],
      photos: []
    }
  },
 componentWillMount: function() {
   getAlbums()
   getImages(this.props.params.id)
   this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        albums: appState.albums,
        photos: appState.photos
        })
      }
    )
},
  componentWillUnmount: function() {
  	this.unsubscribe()
  },
  
  render: function () {
    return (
      <Albums albums={this.state.albums} photos={this.state.photos} />
    )
  }
})

const Albums = React.createClass({
	clickHandler: function(photo) {
		getImages(photo.id)
	},
	goBack: function() {
		hashHistory.goBack()
	},
	render: function () {
		return (
			<div>
				<div className="home__header"><i onClick={this.goBack} className="fa fa-arrow-circle-left" aria-hidden="true"></i>My Photos</div>
				<div className="sidebar_photo_container">
					<div className="sidebar">
						<ul>
							{this.props.albums.map(album => {
								return (
								<li onClick={() => this.clickHandler(album)} key={album.id} className="sidebar__list"><Link to={`/albums/${album.id}`}>{album.name}</Link></li>
								)
							})}
						</ul>

					</div>
					<div className="photolist">
						{this.props.photos.map(photo => {
							return (
								<Link to={`/photos/${photo.id}`}><div key={photo.id} className="photo_container"><img className="cover" src={photo.url}/></div></Link>
								)
						})}
					</div>
				</div>
			</div>
		)
	}
})

export default photosContainer