function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Mark Bockrath</h1>
        <p className="tagline">AI-Driven Sales Executive | Transforming Teams Through Automation</p>
        
        <div className="hero-metrics">
          <div className="metric">
            <span className="metric-value">$12M+</span>
            <span className="metric-label">Annual Revenue</span>
          </div>
          <div className="metric">
            <span className="metric-value">#2</span>
            <span className="metric-label">National Ranking</span>
          </div>
          <div className="metric">
            <span className="metric-value">80%</span>
            <span className="metric-label">Quota Achievement</span>
          </div>
          <div className="metric">
            <span className="metric-value">35%</span>
            <span className="metric-label">Efficiency Gain</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">
            <i className="fas fa-briefcase"></i> View Portfolio
          </a>
          <a href="/Exec_resume_10_2025.pdf" download className="btn btn-primary" style={{background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)', border: 'none'}}>
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
