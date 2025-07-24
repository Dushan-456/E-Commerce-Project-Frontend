import  { useEffect, useState } from 'react'
import Ads from '../Components/ads/ads'
import Products from '../Components/Products/ProductsSlider'
import Loading from '../Components/Loading/Loading'
import CategoryItemsRound from '../Components/Categories/CategoryItemsRound'

const Home = () => {
    const [loading,setLoading]= useState(true)


    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds fake loading

    return () => clearTimeout(timer) // cleanup
  }, [])


    if(loading) return <Loading/>
    
  return (
    <div>
      <Ads/>
      <div className='w-7xl m-auto'>
        <CategoryItemsRound/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <Products topic='Trending Products' rows={1} slidesPerView={5}/>
      <div className='h-screen bg-amber-200'>

      </div>

      </div>
    </div>
  )
}

export default Home
