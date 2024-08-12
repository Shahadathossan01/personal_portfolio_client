import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/component/shared/Navbar/Navbar'
import Footer from '../src/component/shared/Footer/Footer'
import IntroVideo from '../src/component/shared/IntroVideo/IntroVideo'

const Main = () => {
  const [isIntro,setIsIntro]=useState(true)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsIntro(false)
        },5000)
        return ()=>clearTimeout(timer)
    },[])
  return (
    <>
      {
        isIntro?<IntroVideo></IntroVideo>
        :
        <div>
            <div>
              <Outlet></Outlet>
            </div>
            <div>
              <Footer></Footer>
            </div>
          </div>
      }
    </>
  )
}

export default Main