import React from 'react'
import Ads from '../Components/ads/ads'
import Products from '../Components/Products/Products'

const Home = () => {
  return (
    <div>
      <Ads/>
      <Products topic='Trending Products' rows={1} slidesPerView={7}/>
    </div>
  )
}

export default Home
