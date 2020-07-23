import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQFqXxjNwl0E2Q/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=UcrpsR2Vy1QWymQNeu_Bkv35fNJ5vqpab9tq4YD_8aE"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Kalpesh Dharpure</h2>
            <p className="subtitle">"A Cadet Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};