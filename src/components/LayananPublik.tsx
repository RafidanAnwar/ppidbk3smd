const services = [
  {
    icon: '/images/Desain tanpa judul (29) 1.png',
    prefix: 'Layanan',
    title: 'Pengujian K3',
  },
  {
    icon: '/images/Desain tanpa judul (22) 1.png',
    prefix: 'Layanan',
    title: 'Uji\nKompetensi',
  },
  {
    icon: '/images/Desain tanpa judul (25) 1.png',
    prefix: 'Layanan',
    title: 'Pelatihan K3',
  },
  {
    icon: '/images/Desain tanpa judul (27) 1.png',
    prefix: 'Layanan',
    title: 'Permohonan\nInformasi',
  },
];

const LayananPublik = ({ onPelatihanClick, onPermohonanClick }) => {
  return (
    <section className="layanan-section" id="layanan">
      <div className="layanan-inner">
        <div className="layanan-text">
          <h2>Layanan Publik K3</h2>
          <div className="gradient-bar" />
          <p>
            Balai Keselamatan dan Kesehatan Kerja (K3)
            Samarinda menyediakan berbagai layanan di bidang
            keselamatan dan kesehatan kerja yang dapat diakses
            oleh masyarakat, perusahaan, dan tenaga kerja.
          </p>
          <div className="layanan-icons">
            {services.map((svc, i) => (
              <div 
                className="layanan-icon-card" 
                key={i}
                onClick={() => {
                  if (svc.title === 'Pelatihan K3' && onPelatihanClick) onPelatihanClick();
                  if (svc.title.includes('Permohonan') && onPermohonanClick) onPermohonanClick();
                }}
                style={{ cursor: (svc.title === 'Pelatihan K3' || svc.title.includes('Permohonan')) ? 'pointer' : 'default' }}
              >
                <div className="layanan-icon-bg">
                  <img src={svc.icon} alt={svc.title} />
                </div>
                <div className="layanan-icon-text">
                  <span className="layanan-prefix">{svc.prefix}</span>
                  <span className="layanan-title">{svc.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="layanan-image">
          <div className="layanan-shape-bg" />
          <img
            src="/images/image 59.png"
            alt="Petugas K3 Samarinda"
            className="layanan-worker"
          />
          <img src="/images/Rectangle.png" alt="Gear Ornament" className="gear-top-left" />
          <img src="/images/Rectangle.png" alt="Gear Ornament" className="gear-bottom-right" />
        </div>
      </div>
    </section>
  );
};

export default LayananPublik;
