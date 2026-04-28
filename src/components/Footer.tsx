const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wave-bg"></div>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-left">
            <img src="/images/LOGO_TEPIANK3_1.png" alt="TEPIAN K3 Logo" className="footer-logo" />
            <p>
              Pejabat Pengelola Informasi dan<br />
              Dokumentasi (PPID) Balai K3 Samarinda
            </p>
          </div>
          <div className="footer-right">
            <p>
              Layanan informasi publik yang<br />
              transparan dan akuntabel.
            </p>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>Copyright © 2026 Balai K3 Samarinda. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
