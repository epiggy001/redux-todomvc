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

export function toggleTodo(todo) {
  return fetch(url + '/' + todo.get('id'), {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo.toJS())
  }).then(resp => resp.json()).then(json => fromJS(json));
}
