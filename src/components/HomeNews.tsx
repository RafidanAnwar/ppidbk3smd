
const HomeNews = () => {
  return (
    <section className="home-news-new" id="informasi">
      <div className="news-header-new">
        <div className="news-badge-new">
          <div className="badge-dot" />
          <span>Insights & updates</span>
        </div>
        <h2>Informasi Keselamatan & Kesehatan Kerja</h2>
        <div className="news-title-line" />
      </div>

      <div className="featured-news-card">
        <img src="/images/news_featured.png" alt="Featured News" className="featured-bg-img" />
        <div className="featured-overlay-news" />
        <div className="featured-news-content">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur, 
            leo in cursus ultrices, erat risus finibus nunc, a scelerisque turpis eros 
            vitae ante. Suspendisse potenti.
          </p>
          <a href="#" className="featured-news-link">
            Selengkapnya <span className="arrow-btn">→</span>
          </a>
        </div>
      </div>

      <div className="news-grid-row">
        {[1, 2, 3].map((i) => (
          <div className="news-card-vertical" key={i}>
            <div className="card-img-wrapper">
              <img src={`/images/news_${i}.png`} alt={`News ${i}`} />
            </div>
            <div className="card-content-vertical">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Layanan pengujian peralatan K3 dengan standar nasional dan internasional 
                untuk memastikan keamanan maksimal.
              </p>
              <a href="#" className="card-read-more-link">
                Baca selengkapnya <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="news-view-all">
        <button className="btn-view-all">
          Lihat semua <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default HomeNews;
