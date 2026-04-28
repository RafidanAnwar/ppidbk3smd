import { ArrowUpRight, ArrowLeft } from 'lucide-react';

interface InformasiBerkalaProps {
  onBack: () => void;
  onItemClick?: (item: string) => void;
}

const InformasiBerkala = ({ onBack, onItemClick }: InformasiBerkalaProps) => {
  const items = [
    "Profil, Tugas dan Fungsi Balai K3 Samarinda",
    "Struktur organisasi Balai K3 Samarinda",
    "Maklumat Pelayanan",
    "Jadwal Pelatihan K3",
    "Laporan Pelayanan Informasi Publik"
  ];

  return (
    <div className="setiap-saat-page">
      {/* Background patterns */}
      <div className="profil-mesh-bg" />
      
      <div className="setiap-saat-container">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center animate-fade-in-up">
          <div className="w-full flex justify-start mb-8">
            <button className="btn-kembali-blue" onClick={onBack}>
              <ArrowLeft size={20} />
              <span>Kembali</span>
            </button>
          </div>

          <div className="setiap-saat-header-top">
            <div className="blue-square" />
            <span>Informasi Publik</span>
          </div>
          
          <h1 className="setiap-saat-title">Informasi Berkala</h1>
          <div className="title-gradient-bar" />
          
          <p className="setiap-saat-desc">
            Informasi yang wajib diumumkan secara rutin dan berkala oleh Balai K3 Samarinda sebagai 
            bentuk transparansi kinerja dan kegiatan kepada masyarakat.
          </p>
        </div>

        {/* Items Grid */}
        <div className="setiap-saat-list mt-12 mx-auto">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="setiap-saat-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onItemClick?.(item)}
            >
              <span className="item-text">{item}</span>
              <div className="item-btn">
                <ArrowUpRight className="card-arrow-icon" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformasiBerkala;
