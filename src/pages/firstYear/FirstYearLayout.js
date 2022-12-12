import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const FirstYearLayout = () => {
  return (
    <>
      <div className='indicator indicator-first-year'></div>
      <Suspense fallback="Loading...">
        <Outlet/>
      </Suspense>
    </>
  )
}

export default FirstYearLayout