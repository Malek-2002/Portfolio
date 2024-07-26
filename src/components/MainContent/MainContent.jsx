import React, { Component } from 'react';

import './MainContent.css'
import Content from './Content/Content';
import Projects from './Projects/Projects';
class MainContent extends Component {
    render() {
        const { title, content1, content2, onProjectClick, projects, currentCard } = this.props;
        return (
            <div className="main-content">
                <Content className="content"
                    title={title}
                    content1={content1}
                    content2={content2}
                    currentCard={currentCard}
                />
                <Projects 
                    onProjectClick={onProjectClick}
                    projects={projects} 
                />
            </div>
        );
    }
}
 
export default MainContent;