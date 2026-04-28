import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeHero from './components/HomeHero';
import HomeServices from './components/HomeServices';
import HomeAbout from './components/HomeAbout';
import HomeNews from './components/HomeNews';
import HomeFAQ from './components/HomeFAQ';
import LayananPublik from './components/LayananPublik';
import InformasiPublik from './components/InformasiPublik';
import MediaPublikasi from './components/MediaPublikasi';
import KontakKami from './components/KontakKami';
import Footer from './components/Footer';
import HomeFooter from './components/HomeFooter';
import Pelatihan from './components/Pelatihan';
import PelatihanNavbar from './components/PelatihanNavbar';
import PelatihanFooter from './components/PelatihanFooter';
import ChatbotAsty from './components/ChatbotAsty';
import ProfilPPID from './components/ProfilPPID';

import PermohonanInformasi from './components/PermohonanInformasi';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Change default to home to see work

  return (
    <>
      {currentPage === 'pelatihan' ? (
        <PelatihanNavbar onPageChange={setCurrentPage} />
      ) : (
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      )}
      
      {currentPage === 'home' && (
        <div className="home-wrapper">
          <div className="grid-pattern" />
          <div className="blur-decoration blur-green" />
          <div className="blur-decoration blur-orange" />
          
          <HomeHero />
          <HomeServices onPelatihanClick={() => setCurrentPage('pelatihan')} />
          <HomeAbout />
          <HomeNews />
          <HomeFAQ />
          <HomeFooter />
        </div>
      )}

      {currentPage === 'ppid' && (
        <>
          <Hero 
            onProfilClick={() => setCurrentPage('profil-ppid')} 
            onPermohonanClick={() => setCurrentPage('permohonan-informasi')}
          />
          <LayananPublik 
            onPelatihanClick={() => setCurrentPage('pelatihan')} 
            onPermohonanClick={() => setCurrentPage('permohonan-informasi')}
          />
          <InformasiPublik />
          <MediaPublikasi />
          <KontakKami />
          <Footer />
        </>
      )}

      {currentPage === 'pelatihan' && (
        <>
          <Pelatihan />
          <PelatihanFooter />
        </>
      )}

      {currentPage === 'profil-ppid' && (
        <>
          <ProfilPPID 
            onPermohonanClick={() => setCurrentPage('permohonan-informasi')}
          />
          <Footer />
        </>
      )}

      {currentPage === 'permohonan-informasi' && (
        <>
          <PermohonanInformasi onBack={() => setCurrentPage('profil-ppid')} />
          <Footer />
        </>
      )}
      
      <ChatbotAsty />
    </>
  );
}

export default App;
