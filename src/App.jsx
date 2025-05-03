import Hero from './sections/Hero'
import WhatIs from './sections/WhatIs'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <WhatIs />
    </SmoothScroll>
  )
}

export default App
