import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';

interface MediaPublikasiListProps {
  onBack: () => void;
  onItemClick?: () => void;
}

const MediaPublikasiList = ({ onBack, onItemClick }: MediaPublikasiListProps) => {
  const articles = Array(12).fill({
    img: '/images/unsplash_8a44UJ4qLrw.png',
    title: 'Lorem ipsum dolor sit amet.',
    excerpt: 'Layanan pengujian peralatan K3 dengan standar nasional. Layanan pengujian peralatan K3 dengan standar nasional.',
  });

  return (
    <div className="media-detail-page">
      <div className="profil-mesh-bg" />
      <div className="media-gradient-overlay-1" />
      <div className="media-gradient-overlay-2" />

      {/* Back Navigation */}
      <div className="media-list-nav">
        <button className="btn-back-media" onClick={onBack}>
          <ArrowLeft size={20} />
          Kembali
        </button>
      </div>

      {/* Hero Section */}
      <div className="media-detail-hero">
        <img src="/images/53 1.png" alt="Hero" className="media-hero-img" />
        <div className="media-hero-overlay">
          <div className="media-hero-content">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="btn-hero-more" onClick={onItemClick}>
              Selengkapnya
              <div className="btn-icon-circle">
                <ChevronRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="media-detail-container">
        <h2 className="section-title-media">Media dan Publikasi Terbaru</h2>
        
        <div className="media-grid">
          {articles.map((article, index) => (
            <div key={index} className="media-article-card" onClick={onItemClick} style={{ cursor: 'pointer' }}>
              <div className="media-card-img-wrapper">
                <img src={article.img} alt={article.title} />
              </div>
              <div className="media-card-info">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <button className="read-more-link" onClick={(e) => {
                  e.stopPropagation();
                  onItemClick?.();
                }}>
                  Selengkapnya <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPublikasiList;
