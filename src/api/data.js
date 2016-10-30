import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums() {
	return axios.get('albums').then(resp => {
		store.dispatch({
			type: 'GET_ALBUMS',
			albums: resp.data
		})
	})
}

export function getImages(id) {
	return axios.get(`photos?albumid=${id}`).then(resp => {
		store.dispatch({
			type: 'GET_PICTURES',
			photos: resp.data
		})
	})
}