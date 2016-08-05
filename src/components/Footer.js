import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = ({total, completed, deleteCompleted}) => (
  <footer className="footer" style={{'display': total > 0 ? 'block' : 'none'}}>
    <span className="todo-count"><strong>{total - completed}</strong> item left</span>
    <ul className="filters">
      <li>
        <FilterLink filter={VisibilityFilters.SHOW_ALL} href="#/">All</FilterLink>
      </li>
      <li>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}
          href="#/active">Active</FilterLink>
      </li>
      <li>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} href="#/completed">Completed</FilterLink>
      </li>
    </ul>
    {(() => {
      if (completed > 0) {
        return (<button className="clear-completed" onClick={deleteCompleted}>
            Clear completed</button>)
      }
    })()}
  </footer>
)

export default Footer
