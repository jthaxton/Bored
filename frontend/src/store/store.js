import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import root_reducer from '../reducers/root_reducer';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;
