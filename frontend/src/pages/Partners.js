import React from 'react';
import './Partners.css';

class Partners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        { name: 'Monad Blockchain', logo: 'w.png' },
        { name: 'XYZ Gaming Studios', logo:  'w.png' },
        { name: 'CryptoTech Ventures', logo:  'w.png'},
        { name: 'NFT Project 1', logo: 'w.png' },
        { name: 'NFT Project 2', logo:  'w.png' },
      ],
    };
  }

  render() {
    return (
      <div className="partners-container">
        <h1 className="partners-title">Partners</h1>
        <p className="partners-description">
          We are proud to collaborate with these amazing partners who help bring the World of Nads (WONs) vision to life:
        </p>
        <div className="partners-grid">
          {this.state.partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Partners;
