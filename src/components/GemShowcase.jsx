import { useState } from 'react'
import { gems } from '../data/gems'

function GemShowcase() {
  const [selectedGem, setSelectedGem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(gems.map(gem => gem.category))]
  
  const filteredGems = gems.filter(gem => {
    const matchesSearch = gem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gem.useCase.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || gem.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="gem-library" className="gem-library fade-in">
      <h2 className="section-title">GEM Library</h2>
      <p className="section-subtitle">Generative Enhancement Modules - AI Automation Tools</p>
      
      <div className="gem-controls">
        <div className="gem-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search GEMs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="gem-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="gem-grid">
        {filteredGems.map(gem => (
          <div key={gem.id} className="gem-card" onClick={() => setSelectedGem(gem)}>
            <div className="gem-header">
              <span className="gem-icon">{gem.icon}</span>
              <div>
                <h3>{gem.name}</h3>
                <span className={`gem-badge ${gem.difficulty.toLowerCase()}`}>{gem.difficulty}</span>
              </div>
            </div>
            <p className="gem-description">{gem.useCase}</p>
            <div className="gem-footer">
              <span><i className="fas fa-clock"></i> {gem.setupTime}</span>
              <span><i className="fas fa-eye"></i> {gem.views}</span>
              <span><i className="fas fa-heart"></i> {gem.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedGem && (
        <div className="modal" style={{display: 'flex'}} onClick={() => setSelectedGem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setSelectedGem(null)}>×</span>
            <div className="gem-detail">
              <div className="gem-detail-header">
                <span className="gem-icon-large">{selectedGem.icon}</span>
                <div>
                  <h2>{selectedGem.name}</h2>
                  <span className={`gem-badge ${selectedGem.difficulty.toLowerCase()}`}>{selectedGem.difficulty}</span>
                </div>
              </div>
              <div className="gem-detail-section">
                <h3>Use Case</h3>
                <p>{selectedGem.useCase}</p>
              </div>
              <div className="gem-detail-section">
                <h3>Setup Time</h3>
                <p>{selectedGem.setupTime}</p>
              </div>
              <div className="gem-detail-section">
                <h3>Required Input</h3>
                <p>{selectedGem.userInput}</p>
              </div>
              <div className="gem-detail-section">
                <h3>Setup Requirements</h3>
                <p>{selectedGem.setup}</p>
              </div>
              {selectedGem.setupSteps && (
                <div className="gem-detail-section">
                  <h3>Setup Steps</h3>
                  <ol>
                    {selectedGem.setupSteps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="gem-tags">
                {selectedGem.tags.map((tag, i) => (
                  <span key={i} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GemShowcase
