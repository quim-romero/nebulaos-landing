import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initial = stored || (systemPrefersDark ? 'dark' : 'light')
    setTheme(initial)
    root.classList.remove('light', 'dark')
    root.classList.add(initial)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    root.classList.remove('light', 'dark')
    root.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
