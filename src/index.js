import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { fetchTodos, setVisibilityFilter, VisibilityFilters } from './actions' 
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { Router } from 'director'

const sagaMiddleware = createSagaMiddleware();
let store = createStore(todoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(fetchTodos());

let router = new Router({
  '/': () => {store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))},
  '/active': () => {store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))},
  '/completed':() => {store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}
});

router.init();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

