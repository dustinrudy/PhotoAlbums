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

export function getImages(albumid) {
	return axios.get(`photos?albumid=${albumid}`).then(resp => {
		store.dispatch({
			type: 'GET_PHOTOS',
			photos: resp.data
		})

	})
}

export function getImage(id) {
	return axios.get(`photos?id=${id}`).then(resp => {
		store.dispatch({
			type: 'GET_PHOTO',
			photos: resp.data 
		})
	})
}