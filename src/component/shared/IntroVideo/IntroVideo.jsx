import React from 'react'
import ReactPlayer from 'react-player'
import { useStoreState } from "easy-peasy"
import video from '../../../../assects/topu.mp4'
const IntroVideo = () => {
    const {data}=useStoreState(state=>state.data)
    console.log(data)
    if(!data){
      return
    }
  return (
    <>
        <h1>Intro video</h1>
        
        <ReactPlayer
         url={video}
         playing={true}
         muted={true}
         controls
         width="60%"
         height="600px"
         />
    </>
  )
}

export default IntroVideo