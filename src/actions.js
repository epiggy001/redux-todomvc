export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS'
export const TOGGLE_TODO_FAIL = 'TOGGLE_TODO_FAIL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'
export const SET_EDITING_RECORD = 'SET_EDITING_RECORD'
export const SAVE_TODO = 'SAVE_TODO' 
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS' 
export const SAVE_TODO_FAIL = 'SAVE_TODO_FAIL' 
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL'
export const DELETE_COMPLETED = 'DELETE_COMPLETED'
export const DELETE_COMPLETED_SUCCESS = 'DELETE_COMPLETED_SUCCESS'
export const DELETE_COMPLETED_FAIL = 'DELETE_COMPLETED_FAIL'
export const TOGGLE_TODOS = 'TOGGLE_TODOS'
export const TOGGLE_TODOS_SUCCESS = 'TOGGLE_TODOS_SUCCESS'
export const TOGGLE_TODOS_FAIL = 'TOGGLE_TODOS_FAIL'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function fetchTodos() {
  return {type: FETCH_TODOS}
}

export function fetchTodosSuccess(todos) {
  return {type: FETCH_TODOS_SUCCESS, todos}
}

export function fetchTodosFail(error) {
  return {type: FETCH_TODOS_FAIL, error}
}

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function addTodoSuccess(todo) {
  return {type: ADD_TODO_SUCCESS, todo}
}

export function addTodoFail(error) {
  return {type: ADD_TODO_FAIL, error}
}

export function toggleTodo(todo) {
  return {type: TOGGLE_TODO, todo}
}

export function toggleTodoSuccess(todo) {
  return {type: TOGGLE_TODO_SUCCESS, todo}
}

export function toggleTodoFail(error) {
  return {type: TOGGLE_TODO_FAIL, error}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function setEditingRecord(id) {
  return { type: SET_EDITING_RECORD, id}
}

export function saveTodo(todo) {
  return { type: SAVE_TODO, todo }
}

export function saveTodoSuccess(todo) {
  return { type: SAVE_TODO_SUCCESS, todo }
}

export function saveTodoFail(error) {
  return { type: SAVE_TODO_FAIL, error }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function deleteTodoSuccess(id) {
  return { type: DELETE_TODO_SUCCESS, id}
}

export function deleteTodoFail(error) {
  return { type: DELETE_TODO_FAIL, error }
}

export function deleteCompleted() {
  return { type: DELETE_COMPLETED }
}

export function deleteCompletedSuccess() {
  return { type: DELETE_COMPLETED_SUCCESS }
}

export function deleteCompletedFail(error) {
  return { type: DELETE_COMPLETED_FAIL, error}
}

export function toggleTodos(value) {
  return { type: TOGGLE_TODOS, value }
}

export function toggleTodosSuccess(value) {
  return { type: TOGGLE_TODOS_SUCCESS, value }
}

export function toggleTodosFail(error) {
  return { type: TOGGLE_TODOS_FAIL, error }
}
