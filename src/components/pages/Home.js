import '../../App.css'
import HeroSection from '../HeroSection'

import React, { useState } from 'react'
import Cards from '../Cards'
import Footer from '../Footer'
import SignUp from './SignUp'

function Home() {

  const[isSubmitted,setIsSubmitted]=useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }

  if(isSubmitted){
    return (
        <>
          <HeroSection/>  
          <Cards/>
          <Footer/>
        </>
    )
  }
  else{
    return (
      <SignUp submitForm={submitForm}/>
    )
  }
}

export default Home
