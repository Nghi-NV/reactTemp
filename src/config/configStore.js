import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const configStore = createStore(
  reducer,
  undefined,
  applyMiddleware(thunk)
)

export default configStore
