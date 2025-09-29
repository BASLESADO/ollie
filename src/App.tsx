import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DonationBox from './components/DonationBox';
import CampaignContent from './components/CampaignContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CampaignContent />
            
            {/* Donation Box - Right Sidebar */}
            <div className="lg:col-span-1">
              <DonationBox />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;