import React from 'react'
import classNames from 'classnames'

const Link = ({ selected, children, href}) => {
  return (
    <a href={href} className={classNames({selected: selected})}>
      {children}
    </a>
  )
}

export default Link
