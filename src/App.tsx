import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  useEffect(() => {
    // Smooth scroll refresh after all components mount
    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
