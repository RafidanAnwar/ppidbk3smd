interface HeroProps {
  onProfilClick: () => void;
  onPermohonanClick: () => void;
}

const Hero = ({ onProfilClick, onPermohonanClick }: HeroProps) => {
  return (
    <section className="hero-ppid" id="home">
      <div className="hero-ppid-bg" />
      <div className="hero-ppid-overlay-dark" />

      <div className="hero-ppid-content">
        <h1 className="hero-ppid-title">
          PPID Balai Keselamatan dan <br />
          Kesehatan Kerja Samarinda
        </h1>
        <p className="hero-ppid-description">
          Dapatkan informasi seputar K3 melalui layanan PPID Balai <br />
          K3 Samarinda secara mudah dan cepat.
        </p>
        <div className="hero-ppid-buttons">
          <button 
            onClick={onPermohonanClick}
            className="btn-ppid-primary"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            Layanan Informasi Publik
          </button>
          <button 
            onClick={onProfilClick} 
            className="btn-ppid-secondary"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
