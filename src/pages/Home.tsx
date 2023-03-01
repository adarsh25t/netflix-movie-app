import React, { useState } from 'react'
import HomePage from '../components/Home/HomePage';
import LoadingHomePage from '../components/Home/LoadingHomePage'


const Home: React.FC = () => {

    const [isLoading,setLoading] = useState<boolean>(false)

    setTimeout(() => setLoading(true),2500);


  return (
    <div>
        {isLoading ? <HomePage/> : <LoadingHomePage/>}
    </div>
  )
}

export default Home