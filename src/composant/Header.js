import React from 'react'
import Nocalc from './Nocalc'
import { NavLink } from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <div className='banner'>
      <Nocalc/>
      <div className='menu'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/firstYear" >Premiere</NavLink>
        <NavLink>Deuxieme</NavLink>
        <NavLink>Troisieme</NavLink>
        <NavLink>Quatrieme</NavLink>
        <NavLink>Matu</NavLink>
      </div>
      <Search/>
    </div>
  )
}

export default Header