import React from 'react'
import SousChapitre from '../../composant/SousChapitre'
import M1summary from '../../data/M1Summary.json'

const Calcul_litteral = () => {
  return (
    <>
    <SousChapitre name={M1summary[0].sousChapitre[0].sousChapitre[0]}>
        <p>dhsakjdhkj</p>
    </SousChapitre>
    </>
  )
}

export default Calcul_litteral