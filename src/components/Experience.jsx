function Experience() {
  const experiences = [
    {
      year: '2023-Present',
      title: 'Senior Director, Sales',
      company: 'Verizon Business',
      achievements: [
        'Ranked #2 nationally among Sr. Directors with $12M+ team revenue delivery',
        'Reduced administrative burden by 35% through GPT-4 autonomous agents',
        'Elevated two underperforming teams to top national performance in 6 months',
        'Created "Boot Camp" coaching methodology scaled organization-wide'
      ]
    },
    {
      year: '2021-2023',
      title: 'Director, Enterprise Sales',
      company: 'Verizon Business',
      achievements: [
        'Led strategic account portfolio generating $8M+ annual revenue',
        'Developed executive dashboards integrating Salesforce and Google Workspace',
        'Implemented AI-driven prospecting tools increasing pipeline by 45%',
        'Mentored 12 Account Executives to quota achievement'
      ]
    },
    {
      year: '2019-2021',
      title: 'Senior Account Executive',
      company: 'Verizon Business',
      achievements: [
        'Consistently achieved 120%+ quota across multiple quarters',
        'Secured 750+ line enterprise account with C-level engagement',
        'Built automated quote generation system reducing turnaround by 60%',
        'Recognized as top performer in Mid-Atlantic region'
      ]
    }
  ]

  return (
    <section id="experience" className="experience fade-in">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{exp.year}</div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
