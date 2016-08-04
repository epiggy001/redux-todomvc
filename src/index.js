import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { fetchTodos } from './actions' 


const sagaMiddleware = createSagaMiddleware();
let store = createStore(todoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(fetchTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

