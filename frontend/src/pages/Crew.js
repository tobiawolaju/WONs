import React from 'react';
import './Crew.css'; // Import external CSS file

class Crew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crew: [
        { role: 'Founder', name: 'John Doe' },
        { role: 'Lead Developer', name: 'Jane Smith' },
        { role: 'Artist', name: 'Alex Brown' },
        { role: 'Community Manager', name: 'Chris Johnson' },
      ],
    };
  }

  render() {
    return (
      <div className="crew-container">
        
<div style={{
  height:'60px'
}}>
</div>
        {/* Header Section */}
        <h1 className="crew-title">WON's Crew</h1>

        {/* Introductory Text */}
        <p className="crew-intro">
          Meet the talented team behind World of Nads, bringing creativity, technical expertise, and innovation to life.
        </p>

        {/* Team List */}
        <ul className="crew-list">
          {this.state.crew.map((member, index) => (
            <li key={index} className="crew-member">
              <strong className="crew-role">{member.role}:</strong>
              <span className="crew-name">{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Crew;
