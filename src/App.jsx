import Hero from './sections/Hero'
import WhatIs from './sections/WhatIs'
import Features from './sections/Features'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <WhatIs />
      <Features />
    </SmoothScroll>
  )
}

export default App
