import { ArrowUpRight, ArrowLeft } from 'lucide-react';

interface InformasiSetiapSaatProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
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
           <button className="btn-back-minimal" onClick={onBack} style={{ background: 'none', border: 'none', padding: 0, marginRight: '10px', cursor: 'pointer', color: '#1061D6' }}>
             <ArrowLeft size={20} />
           </button>
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
              style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
              onClick={() => onItemClick(item)}
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
