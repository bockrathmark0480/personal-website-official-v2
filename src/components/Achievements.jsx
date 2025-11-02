function Achievements() {
  const achievements = [
    {
      icon: 'trophy',
      title: 'National Performance',
      value: '#2 Nationally',
      description: 'Ranked #2 on Sr. Director leaderboard with 80%+ quota participation across frontline organization in 2024'
    },
    {
      icon: 'dollar-sign',
      title: 'Revenue Delivery',
      value: '$12M+',
      description: 'Led team to deliver over $12M in annual revenue, with the team achieving 10 of 12 months at or above quota'
    },
    {
      icon: 'robot',
      title: 'AI Implementation',
      value: '35%',
      description: 'Reduced administrative burden by 35% through GPT-4 powered autonomous agents'
    },
    {
      icon: 'chart-line',
      title: 'Team Transformation',
      value: '6 Months',
      description: 'Elevated two underperforming teams to top national performance in just 6 months'
    },
    {
      icon: 'users',
      title: 'Coaching Excellence',
      value: '100%',
      description: 'Created "Boot Camp" methodology with 100% success rate, now scaled organization-wide'
    },
    {
      icon: 'handshake',
      title: 'Enterprise Sales',
      value: '750+ Lines',
      description: 'Strategic acquisition of 750+ line New Logo account with executive sponsorships'
    }
  ]

  return (
    <section id="achievements" className="achievements fade-in">
      <h2 className="section-title">Key Achievements</h2>
      <div className="achievement-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              <i className={`fas fa-${achievement.icon}`}></i>
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <div className="achievement-value">{achievement.value}</div>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
