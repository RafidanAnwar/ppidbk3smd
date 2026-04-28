import { ArrowLeft } from 'lucide-react';

interface InformasiSertaMertaProps {
  onBack: () => void;
}

const InformasiSertaMerta = ({ onBack }: InformasiSertaMertaProps) => {
  return (
    <div className="serta-merta-page">
      <div className="profil-mesh-bg" />
      
      <div className="serta-merta-container">
        {/* Back Button */}
        <div className="serta-merta-back-wrapper">
          <button className="btn-kembali-blue" onClick={onBack}>
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>

        {/* Frame 31: Tag */}
        <div className="frame-31-tag animate-fade-in-up">
          <div className="rectangle-9-gradient" />
          <span className="informasi-publik-text">Informasi Publik</span>
        </div>

        {/* Group 3: Title Section */}
        <div className="group-3-title-section animate-fade-in-up">
          <h1 className="informasi-serta-merta-title">Informasi Serta Merta</h1>
          <div className="frame-32-underline" />
          
          <p className="informasi-serta-merta-subtitle">
            Informasi yang wajib disampaikan secara segera apabila dapat memengaruhi 
            hajat hidup orang banyak dan ketertiban umum.
          </p>
        </div>

        {/* Frame 1000007918: Main Card Container */}
        <div className="frame-7918-card animate-fade-in-up">
          {/* Group 48: Empty State */}
          <div className="group-48-empty">
            <div className="no-documents-visual">
              {/* Simplified SVG to match the "NoDocuments" complex structure in snippet */}
              <div className="tile-background">
                <div className="rectangle-1-bg"></div>
                <div className="inner-blue-bg"></div>
                <div className="shape-outline-blue"></div>
                <div className="path-outline-details"></div>
                <div className="rectangle-shape-fill"></div>
                <div className="white-card-with-blue-border"></div>
                <div className="card-lines"></div>
              </div>
            </div>
            
            <h2 className="empty-state-heading">Belum Tersedia</h2>
            <p className="empty-state-subtext">
              Saat ini belum terdapat informasi serta merta yang perlu diumumkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformasiSertaMerta;
