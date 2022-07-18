import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, } from "react-router-dom";
import JsonData from './data/data.json'
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import Why from './components/Why';
import About from './components/About';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Download from './components/Download'
const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <>
      <Router>
        <Header />
        <Home data={landingPageData.Home} />
        <Why data={landingPageData.Why} />
        <About data={landingPageData.About} />
        <Features data={landingPageData.Features} />
        <Screenshots data={landingPageData.Screenshots} />
        <Testimonial data={landingPageData.Testimonial} />
        <Pricing data={landingPageData.Pricing} />
        <Download data={landingPageData.Download} />
        <Footer data={landingPageData.Footer} />
      </Router>
    </>
  )
}

export default App
