/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css_style/SkillCard.css';  // Assuming you'll create a CSS file for styles

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <p><strong>Offered by:</strong> {skill.offeredBy}</p>
            <p><strong>Date Offered:</strong> {skill.dateOffered}</p>
            <button className="request-btn">Request Skill</button>
        </div>
    );
}

export default SkillCard;
