// src/pages/MeetTheTeam.js
import React from 'react';
import './MeetTheTeam.css';

function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Brynn Hillard',
      role: 'CEO / Co-Founder',
      description:
        'Leading the charge with a vision for user experience and growth.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQETkTA9ZXrTUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711731192744?e=1741219200&v=beta&t=pMR9X7EezOw2T3MmYPEO80cVBz8_PTaxNWBSWeqVoHY',
    },
    {
      name: 'Aerin Krebs',
      role: 'CTO / Co-Founder',
      description:
        'Bringing cutting-edge technology to build the best product possible.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQE_k_pR9SZZtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682558453308?e=1741219200&v=beta&t=9TrVbZofqx7H2W0BG-Dmig9HBVo9Li784UaLBi-ysPw',
    },
    // Add more members as needed
  ];

  return (
    <div className="meet-the-team-container">
      <h1>Meet The Team</h1>
      <p>
        We are a passionate group of individuals dedicated to bring book sharing to life!
      </p>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetTheTeam;
