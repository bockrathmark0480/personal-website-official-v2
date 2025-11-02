import profileImage from '../assets/Bockrath_Website_Picture.png'

function About() {
  return (
    <section id="about" className="fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-img">
            <img src={profileImage} alt="Mark Bockrath Professional Headshot" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
          </div>
        </div>
        <div className="about-text">
          <p className="about-intro">
            AI-driven sales executive with a proven track record of transforming underperforming teams into national leaders through strategic automation and data-driven coaching methodologies.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Ranked #2 nationally among Sr. Directors, leading team to $12M+ annual revenue</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Pioneered GPT-4 powered autonomous agents reducing admin burden by 35%</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Elevated two underperforming teams to top national performance in just 6 months</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Created scalable coaching methodology with 100% success rate</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Built executive dashboards integrating Salesforce & Google Workspace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
