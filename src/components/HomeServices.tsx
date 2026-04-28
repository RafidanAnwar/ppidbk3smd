import React from 'react';

const homeServices = [
  {
    title: 'Pengujian',
    icon: '/images/service_1.png',
    accentColor: '#7E64FC',
    textColor: '#7E64FC',
  },
  {
    title: 'Pelatihan',
    icon: '/images/service_2.png',
    accentColor: '#FCAA06',
    textColor: '#EFA106',
  },
  {
    title: 'Uji kompetensi',
    icon: '/images/service_3.png',
    accentColor: '#5399FC',
    textColor: '#5399FC',
  },
  {
    title: 'Konsultasi',
    icon: '/images/service_4.png',
    accentColor: '#55CB83',
    textColor: '#44A86B',
  },
];

const HomeServices = ({ onPelatihanClick }) => {
  return (
    <section className="home-services-section" id="layanan">
      <div className="services-header-container">
        <div className="services-badge-wrapper">
          <div className="badge-gradient-dot" />
          <span className="services-badge-text">layanan pusat K3</span>
        </div>
        <h2 className="services-main-title">Pusat layanan kami</h2>
        <div className="services-title-line" />
      </div>

      <div className="services-cards-container">
        {homeServices.map((svc, i) => (
          <div 
            className="service-card-new" 
            key={i}
            onClick={() => svc.title === 'Pelatihan' && onPelatihanClick()}
            style={{ cursor: svc.title === 'Pelatihan' ? 'pointer' : 'default' }}
          >
            <div className="card-top-bg" style={{ backgroundColor: svc.accentColor }} />
            <div className="card-icon-img">
              <img src={svc.icon} alt={svc.title} />
            </div>
            <h3 className="card-title-text" style={{ color: svc.textColor }}>{svc.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
