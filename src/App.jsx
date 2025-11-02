import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Portfolio from './components/Portfolio'
import GemShowcase from './components/GemShowcase'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Hide loader
    setTimeout(() => {
      const loader = document.querySelector('.loader')
      if (loader) loader.style.display = 'none'
    }, 1000)

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <>
      {/* Loader */}
      <div className="loader">
        <div className="loader-content">
          <div className="loader-spinner"></div>
        </div>
      </div>

      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Achievements />
      <Portfolio />
      <GemShowcase />
      <Experience />
      <Contact />
    </>
  )
}

export default App
