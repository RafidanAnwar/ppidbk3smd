import { ArrowLeft, Heart, Link2, Clock, User } from 'lucide-react';

interface MediaPublikasiDetailProps {
  onBack: () => void;
}

const MediaPublikasiDetail = ({ onBack }: MediaPublikasiDetailProps) => {
  return (
    <div className="article-detail-page">
      <div className="profil-mesh-bg" />
      
      <div className="article-detail-container">
        {/* Navigation Bar */}
        <div className="article-nav-header">
          <button className="btn-back-blue" onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </button>
          
          <div className="article-actions">
            <button className="btn-action-outline">
              <Heart size={20} />
            </button>
            <button className="btn-action-outline">
              <Link2 size={20} />
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className="article-content-card">
          <h1 className="article-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>

          <div className="article-meta">
            <div className="meta-item">
              <div className="meta-icon-circle">
                <User size={14} />
              </div>
              <span>Balai K3 Samarinda</span>
            </div>
            <div className="meta-item">
              <Clock size={16} className="meta-icon-gray" />
              <span>Rabu, 01 April 2026</span>
            </div>
          </div>

          <div className="article-image-wrapper">
            <img 
              src="/images/unsplash_VcQAxVKQZ5g.png" 
              alt="Article content" 
              className="article-featured-img"
            />
            <div className="article-img-gradient" />
          </div>

          <div className="article-body">
            <p>
              Balai Keselamatan dan Kesehatan Kerja (K3) Samarinda menyelenggarakan kegiatan pelatihan 
              keselamatan dan kesehatan kerja (K3) yang diikuti oleh tenaga kerja dari berbagai sektor industri di 
              wilayah Kalimantan. Kegiatan ini merupakan bagian dari upaya peningkatan kompetensi dan 
              kesadaran tenaga kerja terhadap pentingnya penerapan standar keselamatan kerja di lingkungan 
              kerja.
            </p>
            <p>
              Pelatihan ini mencakup materi terkait identifikasi potensi bahaya, penerapan prosedur keselamatan 
              kerja, serta penggunaan alat pelindung diri (APD) yang sesuai dengan standar. Selain itu, peserta 
              juga diberikan pemahaman mengenai langkah-langkah pencegahan kecelakaan kerja serta 
              penanganan kondisi darurat di tempat kerja.
            </p>
            <p>
              Dalam pelaksanaannya, kegiatan ini menghadirkan instruktur yang berpengalaman di bidang 
              keselamatan dan kesehatan kerja. Peserta diberikan kesempatan untuk mengikuti sesi praktik guna 
              memperkuat pemahaman terhadap materi yang telah disampaikan.
            </p>
            <p>
              Melalui kegiatan ini, Balai K3 Samarinda berharap para peserta dapat menerapkan prinsip-prinsip 
              keselamatan kerja secara konsisten di lingkungan kerja masing-masing, sehingga dapat 
              menciptakan lingkungan kerja yang aman, sehat, dan produktif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPublikasiDetail;
