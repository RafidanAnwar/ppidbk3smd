import { ArrowLeft } from 'lucide-react';

interface InformasiDikecualikanProps {
  onBack: () => void;
}

const InformasiDikecualikan = ({ onBack }: InformasiDikecualikanProps) => {
  const documents = [
    "Dokumen Data Pribadi Pegawai yang Dilindungi",
    "Dokumen Kepegawaian yang Mengandung Data Pribadi atau Informasi Sensitif",
    "Dokumen Hasil Pengujian yang Mengandung Rahasia atau Informasi Sensitif",
    "Dokumen Informasi Teknis Perusahaan yang Dilindungi",
    "Dokumen Data Keuangan yang Memuat Informasi Pribadi atau Sensitif",
    "Dokumen Sistem Internal dan Keamanan Digital"
  ];

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

        {/* Tag */}
        <div className="frame-31-tag animate-fade-in-up">
          <div className="rectangle-9-gradient" />
          <span className="informasi-publik-text">Informasi Publik</span>
        </div>

        {/* Title Section */}
        <div className="group-3-title-section animate-fade-in-up">
          <h1 className="informasi-serta-merta-title">Informasi Dikecualikan</h1>
          <div className="frame-32-underline" />
          
          <p className="informasi-serta-merta-subtitle">
            Informasi yang tidak dapat diakses oleh publik karena bersifat rahasia atau 
            dilindungi, sesuai dengan regulasi yang berlaku.
          </p>
        </div>

        {/* Main Table Card */}
        <div className="frame-7918-card animate-fade-in-up" style={{ height: 'auto', padding: '40px' }}>
          <div className="excluded-table-wrapper">
            <div className="excluded-table-header">
              <div className="col-no">NO</div>
              <div className="col-title">Judul Dokumen</div>
            </div>
            <div className="excluded-table-body">
              {documents.map((doc, index) => (
                <div key={index} className="excluded-row">
                  <div className="col-no">{index + 1}.</div>
                  <div className="col-title">{doc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformasiDikecualikan;
