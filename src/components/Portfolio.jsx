function Portfolio() {
  const projects = [
    {
      id: 'agent',
      title: 'Executive Job Search Agent',
      subtitle: 'Autonomous AI Agent for Job Discovery',
      description: 'Built an autonomous GPT-4 powered agent that searches, scores, and reports on Director+ level opportunities daily. Integrates with job boards, tracks applications, and provides market insights.',
      tech: ['GPT-4', 'Python', 'Google Sheets API', 'Automation'],
      metrics: [
        { value: '5-10', label: 'Daily Matches' },
        { value: '85%', label: 'Accuracy' }
      ]
    },
    {
      id: 'dashboard',
      title: 'Sales Intelligence Dashboard',
      subtitle: 'Real-Time Performance Analytics',
      description: 'Executive-level dashboard integrating Salesforce CRM, Google Workspace, and custom analytics APIs for real-time revenue forecasting and predictive insights.',
      tech: ['Salesforce API', 'Google Apps Script', 'JavaScript', 'Data Studio'],
      metrics: [
        { value: '40%', label: 'Better Forecasting' },
        { value: 'Real-time', label: 'Updates' }
      ]
    },
    {
      id: 'framework',
      title: 'AI Coaching Framework',
      subtitle: 'Scalable Performance Methodology',
      description: 'Developed comprehensive coaching framework combining AI-powered performance analysis with structured development plans, achieving 100% success rate.',
      tech: ['AI Analysis', 'Performance Data', 'Training Programs'],
      metrics: [
        { value: '100%', label: 'Success Rate' },
        { value: '6 mo', label: 'Transform Time' }
      ]
    }
  ]

  return (
    <section id="portfolio" className="portfolio fade-in">
      <h2 className="section-title">AI & Automation Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-header">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <div className="portfolio-body">
              <p>{project.description}</p>
              <div className="portfolio-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="portfolio-metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="portfolio-metric">
                    <div className="portfolio-metric-value">{metric.value}</div>
                    <div className="portfolio-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
