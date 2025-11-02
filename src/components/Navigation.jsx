function Navigation({ theme, toggleTheme }) {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <a href="#" className="logo">MB</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#gem-library">GEM Library</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="cta-button">Contact Me</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
