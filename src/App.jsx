import Hero from './sections/Hero'
import WhatIs from './sections/WhatIs'
import Features from './sections/Features'
import Demo from './sections/Demo'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <WhatIs />
      <Features />
      <Demo />
    </SmoothScroll>
  )
}

export default App
