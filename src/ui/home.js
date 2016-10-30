import React from 'react';
import { Link, hashHistory } from 'react-router';
import {getAlbums} from 'api/data'
import store from 'store'

const HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      albums: []
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
  render: function () {
    return (
      <Home albums={this.state.albums} />
    )
  }
})

const Home = React.createClass({
  getDefaultProps: function() {
    return {
      albums: [

      ]
    }
  },
  render: function() {
    return (
      <div className="overall_container">
      	<div className="home__header">My Albums</div>
      	<div className="album__wrapper">
      		{this.props.albums.map(album => {
      			return (
              <div className="keywrapper" key={album.id}>
      				  <Link to={`/albums/${album.id}`}>
        					<div className="album__container"><img className="cover" src={album.coverphoto} />
  			      			<div className="album__name">{album.name}</div>
  			      		</div>
        				</Link>
              </div>
      			)
      		})}
      	</div>

      </div>
    )
  }
})

export default HomeContainer;
