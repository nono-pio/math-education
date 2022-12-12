import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//import css
import './global.css'

//import pages for the url
//base pages
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'

//FirstYear pages
import FirstYear from './pages/firstYear/FirstYear'
import FirstYearLayout from './pages/firstYear/FirstYearLayout'
import Calcul_litteral from "./pages/firstYear/calcul_litteral"


//Router
const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
        <Route index element={<Home/>} />
        <Route path='firstYear' element={<FirstYearLayout/>}>
            <Route index element={<FirstYear/>}/>
            <Route path='calcul_litteral' element={<Calcul_litteral/>} />
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