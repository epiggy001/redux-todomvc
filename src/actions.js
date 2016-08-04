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


