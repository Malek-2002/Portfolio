import React, { Component } from 'react';
import './Header.css'; // Create this file for styling
import { FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa'; // Import icons from react-icons
import { SiLeetcode } from "react-icons/si";

class Header extends Component {
    render() { 
        const { onProjectClick } = this.props; 
        return (
            <div className="header" onClick={() => onProjectClick(0)}>
                <div className="logo">
                    M
                </div>
                <div className="icons">
                    <a href="https://github.com/Malek-2002" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://leetcode.com/u/user5423WT/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="icon" />
                    </a>
                    <a href="mailto:malek.200290mh@gmail.com">
                    <FaEnvelope className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/malek-hossam-5399b8224/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon" />
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Header;