import React from 'react';
import './Whitepaper.css'; // Import external CSS file

class Whitepaper extends React.Component {
  render() {
    return (
      <div className="whitepaper-container">
        
<div style={{
  height:'60px'
}}>
</div>
        {/* Header Section */}
        <h1 className="whitepaper-title">Whitepaper</h1>

        {/* Introduction Section */}
        <section className="section">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            Welcome to the World of Nads (WONs), a pioneering browser-based, real-time multiplayer
            game that integrates blockchain technology to offer a unique gaming experience. WONs aims
            to redefine gaming by combining fun, competitive gameplay with the benefits of Web3
            technologies, including NFT ownership and community-driven rewards.
          </p>
        </section>

        {/* Vision Section */}
        <section className="section">
          <h2 className="section-title">Vision</h2>
          <p className="section-text">
            WONs envisions a gaming world where players not only enjoy competitive gameplay but also
            benefit from their participation through tangible rewards in the form of NFTs and
            whitelist (WL) spots for collaborative projects. Our focus is on creating an engaging
            environment that rewards skill, strategy, and community involvement.
          </p>
        </section>

        {/* Game Mechanics Section */}
        <section className="section">
          <h2 className="section-title">Game Mechanics</h2>

          <h3 className="subsection-title">1. Catching Chickens</h3>
          <p className="section-text">
            <strong>Objective:</strong> Capture chickens of varying values scattered across the game
            world.<br />
            <strong>Gameplay:</strong> Players compete in real-time to catch as many chickens as
            possible within a timed session. Each chicken has a unique value, and the player with the
            highest total value at the end of the session wins.<br />
            <strong>Rewards:</strong> Winners receive whitelist spots for upcoming NFT and Web3
            projects WONs collaborates with.
          </p>

          <h3 className="subsection-title">2. Climbing Structures for Extraction</h3>
          <p className="section-text">
            <strong>Objective:</strong> Players must navigate and climb various structures to reach
            the top for extraction.<br />
            <strong>Gameplay:</strong> This mode tests players' speed, strategy, and agility. The
            first players to reach the extraction point are acknowledged as the winners.<br />
            <strong>Rewards:</strong> Winners unlock exclusive skins or in-game assets, which could be
            minted as NFTs.
          </p>
        </section>

        {/* Blockchain Integration Section */}
        <section className="section">
          <h2 className="section-title">Blockchain Integration</h2>
          <ul className="section-list">
            <li>Players connect their wallets to ensure secure, decentralized identity verification.</li>
            <li>Exclusive skins and game assets minted as NFTs provide true ownership.</li>
            <li>Dynamic reward systems tied to player performance with token or whitelist integration.</li>
          </ul>
        </section>

        {/* Collaboration Proposal */}
        <section className="section">
          <h2 className="section-title">Collaboration Proposal</h2>
          <p className="section-text">
            WONs seeks collaborations with Web3 and NFT projects to create unique engagement
            opportunities. Collaborate with us to gain exposure, gamify your engagement, and build
            shared growth.
          </p>
        </section>
      </div>
    );
  }
}

export default Whitepaper;
