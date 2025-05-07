import Header from './components/Header'
import Hero from './sections/Hero'
import WhatIs from './sections/WhatIs'
import Features from './sections/Features'
import Demo from './sections/Demo'
import Testimonials from './sections/Testimonials'
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
    </SmoothScroll>
  )
}

export default App
