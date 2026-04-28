
const HomeAbout = () => {
  return (
    <section className="home-about-section" id="tentang">
      <div className="home-about-container">
        <div className="about-image-wrapper">
          <img src="/images/company_profile.png" alt="Balai K3 Samarinda Activity" className="about-main-img" />
          <div className="experience-badge-blue">
            <span className="exp-number-large">30+</span>
            <span className="exp-text-large">Tahun Pengalaman</span>
          </div>
        </div>
        
        <div className="about-content-new">
          <span className="about-subtitle">TEPIAN K3</span>
          <h2 className="about-title-main">Balai Keselamatan dan Kesehatan Kerja Samarinda</h2>
          <div className="about-description-group">
            <p>
              Balai Keselamatan dan kesehatan kerja (K3) Samarinda merupakan lembaga 
              resmi yang berperan strategis dalam mendukung penerapan K3 melalui 
              pembinaan, pengujian dan pelatihan intensif.
            </p>
            <p>
              Tujuan utama kami adalah menciptakan lingkungan kerja yang aman, sehat, 
              dan produktif demi kesejahteraan tenaga kerja serta keberlangsungan 
              industri sesuai regulasi yang berlaku.
            </p>
          </div>
          <a href="#selengkapnya" className="about-cta-link">
            Baca selengkapnya <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
