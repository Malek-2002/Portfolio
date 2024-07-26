import React, { Component } from 'react';
import './Card.css';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';

class Card extends Component {
  handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    this.lightEffect.style.setProperty('--cursor-x', `${x}%`);
    this.lightEffect.style.setProperty('--cursor-y', `${y}%`);
  };

  render() {
    const { title, content1, content2, onProjectClick, projects, currentCard } = this.props;

    console.log(projects);
    console.log("hello from Card");

    return (
      <div className="card" onMouseMove={this.handleMouseMove}>
        <div className="light-effect" ref={(ref) => (this.lightEffect = ref)}></div>
        <Header onProjectClick={onProjectClick}/>
        <MainContent
          title={title} 
          content1={content1}
          content2={content2}
          onProjectClick={onProjectClick}
          projects={projects}
          currentCard={currentCard}
        />
        <div className="footer">
          <span>© 2024 loca.com</span>
        </div>
      </div>
    );
  }
}

export default Card;
