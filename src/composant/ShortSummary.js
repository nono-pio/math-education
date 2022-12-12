import React from 'react'
import { NavLink } from 'react-router-dom'
import format from './format'

const ShortSummary = ({ summaryJSON }) => {
  return (
    <div className='short-summary'>
        { summaryJSON.map(Chap => {
            return (
                <details>
                    <summary>{ Chap.name }</summary>
                    <ol>
                        { Chap.sousChapitre.map(element => {
                            return(
                                <li><NavLink to={format(element.name)}>{ element.name }</NavLink></li>
                            )
                        })}
                    </ol>
                </details>
            )
        }) }
    </div>
  )
}

export default ShortSummary