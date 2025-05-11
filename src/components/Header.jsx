import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'

const navItems = [
  { label: 'What', href: '#what' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/60 dark:bg-black/60 backdrop-blur-md' : ''
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-dark dark:text-light transition-colors"
        >
          Nebula<span className="text-primary">OS</span>
        </a>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-muted dark:text-muted/80">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-dark dark:hover:text-light transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </Container>
    </motion.header>
  )
}

export default Header
