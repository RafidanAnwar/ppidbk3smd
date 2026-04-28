
const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-bg-logo">
        <img src="/images/LOGO_TEPIANK3_2_alt.png" alt="" />
      </div>
      
      <div className="home-footer-container">
        <div className="home-footer-main">
          {/* Section 1: Logo & Tagline */}
          <div className="footer-col-1">
            <img src="/images/LOGO_TEPIANK3_1.png" alt="TEPIAN K3" className="footer-main-logo" />
            <p className="footer-tagline">
              Lembaga pelatihan dan pengujian keselamatan kerja terpercaya di Kalimantan Timur. 
              Membangun budaya aman untuk Indonesia maju.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="footer-col-2">
            <h3>Tautan Cepat</h3>
            <ul>
              <li><a href="#pelatihan">Program Pelatihan</a></li>
              <li><a href="#pengujian">Jadwal Pengujian</a></li>
              <li><a href="#biaya">Biaya Layanan</a></li>
              <li><a href="#verifikasi">Verifikasi Sertifikat</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="footer-col-3">
            <h3>Hubungi Kami</h3>
            <div className="contact-info">
              <p>balaik3samarinda@gmail.com</p>
              <p className="phone-link">(0541) 771306</p>
              <p className="address">
                Jl. Sentosa No.9, Sungai Pinang Dalam, Kec. Sungai Pinang, 
                Kota Samarinda, Kalimantan Timur 75242
              </p>
            </div>
          </div>
        </div>

        <div className="footer-line-separator" />

        <div className="footer-bottom-row">
          <div className="footer-social-section">
            <span>Sosial Media Kami</span>
            <div className="social-icons-group">
              <a href="#" className="social-icon-circle"><img src="/images/instagram-logo-bold.png" alt="Instagram" /></a>
              <a href="#" className="social-icon-circle"><img src="/images/youtube-logo-fill.png" alt="Youtube" /></a>
              <a href="#" className="social-icon-circle"><img src="/images/tiktok-logo-fill.png" alt="Tiktok" /></a>
              <a href="#" className="social-icon-circle"><img src="/images/x.png" alt="X" /></a>
            </div>
          </div>
          <p className="footer-copyright">
            Copyright © 2026 Balai K3 Samarinda. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
