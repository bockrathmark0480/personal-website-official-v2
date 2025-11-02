function Contact() {
  return (
    <section id="contact" className="contact fade-in">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Interested in AI-driven sales automation, team transformation, or discussing opportunities? I'd love to hear from you.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:mark.bockrath@example.com">mark.bockrath@example.com</a>
              </div>
            </div>
            <div className="contact-method">
              <i className="fab fa-linkedin"></i>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/markbockrath" target="_blank" rel="noopener noreferrer">linkedin.com/in/markbockrath</a>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>Available upon request</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
