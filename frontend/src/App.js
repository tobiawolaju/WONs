import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundPattern from "./components/Background"
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Whitepaper from './pages/Whitepaper';
import Roadmap from './pages/Roadmap';
import Community from './pages/Community';
import Partners from './pages/Partners';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});



const queryClient = new QueryClient();

function App() {
  return (

    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>



      <BackgroundPattern>
      </BackgroundPattern>

      <Router>
      {/* Layout container to handle navbar, main content, and footer */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Top Navigation Bar */}
        <TopNavbar />

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/community" element={<Community />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/partners" element={<Partners />} />
           </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
    

 
    
    </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
