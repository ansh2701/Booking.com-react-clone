import React from 'react'
import Featured from '../Components/Featured'
import PropertyList from '../Components/PropertyList'
import FeaturedProperties from '../Components/FeaturedProperties'
import MailList from '../Components/MailList'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <>
    <Hero />
    <div className='innerWidth homeContainer'>
      <Featured/>
      <div>
        <h2>Browse by property type</h2>
        <PropertyList />
      </div>
      <div>
        <h2>Homes guests love</h2>
        <FeaturedProperties />
      </div>
    </div>
    </>
  )
}

export default Home