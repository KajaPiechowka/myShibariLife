import React from "react"
import AboutPage from "../components/AboutPage/AboutPage"
import Navigation from "../components/Navigation/Navigation"
import SliderHero from "../components/Hero/Hero"
import AboutMe from "../components/AboutMe/AboutMe"
import Footer from "../components/Footer/Footer"

/** Component with first page of the website. Here I need to do if with language version of website */

const MyShibariLifePage = () => {
  // EN ? <English Site :
  return (
    <>
      <Navigation />
      <SliderHero />
      <AboutPage />
      <AboutMe />
      <Footer id="contact" />
    </>
  )
}

export default MyShibariLifePage
