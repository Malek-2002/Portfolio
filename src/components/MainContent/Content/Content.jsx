import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    const { title, content1, content2, currentCard } = this.props;

    if (title === "Welcome.") {
      return (
        <div className="content">
          <h1>{currentCard.title}</h1>
          <p>{currentCard.content1}</p>
          <h3 className="certificates-header">Certificates</h3>
          <ul className="certificates-list">
            {currentCard.certificates.map((certificate, index) => (
              <li key={index} className="certificate">
                <h5><a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">{certificate.title}</a></h5>
                <p>{certificate.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="content">
          <h2>{currentCard.title}</h2>
          <p>{currentCard.description}</p>
          <h3>Technologies</h3>
          <div className="technologies">
            {currentCard.technologies.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
          <div className="links">
            <a href={currentCard.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub Link
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Content;
