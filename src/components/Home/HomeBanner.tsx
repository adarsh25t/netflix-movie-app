import React from 'react'
import HomeContent from './HomeContent'
import NavBar from './NavBar'


const HomeBanner = () => {


  return (
    <section className='homebanner_wrapper' style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6250875350140056) 47%),url(https://images.hdqwalls.com/download/iron-man-2008-di-1920x1080.jpg)`}}>
        <NavBar/>
        <HomeContent/>
    </section>
  )
}

export default HomeBanner