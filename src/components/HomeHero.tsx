
const HomeHero = () => {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero-bg" />
      <div className="home-hero-overlay-dark" />

      <div className="home-hero-content">
        <h1>
          Pusat Pelatihan<br />
          K3 Samarinda
        </h1>
        <p className="home-hero-description">
          Meningkatkan standar keselamatan kerja melalui program pelatihan profesional 
          dan sertifikasi kompetensi yang diakui secara nasional.
        </p>
        
        <div className="home-hero-stats">
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Perusahaan Mitra</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Pelatihan Selesai</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">98%</span>
            <span className="stat-label">Tingkat Kepuasan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
