interface PelatihanNavbarProps {
  onPageChange: (page: string) => void;
}

const PelatihanNavbar = ({ onPageChange }: PelatihanNavbarProps) => {
  return (
    <nav className="pelatihan-navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => onPageChange('home')} style={{ cursor: 'pointer' }}>
          <img src="/images/LOGO TEPIANK3 2.png" alt="Logo Tepian K3" />
        </div>
        
        <div className="navbar-menu">
          <div className="menu-item active" onClick={() => onPageChange('home')}>Beranda</div>
          <div className="menu-item">E-Learning</div>
          <div className="menu-item">Pelatihan</div>
          <div className="menu-item">Webinar</div>
        </div>

        <div className="navbar-actions">
          <div className="action-icon bookmark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="action-icon cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PelatihanNavbar;
