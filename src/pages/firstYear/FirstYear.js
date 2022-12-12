import React from 'react'
import { NavLink } from 'react-router-dom'
import Summary from '../../composant/Summary'
import ShortSummary from '../../composant/ShortSummary'
import summaryM1 from '../../data/M1Summary.json'

const FirstYear = () => {
  return (
    <>
      <Summary summaryJSON={summaryM1} Year='FirstYear' />
      <ShortSummary summaryJSON={summaryM1} Year='FirstYear' />
    </>
  )
}

export default FirstYear