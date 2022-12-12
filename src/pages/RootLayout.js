import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../composant/Header'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <div>RootLayout</div>
      <Outlet/>
    </>
  )
}

export default RootLayout