import React, { useState } from 'react'
import Ads from '../Components/ads/ads'
import Products from '../Components/Products/Products'
import Loading from '../Components/Loading/Loading'

const Home = () => {
    const [loading,setLoading]= useState(false)
    if(loading) return <Loading/>
    
  return (
    <div>
      <Ads/>
      <div className='w-7xl m-auto'>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>

      </div>
    </div>
  )
}

export default Home
