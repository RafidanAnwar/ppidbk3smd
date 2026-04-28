import { useState, useEffect } from 'react';

const Navbar = ({ currentPage, onPageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); onPageChange('home'); }}>
          <img src="/images/LOGO TEPIANK3 2.png" alt="TEPIAN K3 - Balai K3 Samarinda" />
        </a>

        <div className={`navbar-links ${mobileOpen ? 'active' : ''}`}>
          <a
            href="#beranda"
            className={currentPage === 'home' ? 'active-link' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('home'); }}
          >
            Beranda
          </a>

          <a href="#transaksi">Transaksi</a>
          <a href="#faq">FAQ</a>
          <a href="#ppid"
            className={currentPage === 'ppid' ? 'active-link' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('ppid'); }}
          >
            PPID
          </a>
        </div>

        <div className="navbar-cta">
          <div className="nav-icon-circle" aria-label="Bookmark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="nav-icon-circle" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <div className="nav-avatar">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#E2E8F0" />
              <path d="M18 19C20.7614 19 23 16.7614 23 14C23 11.2386 20.7614 9 18 9C15.2386 9 13 11.2386 13 14C13 16.7614 15.2386 19 18 19Z" fill="#94A3B8" />
              <path d="M10.3894 26.8501C11.979 24.1664 14.819 22.5 18 22.5C21.181 22.5 24.021 24.1664 25.6106 26.8501C23.708 28.8169 21.0101 30 18 30C14.9899 30 12.292 28.8169 10.3894 26.8501Z" fill="#94A3B8" />
            </svg>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
