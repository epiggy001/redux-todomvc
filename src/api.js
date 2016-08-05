import { fromJS} from 'immutable'

let url = 'http://localhost:4000/todos';

export function fetchTodos() {
  return fetch(url).then(resp => resp.json()).then(json => fromJS(json));
} 

export function addTodo(text) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 0,
      completed: false,
      text: text
    })
  }).then(resp => resp.json()).then(json => fromJS(json))
}

export function saveTodo(todo) {
  return fetch(url + '/' + todo.get('id'), {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo.toJS())
  }).then(resp => resp.json()).then(json => fromJS(json));
}

export function deleteTodo(id) {
  return fetch(url + '/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json'
    }
  }).then(resp => resp.json()).then(json => fromJS(json));
}

export function deleteCompleted() {
  return fetch(url + '/completed', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json'
    }
  }).then(resp => resp.json()).then(json => fromJS(json));
}

export function toggleTodos(value) {
  return fetch(url + '/completed', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: value})
  }).then(resp => resp.json()).then(json => fromJS(json));
}
