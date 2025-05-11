import Header from './components/Header'
import Hero from './sections/Hero'
import WhatIs from './sections/WhatIs'
import Features from './sections/Features'
import Demo from './sections/Demo'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <WhatIs />
      <Features />
      <Demo />
      <Testimonials />
      <CTA />
      <Footer />
      <ThemeToggle />
    </SmoothScroll>
  )
}

export default App
