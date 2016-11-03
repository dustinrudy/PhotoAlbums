import React from 'react';
import { Link, hashHistory } from 'react-router';
import {getAlbums} from 'api/data'
import store from 'store'
import fonts from 'assets/font-awesome/css/font-awesome.css'

const HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      albums: []
    }
  },
 componentWillMount: function() {
   getAlbums()
   this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        albums: appState.albums
        })
      }
    )
  },
  componentWillUnmount: function() {
    this.unsubscribe()
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
  goBack: function() {
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
        					<div className="album__container"><div className="imagecontainer"><img className="cover" src={album.coverphoto} /></div>
  			      			<div className="album__name">{album.name}</div>
  			      		</div>
        				</Link>

              </div>
      			)
      		})}<Link to="/albums/add"><div className="addAlbumButton"><i className="fa fa-plus-circle" aria-hidden="true"></i>Add Album</div></Link>
      	</div>

      </div>
    )
  }
})

export default HomeContainer;
