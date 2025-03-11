import React from 'react';
import './Community.css';

function Community() {
  return (
    <div className="community-container">
      {/* Header Section */}
      <h1 className="community-header">Community</h1>

      {/* Introductory Text */}
      <p className="community-intro">
        Join a vibrant community of players, creators, and supporters. Connect, collaborate, and share your experiences with others passionate about World of Nads.
      </p>

      {/* Community Links */}
      <div className="community-links">
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="community-link discord-link"
        >
          Join us on Discord
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="community-link twitter-link"
        >
          Follow us on Twitter
        </a>
      </div>
    </div>
  );
}

export default Community;
