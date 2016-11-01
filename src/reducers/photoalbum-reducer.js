const defaultState = {
	albums: [],
	photos: [],
	currentPhoto: {}
}


export default function(state=defaultState, action) {
	switch (action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.albums}
		case 'GET_PHOTOS' : 
			return {...state, photos: action.photos}
		case 'Get_PHOTO' : 
			return {...state, currentPhoto: action.photo}
		default: 
			return state 
	}

}