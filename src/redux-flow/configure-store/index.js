import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'

export default ({ INITIAL_STATE = {} }) => {
    const enhancer = compose(applyMiddleware(thunk), logger())
    const store = createStore(rootReducer, INITIAL_STATE, enhancer)
    return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x
