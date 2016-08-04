import { takeLatest, takeEvery } from 'redux-saga'
import { fork, put, call } from 'redux-saga/effects'
import * as api from './api'
import { fetchTodosSuccess, fetchTodosFail, FETCH_TODOS, ADD_TODO, TOGGLE_TODO,
  addTodoSuccess, addTodoFail, toggleTodoSuccess,
  toggleTodoFail } from './actions'

function* fetchTodosSaga() {
  try {
    const todos = yield call(api.fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch(err) {
    yield put(fetchTodosFail(err));
  }
} 

function* addTodoSaga(action) {
  try {
    const todo = yield call(api.addTodo, action.text)
    yield put(addTodoSuccess(todo))
  } catch(err) {
    yield put(addTodoFail(err))
  }
}

export function* toggleTodoSaga({todo}) {
  try {
    const newTodo =yield call(api.toggleTodo,
      todo.set('completed', !todo.get('completed'))) 
    yield put(toggleTodoSuccess(newTodo))
  } catch (err) {
    yield put(toggleTodoFail(err))
  }
} 

export function* rootSaga() {
  yield fork(takeLatest, FETCH_TODOS, fetchTodosSaga)
  yield fork(takeEvery, ADD_TODO, addTodoSaga)
  yield fork(takeEvery, TOGGLE_TODO, toggleTodoSaga)
}

