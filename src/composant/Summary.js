import React from 'react'
import { NavLink } from 'react-router-dom'
import format from './format'

const Summary = ({ summaryJSON, Year }) => {
  return (
    <div className='summary'>
        {summaryJSON.map(Chap =>{
            return(
                <>
                <h1>{Chap.name}</h1>
                <ul>
                    {Chap.sousChapitre.map(element => {
                        return(
                            <li>
                            <h3><NavLink to={`/${Year}/${format(element.name)}`}>{element.name}</NavLink></h3>
                            <ol>
                                {element.sousChapitre.map(e =>{
                                    return <li><NavLink to={`/${Year}/${format(element.name)}#${format(e)}`}>{e}</NavLink></li>
                                })}
                            </ol>
                            </li>
                        )
                    })}
                </ul>
                </>
            )
        })}
    </div>
  )
}

export default Summary