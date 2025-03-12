import React, { useEffect, useRef } from 'react';
import "./Home.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';



function Home() {
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imgElement = entry.target;
          if (entry.isIntersecting) {
            imgElement.classList.add("in-view");
          } else {
            imgElement.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the image is visible
      }
    );

    // Observe only valid elements
    imgRefs.current.forEach((img) => {
      if (img instanceof Element) {
        observer.observe(img);
      }
    });

    return () => {
      // Unobserve only valid elements
      imgRefs.current.forEach((img) => {
        if (img instanceof Element) {
          observer.unobserve(img);
        }
      });
    };
  }, []);

  return (
    <div className="home-container">

<div style={{
  height:'60px'
}}>
</div>
      <h1 className="title">WONs</h1>
      <h2 className="subtitle"></h2>

      <img
        ref={(el) => (imgRefs.current[0] = el)}
        src="img1.png"
        className="black-and-white"
      />

      <section>
        <p className="text">

          <strong className="text-heading">Bounty on Monad</strong>

      community based NFT Battle royal where anyone can mint a nadvater and join the weekly bounty hunting  </p>
      </section>













      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          width: '100vw',
          margin: 'auto',
        }}
      >
        {/* Image */}
        <img
        ref={(el) => (imgRefs.current[1] = el)}
        src="img2.png"
        className="black-and-white"
      />

        {/* Play Game Button */}

        <button 

        
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#ffffff',
    color: "#000",
    padding: '5px',
    borderRadius: '15px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.14)',
  }}
  className="connectwallet"
>
  Join Testnet
  <ConnectButton
   accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
  }}
  />
</button>


     
      </div>


      <section>
        <p className="text">

          <strong className="text-heading">Mint your Avatar</strong>
          Join the rest of the nads by becoming a nad, get faucet @linktofaucet
          Mint your Nadvater and Dive into the actions
          </p>
        </section>

      <img
        ref={(el) => (imgRefs.current[2] = el)}
        src="img3.png"
        className="black-and-white"
      />
      <section>
        <p className="text">

          <strong className="text-heading">Community</strong>
Get in our discord too stay ahead
</p>
      </section>
    </div>
  );
}

export default Home;
