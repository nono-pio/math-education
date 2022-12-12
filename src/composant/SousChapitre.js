import React from 'react'
import format from './format'

const SousChapitre = ({ children, name }) => {
  return (
    <div id={format(name)}>
        { children }
    </div>
  )
}

export default SousChapitre