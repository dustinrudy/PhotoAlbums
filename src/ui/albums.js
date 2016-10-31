import React from 'react'
import { Link, hashHistory } from 'react-router';
import {getAlbums, getImages} from 'api/data'
import store from 'store'

const photosContainer = React.createClass({
  getInitialState: function () {
    return {
      albums: [],
      photos: []
    }
  },
 componentWillMount: function() {
   getAlbums()
    store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        albums: appState.albums
        })
      }
    )
  },
  renderImages: function(){
    getImages()
      store.subscribe(() => {
      	const appState= store.getState()
      	this.setState({
      		photos: appState.photos
      	})
      })
  },
  render: function () {
    return (
      <Albums render={this.renderImages} albums={this.state.albums} photos={this.state.photos} />
    )
  }
})

const Albums = React.createClass({
	render: function () {
		return (
			<div>
				<div className="home__header">My Photos</div>
				<div className="sidebar_photo_container">
					<div className="sidebar">
						<ul>
							{this.props.albums.map(album => {
								return (
								<li onClick={this.props.rerender} key={album.id} className="sidebar__list"><Link to={`/albums/${album.id}`}>{album.name}</Link></li>
								)
							})}
						</ul>

					</div>
					<div className="photolist">
						{this.props.photos.map(photo => {
							return (
								<div className="photo_container">{this.props.photo}</div>
								)
						})}
					</div>
				</div>
			</div>
		)
	}
})

export default photosContainer