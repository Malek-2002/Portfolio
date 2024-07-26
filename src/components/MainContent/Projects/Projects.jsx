import React, { Component } from 'react';

import './Projects.css'

class Projects extends Component {
    render() { 
        const { onProjectClick, projects } = this.props;
        return (
          <div className="projects">
          <h2>Projects</h2>
          <ul>
            {projects && projects
              .filter(project => project.title !== 'Welcome.')
              .map((project, index) => (
                <li key={index}>
                  <a href="#" onClick={() => onProjectClick(index + 1)}>{project.title}</a>
                </li>
              ))}
          </ul>
        </div>
        );
    }
}
 
export default Projects;