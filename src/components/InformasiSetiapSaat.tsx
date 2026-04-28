import { ArrowUpRight } from 'lucide-react';

interface InformasiSetiapSaatProps {
  onBack?: () => void;
}

const items = [
  "Alur Pelayanan Pengujian K3",
  "Alur Pelayanan Pelatihan",
  "Prosedur permohonan Informasi",
  "Layanan Tarif Pengujian (PNBP)",
  "Regulasi K3 & Layanan Publik",
  "Data Statistik Layanan Publik"
];

const InformasiSetiapSaat = ({ onBack, onItemClick }: InformasiSetiapSaatProps) => {
  return (
    <div className="setiap-saat-page">
      <div className="profil-mesh-bg" />
      
      <div className="setiap-saat-container">
        {/* Header Breadcrumb-ish */}
        <div className="setiap-saat-header-top animate-fade-in-up">
           <div className="blue-square"></div>
           <span>Informasi Publik</span>
        </div>

        <h1 className="setiap-saat-title animate-fade-in-up">Informasi Setiap Saat</h1>
        <div className="title-gradient-bar animate-fade-in-up"></div>

        <p className="setiap-saat-desc animate-fade-in-up">
          Informasi yang wajib tersedia setiap saat dan dapat diakses oleh masyarakat 
          melalui permohonan informasi sesuai dengan ketentuan yang berlaku.
        </p>

        <div className="setiap-saat-list">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="setiap-saat-item animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onItemClick?.(item)}
            >
              <span className="item-text">{item}</span>
              <button className="item-btn">
                <ArrowUpRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformasiSetiapSaat;
