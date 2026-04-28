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
import InformasiSetiapSaat from './components/InformasiSetiapSaat';
import InformasiSetiapSaatDetail from './components/InformasiSetiapSaatDetail';
import InformasiBerkala from './components/InformasiBerkala';
import InformasiSertaMerta from './components/InformasiSertaMerta';
import InformasiDikecualikan from './components/InformasiDikecualikan';
import MediaPublikasiDetail from './components/MediaPublikasiDetail';
import MediaPublikasiList from './components/MediaPublikasiList';

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
          <InformasiPublik onDetailClick={(id) => {
            if (id === 'informasi-setiap-saat') {
              setCurrentPage('informasi-setiap-saat');
              window.scrollTo(0, 0);
            } else if (id === 'informasi-berkala') {
              setCurrentPage('informasi-berkala');
              window.scrollTo(0, 0);
            } else if (id === 'informasi-serta-merta') {
              setCurrentPage('informasi-serta-merta');
              window.scrollTo(0, 0);
            } else if (id === 'informasi-dikecualikan') {
              setCurrentPage('informasi-dikecualikan');
              window.scrollTo(0, 0);
            }
          }} />
          <MediaPublikasi onSeeAllClick={() => {
            setCurrentPage('media-publikasi');
            window.scrollTo(0, 0);
          }} />
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

      {currentPage === 'informasi-setiap-saat' && (
        <>
          <InformasiSetiapSaat 
            onBack={() => setCurrentPage('ppid')} 
            onItemClick={() => {
              // Navigate to detail view for any item for now
              setCurrentPage('informasi-setiap-saat-detail');
              window.scrollTo(0, 0);
            }}
          />
          <Footer />
        </>
      )}

      {currentPage === 'informasi-setiap-saat-detail' && (
        <>
          <InformasiSetiapSaatDetail onBack={() => setCurrentPage('informasi-setiap-saat')} />
          <Footer />
        </>
      )}

      {currentPage === 'informasi-berkala' && (
        <>
          <InformasiBerkala 
            onBack={() => setCurrentPage('ppid')} 
            onItemClick={() => {
              setCurrentPage('informasi-berkala-detail');
              window.scrollTo(0, 0);
            }}
          />
          <Footer />
        </>
      )}

      {currentPage === 'informasi-berkala-detail' && (
        <>
          <InformasiSetiapSaatDetail 
            onBack={() => setCurrentPage('informasi-berkala')} 
            mainTitle="Daftar Informasi Berkala"
            categoryTitle="Profil & Struktur Organisasi"
          />
          <Footer />
        </>
      )}

      {currentPage === 'informasi-serta-merta' && (
        <>
          <InformasiSertaMerta onBack={() => setCurrentPage('ppid')} />
          <Footer />
        </>
      )}

      {currentPage === 'informasi-dikecualikan' && (
        <>
          <InformasiDikecualikan onBack={() => setCurrentPage('ppid')} />
          <Footer />
        </>
      )}

      {currentPage === 'media-publikasi' && (
        <>
          <MediaPublikasiList 
            onBack={() => setCurrentPage('ppid')} 
            onItemClick={() => {
              setCurrentPage('media-publikasi-detail');
              window.scrollTo(0, 0);
            }}
          />
          <Footer />
        </>
      )}

      {currentPage === 'media-publikasi-detail' && (
        <>
          <MediaPublikasiDetail onBack={() => setCurrentPage('media-publikasi')} />
          <Footer />
        </>
      )}
      
      <ChatbotAsty />
    </>
  );
}

export default App;
