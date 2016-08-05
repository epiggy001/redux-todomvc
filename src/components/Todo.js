import React from 'react'
import classNames from 'classnames'

const Todo = React.createClass({
  documentClick: function(event) {
    let target = event.target || event.srcElement || event.originalTarget;
    if (target === this.input) {
      return
    }

    this.save()
  },

  save: function() {
    this.props.save(this.input.value)
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.editing !== nextProps.editing) {
      if (nextProps.editing) {
        document.addEventListener('click', this.documentClick)
      } else {
        document.removeEventListener('click', this.documentClick)
      }
    }
  },


  render: function() {
    const {onClick, todo, deleteTodo, onDoubleClick, editing} = this.props
    let classes = classNames({
      'completed': todo.get('completed'),
      'editing': editing
    })
    return(
    <li className={classes}>
      <div className="view" onDoubleClick={onDoubleClick}>
        <input className="toggle" type="checkbox"
          onChange={onClick}
          checked={todo.get('completed')}
        />

        <label>{todo.get('text')}</label>
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
      <input className="edit" defaultValue={todo.get('text')} 
        onBlur={() => {
          this.save();
        }}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            this.save()
          }
        }}
        ref={(input) => {
          if (editing && input != null) {
            this.input = input
            input.focus()
          } 
        }}/>
    </li>
    )
  }
})

export default Todo
