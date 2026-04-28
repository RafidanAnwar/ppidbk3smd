const articles = [
  {
    img: '/images/unsplash_8a44UJ4qLrw.png',
    title: 'Lorem ipsum dolor sit amet.',
    excerpt: 'Layanan pengujian peralatan K3 dengan standar nasional. Layanan pengujian peralatan K3 dengan standar nasional dan internasional untuk memastikan keamanan maksimal.',
  },
  {
    img: '/images/unsplash_VcQAxVKQZ5g.png',
    title: 'Lorem ipsum dolor sit amet.',
    excerpt: 'Layanan pengujian peralatan K3 dengan standar nasional. Layanan pengujian peralatan K3 dengan standar nasional dan internasional untuk memastikan keamanan maksimal.',
  },
  {
    img: '/images/unsplash_nhdKCmLI0Bs.png',
    title: 'Lorem ipsum dolor sit amet.',
    excerpt: 'Layanan pengujian peralatan K3 dengan standar nasional. Layanan pengujian peralatan K3 dengan standar nasional dan internasional untuk memastikan keamanan maksimal.',
  },
];

interface MediaPublikasiProps {
  onSeeAllClick?: () => void;
}

const MediaPublikasi = ({ onSeeAllClick }: MediaPublikasiProps) => {
  return (
    <section className="media-section" id="media">
      <div className="media-header">
        <h2>Media dan Publikasi</h2>
        <div className="media-gradient-bar" />
        <p>
          Berbagai berita, informasi kegiatan, dan dokumentasi Balai K3 Samarinda
          disajikan secara terbuka dan mudah diakses oleh masyarakat.
        </p>
      </div>

      <div className="media-layout">
        <div className="media-left">
          <div className="media-slide-card">
             {/* Replace with actual image from your assets or use the background grid */}
             <img src="/images/53 1.png" alt="Media K3 Samarinda" className="media-main-img" />
          </div>
        </div>
        <div className="media-right">
          <div className="media-list">
            {articles.map((article, i) => (
              <div className="media-card" key={i}>
                <div className="media-card-img">
                  <img src={article.img} alt={article.title} />
                </div>
                <div className="media-card-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="media-card-cta">
                    <a href="#">Baca selengkapnya</a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="media-actions">
        <button className="btn-lihat-semua" onClick={onSeeAllClick}>
          Lihat semua
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default MediaPublikasi;
