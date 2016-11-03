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
componentWillReceiveProps: function(props) {
    this.props
    getImages(props.params.id)
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
	navToAlbumAdd: function(e) {
		e.preventDefault()
		hashHistory.push('/albums/add')
	},
	render: function () {
		return (
			<div>
				<Link to="/"><div className="home__header"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i>My Photos</div></Link>
				<div className="sidebar_photo_container">
					<div className="sidebar">
						<ul>
							{this.props.albums.map(album => {
								return (
								<li key={"a" + album.id} className="sidebar__list"><Link to={`/albums/${album.id}`}>{album.name}</Link></li>
								)
							})}
						</ul>

					</div>
					<div className="photolist">
						{this.props.photos.map(photo => {
							return (
								<Link key={"p" + photo.id} to={`/photos/${photo.id}`}><div className="photo_container"><img className="cover" src={photo.url}/></div></Link>
								)
						})}
					</div>
					<Link to={this.navToAlbumAdd}><div className="addAlbumButton"><i className="fa fa-plus-circle" aria-hidden="true"></i>Add Photos</div></Link>
				</div>
			</div>
		)
	}
})

export default photosContainer