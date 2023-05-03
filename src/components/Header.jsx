import React from 'react'
import PropTypes from 'prop-types'

function Header({text , color, bgColor}) {
  return (
    <header style={{backgroundColor:bgColor , color: color}}>
        <div className='container'>
          <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback App',
    bgColor : 'rgba(0,0,0,0.4)',
    color : '#ff6a95',
}

Header.propTypes = {
  text : PropTypes.string,
  bgColor : PropTypes.string,
  color : PropTypes.string,
}

export default Header
