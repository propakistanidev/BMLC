// import React from 'react'
// import TopBar from './components/TopBar'

import Hero from './components/Hero'
import Content from './components/Content'
import FindCoach from './components/FindCoach'
import HowItWorks from './components/HowItWorks'
import Transform from './components/Transform'
import AboutUs from './components/AboutUs'
import Ebook from './components/EBook'
import AppDownload from './components/AppDownload'
import GroupCoaching from './components/GroupCoaching'
// import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.tsx'



const App = () => {
  return (

    <div>
      <ScrollToTop />
      {/* <TopBar /> */}
      <Hero />
      <Content />
      <FindCoach />
      <HowItWorks />
      <Transform />
      <AboutUs />
      <Ebook />
      <AppDownload />
      <GroupCoaching />
      {/* <Footer /> */}
    </div>

  )
}

export default App