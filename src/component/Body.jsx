import React from 'react'
import Browse from './Browse';
import Login from './Login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const Body = () => {

    const appRouter= createBrowserRouter([
 {
    path:"/",
    element:<Login/>,
    
 },
 {
    path:'/browser',
    element:<Body/>
 }
    ])

  return (<div>
    <RouterProvider router={appRouter}/>
  </div>
    
  )
}

export default Body