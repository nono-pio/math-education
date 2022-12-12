import React, { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import format from "./composant/format";

//import css
import './global.css'

//import pages for the url
//base pages
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'

//FirstYear pages
import FirstYear from './pages/firstYear/FirstYear'
import FirstYearLayout from './pages/firstYear/FirstYearLayout'
import M1Pages from './data/M1Summary.json'
//import Calcul_litteral from "./pages/firstYear/calcul_litteral"

//Router  <Route path='calcul_litteral' element={<Calcul_litteral/>} />
const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
        <Route index element={<Home/>} />
        <Route path='firstYear' element={<FirstYearLayout/>}>
            <Route index element={<FirstYear/>}/>
            {M1Pages.map(Chap => Chap.sousChapitre.map(sousChap => {
              const formatSousChap = format(sousChap.name)
              const PageComponent = lazy(() => import(`./pages/firstYear/${formatSousChap.substring(0, 1).toUpperCase().concat(formatSousChap.substring(1))}`))
              console.log(formatSousChap.substring(0,1).toUpperCase().concat(formatSousChap.substring(1)))
              return (
                <Route path={formatSousChap} element={<PageComponent/>} />
              )
            }))}
        </Route>
    </Route>
))

function App() {
  return(
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App;