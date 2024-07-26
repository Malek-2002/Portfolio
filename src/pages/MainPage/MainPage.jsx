import React, { Component } from 'react';
import './MainPage.css';
import Card from '../../components/Card/Card';

class MainPage extends Component {
  state = { 
    currentCardIndex: 0,
    projects: [
      { title: "Welcome.", 
        content1: "My name is Malek Hossam, and I am a software engineer with a focus on backend development. I am passionate about crafting robust and efficient software solutions that drive positive impact.",
        content2: "I possess a strong foundation in data structures and algorithms, enabling me to develop efficient and optimized backend solutions.",
        certificates: [
          {
            title: "Micro Mouse",
            description: "Achieved first place in the annual on-campus Micro-Mouse Line Maze Competition.",
            link: "https://drive.google.com/file/d/1nKh3MpROXDYD43ZaNP8r-KOyWEF9KG8Z/view",
          },
          {
            title: "TCCD",
            description: "TCCD 2022, participant at the 8th Undergraduate Engineering Mathematics Research.",
            link: "https://drive.google.com/file/d/1yLdGIWvcjkp7uUXAea8fchdJo9jBys1t/view",
          }
        ] 
      },
      { 
        title: "GigaChat", 
        description: "full clone of twitter backend that includes authentication, tweets, real-time notifications and chatting using sockets and other features.",
        technologies: ["React", "Node.js", "Socket.io", 'MongoDB'],
        github: "https://github.com/Malek-2002/Backend"
      },
      { 
        title: "Doodle", 
        description: "Prepopulating our database using crawler, Indexer and ranker.    Search engine backend using REST APIs using Spring Boot.",
        technologies: ["Spring Boot", "java", "MongoDB"],
        github: "https://github.com/Malek-2002/Doodle-Search-Engine"
      },
      { 
        title: "Labtop Utopia", 
        description: "ecommerce website for pc building components and laptops by that providing a filtering operations that most of current websites lack.",
        technologies: ["Anguler", "PHP", "MySQL"],
        github: "https://github.com/Malek-2002/LaptopUtopia"
      },
      { title: "Arabic Font Recognition", 
        description: "Font recognition robust to noise and rotation then detecting lines and words with a smart cutting technique to get characters then entered to the classifier with accuracy 99.2 %.",
        technologies: ["Python"],
        github: "https://github.com/Malek-2002/Arabic-Font-Classification"
      },
      { title: "OS Scheduler", 
        description: "It simulated the OS responsibility for managing memory and time between processes. Implemented several algorithms including Round Robin and Buddy Memory allocation.",
        technologies: ["C"],
        github: "https://github.com/Malek-2002/OS-Scheduler"
      },
      { title: "Game Engine",
        description: "Game engine with support of multiple material for same model providing a unique movement and collision systems with multiple mode support system and multiple lighting support.",
        technologies: ["C++", "OpenGL", "GLSL"],
        github: "https://github.com/Malek-2002/OpenGL-MazeRunner"
      },
    ],
    isRotating: false,
  };

  handleCardChange = (index) => {
    
    const { currentCardIndex } = this.state;
    if(index === currentCardIndex) return;

    this.setState({ 
      currentCardIndex: index,
      isRotating: true 
    });

    // Reset rotation state after animation duration
    setTimeout(() => {
      this.setState({ isRotating: false });
    }, 100); // Animation duration should match the CSS transition
  };

  render() {
    const { currentCardIndex, projects, isRotating } = this.state;
    const currentCard = projects[currentCardIndex];

    return (
      <div className="container">
        <div className={`card-container ${isRotating ? 'rotate' : ''}`}>
          <Card
            title={currentCard.title}
            content1={currentCard.content1}
            content2={currentCard.content2}
            onProjectClick={this.handleCardChange}
            projects={projects}
            currentCard={currentCard}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;



<svg xmlns="http://www.w3.org/2000/svg" id="welcome" width="6.30667in" height="1.27333in" viewBox="0 0 1892 382"></svg>

        