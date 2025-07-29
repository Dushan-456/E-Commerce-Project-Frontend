import  { useEffect, useState } from 'react'
import Ads from '../Components/ads/ads'
import ProductSlider from '../Components/Products/ProductsSlider'
import Loading from '../Components/Loading/Loading'
import CategoryItemsRound from '../Components/Categories/CategoryItemsRound'
import AllProducts from '../Components/Products/AllProducts'

const Home = () => {
    const [loading,setLoading]= useState(true)


    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // 2 seconds fake loading

    return () => clearTimeout(timer) // cleanup
  }, [])


    if(loading) return <Loading/>
    
  return (
    <div>
      <Ads/>
      <div className='w-7xl m-auto'>
        <CategoryItemsRound/>
      <ProductSlider topic='Trending Products' rows={1} slidesPerView={5}/>
      <AllProducts/>
  

      </div>
    </div>
  )
}

export default Home
