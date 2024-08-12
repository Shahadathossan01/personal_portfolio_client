import { useStoreState } from 'easy-peasy'
import React from 'react'

const Home = () => {
  const {data}=useStoreState(state=>state.data)
  console.log(data)
  return (
    <>
      <div id='home'>
        <h1>Home</h1>
        <img src={data.basics.image} alt="" />
      </div>
    </>
  )
}

export default Home