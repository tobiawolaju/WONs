import React from 'react';
import './Roadmap.css'; // Import the external CSS file

function Roadmap() {
  return (
    <div className="roadmap-container">
      {/* Header Section */}
      <h1 className="roadmap-title">Roadmap</h1>

      {/* Roadmap Details */}
      <section className="roadmap-section">
        <h2 className="roadmap-heading">Q1 2025 - Foundation Building</h2>
        <ul className="roadmap-list">
          <li><strong>Game Launch:</strong> Full release of the browser-based game when Monad goes mainnet, accessible through any modern web browser.</li>
          <li><strong>Initial NFT Skins:</strong> Launch of the first series of NFT skins for characters, enhancing player customization and offering real ownership.</li>
        </ul>

        <h2 className="roadmap-heading">Q2 2025 - Community Engagement & Gameplay Enhancement</h2>
        <ul className="roadmap-list">
          <li>
            <strong>Catching Chickens Mode:</strong>
            <ul>
              <li>Live Events: Weekly timed events where players compete for high-value chickens, with rewards in whitelist spots for partner projects.</li>
              <li>NFT Rewards: Dynamic chicken NFTs that players can earn, trade, or use in-game.</li>
            </ul>
          </li>
          <li>
            <strong>Climbing Structures Mode:</strong>
            <ul>
              <li>Skill-based Challenges: Introduce more complex structures with varying difficulty levels.</li>
              <li>Exclusive Asset Rewards: Winners gain access to unique, limited-edition NFT assets or skins.</li>
            </ul>
          </li>
          <li><strong>Community Tournaments:</strong> First official WONs tournaments with significant rewards, including in-game assets and external project whitelist spots.</li>
        </ul>

        <h2 className="roadmap-heading">Q3 2025 - Expansion and Collaboration</h2>
        <ul className="roadmap-list">
          <li>Partnership Announcements: Collaborations with at least three new Web3 projects for exclusive rewards within WONs.</li>
          <li>New Game Modes: Launch "Utility Hunting Dungeons," where players explore, solve puzzles, or battle to gain utility tokens or rare NFTs.</li>
          <li>Tokenomics Update: Details of upcoming changes or integration of an in-game token to enhance the economy within WONs.</li>
        </ul>

        <h2 className="roadmap-heading">Q4 2025 - Growth & Sustainability</h2>
        <ul className="roadmap-list">
          <li>Seasonal Events: Themed around major holidays or community-driven themes with unique gameplay mechanics and rewards.</li>
          <li>Community Governance: Introduce a model where players can vote on game features, partnerships, or reward structures using their NFTs or tokens.</li>
          <li>Platform Enhancements: Upgrade server capabilities and game mechanics based on player feedback for smoother gameplay and scalability.</li>
        </ul>

        <h2 className="roadmap-heading">Continuous and Beyond</h2>
        <ul className="roadmap-list">
          <li>Regular Updates: Monthly gameplay updates and bug fixes to keep the game fresh and engaging.</li>
          <li>Community Feedback Loops: Implement regular AMA (Ask Me Anything) sessions on X Spaces or Discord to ensure the community's voice is heard in game development.</li>
          <li>Looking Ahead to 2026 and Beyond: Ecosystem expansion into other platforms, metaverse integration, and cross-game collaborations for asset usage.</li>
        </ul>
      </section>
    </div>
  );
}

export default Roadmap;
