
const PelatihanFooter = () => {
  return (
    <footer className="pelatihan-footer">
      <div className="footer-bg-logo">
        <img src="/images/LOGO TEPIANK3 2 (1).png" alt="Watermark" />
      </div>
      
      <div className="footer-container">
        <div className="footer-main-row">
          {/* Frame 1000007548: About */}
          <div className="footer-col-about">
            <img src="/images/LOGO TEPIANK3 1.png" alt="Logo" className="footer-logo-main" />
            <p className="footer-about-text">
              Lembaga pelatihan dan pengujian keselamatan kerja terpercaya di Kalimantan Timur. Membangun budaya aman untuk Indonesia maju.
            </p>
          </div>

          {/* Frame 1000007546: Links */}
          <div className="footer-col-links">
            <h3>Tautan Cepat</h3>
            <ul className="footer-links-list">
              <li><a href="#">Program Pelatihan</a></li>
              <li><a href="#">Jadwal Pengujian</a></li>
              <li><a href="#">Biaya Layanan</a></li>
              <li><a href="#">Verifikasi Sertifikat</a></li>
            </ul>
          </div>

          {/* Frame 1000007547: Contact */}
          <div className="footer-col-contact">
            <h3>Hubungi Kami</h3>
            <div className="footer-contact-info">
              <p>balaik3samarinda@gmail.com</p>
              <p className="phone">(0541) 771306</p>
              <p>Jl. Sentosa No.9, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75242</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          {/* Line 37: Divider */}
          <div className="footer-divider-line"></div>

          {/* Frame 1000007550: Social Media */}
          <div className="footer-social-frame">
            <span>Sosial Media Kami</span>
            <div className="footer-social-icons">
              <div className="footer-social-icon-box">
                <img src="/images/instagram-logo-bold.png" alt="Instagram" />
              </div>
              <div className="footer-social-icon-box">
                <img src="/images/youtube-logo-fill.png" alt="YouTube" />
              </div>
              <div className="footer-social-icon-box">
                <img src="/images/tiktok-logo-fill.png" alt="TikTok" />
              </div>
              <div className="footer-social-icon-box">
                <img src="/images/x.png" alt="X" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright-text">
            Copyright © 2026 Balai K3 Samarinda. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PelatihanFooter;
