import React from 'react';
import HomeFAQ from './HomeFAQ';

const Pelatihan = () => {
  const courses = [1, 2, 3, 4]; // Placeholder for mapping cards

  return (
    <div className="pelatihan-landing">
      {/* HERO BANNER SECTION */}
      <section className="pelatihan-hero-banner">
        <div className="banner-card">
          <div className="banner-blue-bg">
            <img src="/images/LOGO TEPIANK3 2 (1).png" alt="Logo BG" className="banner-logo-bg" />
          </div>
          <div className="banner-content">
            <div className="heading-group">
              <h1 className="banner-title">
                <span>WUJUDKAN</span>
                <span>ZERO</span>
                <span>ACCIDENT</span>
              </h1>
              <p className="banner-subtitle">Dengan Pelatihan K3 Berkualitas</p>
            </div>
            <button className="btn-daftar-new">
              <span className="btn-text">Daftar Sekarang!</span>
              <div className="btn-arrow-icon">
                <img src="/images/Button arrow.png" alt="Arrow" />
              </div>
            </button>
          </div>
          <div className="banner-talent-new">
            <img src="/images/pelatihan_banner_talent.png" alt="Talent" className="talent-img-new" />
          </div>
          <button className="slider-arrow prev">
             <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <button className="slider-arrow next">
             <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>

      {/* KEUNGGULAN SECTION */}
      <section className="pelatihan-keunggulan">
        <div className="keunggulan-left">
          <div className="badge-group">
            <div className="rect-9" />
            <span>Keunggulan kami</span>
          </div>
          <h2>Kenapa Memilih Kami?</h2>
          <div className="underline-gradient" />
          
          <div className="keunggulan-items">
            <div className="keunggulan-item">
              <div className="icon-circle-check">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="item-text">
                <h3>Instruktur Bersertifikasi</h3>
                <p>Dilatih langsung oleh para praktisi dan asesor K3 profesional.</p>
              </div>
            </div>
            <div className="keunggulan-item">
              <div className="icon-circle-check">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="item-text">
                <h3>Sertifikasi Resmi BNSP</h3>
                <p>Sertifikat yang diterbitkan diakui secara nasional oleh Kemnaker RI dan BNSP.</p>
              </div>
            </div>
            <div className="keunggulan-item">
              <div className="icon-circle-check">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="item-text">
                <h3>Metode Belajar Fleksibel</h3>
                <p>Pilihan metode pelatihan secara Offline (Tatap Muka), Online (Daring), maupun Blended Learning sesuai kebutuhan.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="keunggulan-right">
          <div className="talent-display">
            <div className="blue-slanted-bg" />
            <img src="/images/image 60.png" alt="Talent Keunggulan" className="talent-image-keunggulan" />
          </div>
        </div>
      </section>

      {/* E-LEARNING SECTION */}
      <section className="program-section blue-variant">
        <div className="section-container">
          <div className="section-header">
            <div className="badge-group">
              <div className="rect-9" />
              <span>E-learning</span>
            </div>
            <div className="header-flex">
              <h2>Materi K3 Terpopuler</h2>
              <button className="btn-view-all">
                Lihat semua
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1061D6" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          <div className="course-grid-new">
            {courses.map(i => (
              <div className="course-card-new" key={i}>
                <div className="card-image-box">
                  <img src="/images/course_thumb.png" alt="Course" />
                  <div className="badge-hse">HSE PROGRAM</div>
                </div>
                <div className="card-info">
                  <h3>Membangun Budaya Kerja Aman dan Berkelanjutan</h3>
                  <div className="card-meta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D4D4D" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Terdaftar : 2 juni 2026</span>
                  </div>
                  <div className="card-pricing">
                    <p>Harga Mulai</p>
                    <span className="price">Rp 3.500.000</span>
                  </div>
                  <button className="btn-card-detail">Detail Pelatihan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PELATIHAN SECTION */}
      <section className="program-section white-variant">
        <div className="section-container">
          <div className="section-header">
            <div className="badge-group">
              <div className="rect-9" />
              <span>Pelatihan</span>
            </div>
            <div className="header-flex">
              <h2>Pelatihan K3 Samarinda</h2>
              <button className="btn-view-all">
                Lihat semua
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1061D6" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          <div className="course-grid-new">
            {courses.map(i => (
              <div className="course-card-new" key={i}>
                <div className="card-image-box">
                  <img src="/images/course_thumb.png" alt="Course" />
                  <div className="badge-hse">HSE PROGRAM</div>
                </div>
                <div className="card-info">
                  <h3>Membangun Budaya Kerja Aman dan Berkelanjutan</h3>
                  <div className="card-meta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D4D4D" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Terdaftar : 2 juni 2026</span>
                  </div>
                  <div className="card-pricing">
                    <p>Harga Mulai</p>
                    <span className="price">Rp 3.500.000</span>
                  </div>
                  <button className="btn-card-detail">Detail Pelatihan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBINAR SECTION */}
      <section className="program-section blue-variant">
        <div className="section-container">
          <div className="section-header">
            <div className="badge-group">
              <div className="rect-9" />
              <span>Webinar</span>
            </div>
            <div className="header-flex">
              <h2>Webinar K3 Samarinda</h2>
              <button className="btn-view-all">
                Lihat semua
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1061D6" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          <div className="course-grid-new">
            {courses.map(i => (
              <div className="course-card-new" key={i}>
                <div className="card-image-box">
                  <img src="/images/course_thumb.png" alt="Course" />
                  <div className="badge-hse">HSE PROGRAM</div>
                </div>
                <div className="card-info">
                  <h3>Membangun Budaya Kerja Aman dan Berkelanjutan</h3>
                  <div className="card-meta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D4D4D" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Terdaftar : 2 juni 2026</span>
                  </div>
                  <div className="card-pricing">
                    <p>Harga Mulai</p>
                    <span className="price">Rp 3.500.000</span>
                  </div>
                  <button className="btn-card-detail">Detail Pelatihan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-HOUSE IKLAN SECTION */}
      <section className="pelatihan-iklan">
        <div className="iklan-card">
          <div className="iklan-left">
            <img src="/images/LOGO TEPIANK3 2 (1).png" alt="Logo BG" className="iklan-logo-bg" />
            <h2>Butuh In-House Training Untuk Perusahaan?</h2>
            <p>Kami menyediakan paket pelatihan khusus sesuai dengan kebutuhan spesifik industri dan perusahaan Anda. Dapatkan penawaran harga kompetitif untuk grup besar.</p>
            <div className="iklan-buttons">
              <button className="btn-corporate">Hubungi Corporate Sales</button>
              <button className="btn-download">
                Download Brosur
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"></path></svg>
              </button>
            </div>
          </div>
          <div className="iklan-right">
             <div className="slanted-overlay one" />
             <div className="slanted-overlay two" />
             <img src="/images/inhouse_banner.png" alt="In-house" className="iklan-img" />
          </div>
        </div>
      </section>

      <HomeFAQ />
    </div>
  );
};

export default Pelatihan;
