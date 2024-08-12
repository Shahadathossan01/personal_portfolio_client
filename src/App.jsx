import { useEffect, useState } from 'react'
import { useStoreActions } from 'easy-peasy'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../layouts/Main'
import LandingPage from '../layouts/LandingPage'
import Blog from './component/shared/Blog/Blog'


function App() {
  const {fetchData}=useStoreActions(action=>action.data)
  useEffect(()=>{
    fetchData()
  },[])
 const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',element:<LandingPage></LandingPage>},
        {path:'/blog',element:<Blog></Blog>}
      ]
    }
  ])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
