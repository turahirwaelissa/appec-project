import React from 'react'
import './program.css'

export default function Program() {
  return (
    <section id="program" className="program" role="region" aria-label="Programs">
      <h1>Programs</h1>
      <p>
        APPEC TSS offers several programs to support student learning and career
        readiness. Below are example program categories. Update these to match your
        actual offerings.
      </p>

      <div className="program-grid">
          <div className="prog-card-content">
            <h4>Software Development</h4>
            <p className="muted">Practical and theoretical courses to build modern websites and applications.</p>
        </div>

        <div className="prog-card">
    
          <div className="prog-card-content">
            <h4>Accounting & Professional</h4>
            <p className="muted">Courses that deal with financial management and professional practice.</p>
          </div>
        </div>

        <div className="prog-card">
         
          <div className="prog-card-content">
            <h4>Building & Construction</h4>
            <p className="muted">Hands-on training in construction trades and site management.</p>
          </div>
        </div>

        <div className="prog-card">
        
          <div className="prog-card-content">
            <h4>Computer Systems & Architecture</h4>
            <p className="muted">Introductory to advanced topics in computer systems and architecture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
