import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/rootSaga';

const composeEnhancer = process.env.NODE_ENV === 'production' ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const sagaMiddleware = createSagaMiddleware();

const store = () => {
    return {
        ...createStore(
            rootReducer,
            // composeWithDevTools(),
            composeEnhancer(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default store;