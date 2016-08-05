import { takeLatest, takeEvery } from 'redux-saga'
import { fork, put, call } from 'redux-saga/effects'
import * as api from './api'
import { fetchTodosSuccess, fetchTodosFail, FETCH_TODOS, ADD_TODO, TOGGLE_TODO,
  SAVE_TODO, DELETE_TODO, TOGGLE_TODOS, addTodoSuccess, addTodoFail,
  toggleTodoSuccess, toggleTodoFail, saveTodoSuccess, saveTodoFail,
  setEditingRecord, deleteTodoSuccess, deleteTodoFail, DELETE_COMPLETED,
  deleteCompletedFail, deleteCompletedSuccess, toggleTodosSuccess,
  toggleTodosFail} from './actions'

function* fetchTodosSaga() {
  try {
    const todos = yield call(api.fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch(err) {
    yield put(fetchTodosFail(err));
  }
} 

function* addTodoSaga({text}) {
  try {
    const todo = yield call(api.addTodo, text)
    yield put(addTodoSuccess(todo))
  } catch(err) {
    yield put(addTodoFail(err))
  }
}

function* toggleTodoSaga({todo}) {
  try {
    const newTodo =yield call(api.saveTodo,
      todo.set('completed', !todo.get('completed'))) 
    yield put(toggleTodoSuccess(newTodo))
  } catch (err) {
    yield put(toggleTodoFail(err))
  }
} 

function* saveTodoSaga({todo}) {
  try {
    const newTodo =yield call(api.saveTodo, todo) 
    yield put(setEditingRecord(0))
    yield put(saveTodoSuccess(newTodo))
  } catch (err) {
    yield put(saveTodoFail(err))
  }
}

function* deleteTodoSaga({id}) {
  try {
    yield call(api.deleteTodo, id)
    yield put(deleteTodoSuccess(id))
  } catch (err) {
    yield put(deleteTodoFail(err))
  }
}

function* deleteCompletedSaga() {
  try {
    yield call(api.deleteCompleted)
    yield put(deleteCompletedSuccess())
  } catch (err) {
    yield put(deleteCompletedFail(err))
  }
}

function* toggleTodosSaga({value}) {
  try {
    yield call(api.toggleTodos, value)
    yield put(toggleTodosSuccess(value))
  } catch (err) {
    yield put(toggleTodosFail(err))
  }
}

export function* rootSaga() {
  yield fork(takeLatest, FETCH_TODOS, fetchTodosSaga)
  yield fork(takeEvery, ADD_TODO, addTodoSaga)
  yield fork(takeEvery, TOGGLE_TODO, toggleTodoSaga)
  yield fork(takeEvery, TOGGLE_TODOS, toggleTodosSaga)
  yield fork(takeEvery, SAVE_TODO, saveTodoSaga)
  yield fork(takeEvery, DELETE_TODO, deleteTodoSaga)
  yield fork(takeEvery, DELETE_COMPLETED, deleteCompletedSaga)
}

