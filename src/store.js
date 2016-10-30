import {createStore} from 'redux'

import photoReducer from 'reducers/photoalbum-reducer'


const store = createStore(photoReducer)

export default store 