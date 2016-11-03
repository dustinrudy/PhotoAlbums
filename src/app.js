import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import 'assets/styles/normalize.css'
import 'assets/styles/style.css'

// Layouts
import App from 'layouts/app';

// UI
import Home from 'ui/home';
import Albums from 'ui/albums';
import Photos from 'ui/photos';
import addAlbum from 'ui/addAlbum';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/addalbum" component={addAlbum}/>
    <Route path="/albums/:id" component={Albums} />
    <Route path="/photos/:id" component={Photos} />
   	</Route>
  </Router>
), document.getElementById('app')); 
