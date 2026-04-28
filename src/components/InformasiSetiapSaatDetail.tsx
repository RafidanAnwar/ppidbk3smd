import { useState } from 'react';
import { ArrowLeft, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface Document {
  no: number;
  judul: string;
}

const allDocuments: Record<number, Document[]> = {
  1: [
    { no: 1, judul: "Undang-Undang Nomor 1 Tahun 1970 tentang Keselamatan Kerja" },
    { no: 2, judul: "Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan" },
    { no: 3, judul: "Peraturan Pemerintah Nomor 50 Tahun 2012 tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3)" },
    { no: 4, judul: "Peraturan Menteri Ketenagakerjaan Nomor 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja" },
    { no: 5, judul: "Peraturan Menteri Tenaga Kerja Nomor 38 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi" }
  ],
  2: [
    { no: 1, judul: "Peraturan Menteri Tenaga Kerja Nomor PER.08/MEN/VII/2010 tentang Alat Pelindung Diri" },
    { no: 2, judul: "Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik" },
    { no: 3, judul: "Peraturan Komisi Informasi Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik" }
  ]
};

interface InformasiSetiapSaatDetailProps {
  onBack: () => void;
  categoryTitle?: string;
  mainTitle?: string;
}

const InformasiSetiapSaatDetail = ({ 
  onBack, 
  categoryTitle = "Daftar Regulasi K3 dan Layanan Publik",
  mainTitle = "Daftar Informasi Setiap Saat"
}: InformasiSetiapSaatDetailProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const currentDocs = allDocuments[currentPage] || [];

  return (
    <div className="setiap-saat-page">
      <div className="profil-mesh-bg" />
      
      <div className="detail-page-container">
        <div className="detail-card-main animate-fade-in-up">
          {/* Header Actions */}
          <div className="detail-header-actions">
            <button className="btn-kembali-blue" onClick={onBack}>
              <ArrowLeft size={20} />
              <span>Kembali</span>
            </button>

            <div className="search-box-wrapper">
              <Search className="search-icon-detail" size={20} />
              <input 
                type="text" 
                placeholder="Cari Dokumen" 
                className="search-input-detail"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="detail-title-section">
            <h2>{mainTitle} - {categoryTitle}</h2>
            <p>Daftar Informasi</p>
          </div>

          {/* Table */}
          <div className="table-container-new">
            <table className="doc-table-new">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Judul Dokumen Regulasi</th>
                  <th>Tampilkan</th>
                </tr>
              </thead>
              <tbody>
                {currentDocs.map((doc) => (
                  <tr key={`${currentPage}-${doc.no}`}>
                    <td>{doc.no}.</td>
                    <td>{doc.judul}</td>
                    <td>
                      <button 
                        className="btn-lihat-doc"
                        onClick={() => setSelectedDoc(doc.judul)}
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination-container-new">
            <button 
              className="btn-page-nav" 
              onClick={() => setCurrentPage(1)} 
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={`btn-page-nav ${currentPage === 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={`btn-page-nav ${currentPage === 2 ? 'active' : ''}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className="btn-page-nav" 
              onClick={() => setCurrentPage(2)} 
              disabled={currentPage === 2}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      {selectedDoc && (
        <div className="doc-viewer-overlay animate-fade-in" onClick={() => setSelectedDoc(null)}>
          <div className="doc-viewer-grid-bg" />
          <div className="doc-viewer-gradient-overlay" />
          
          <div className="doc-viewer-modal animate-zoom-in" onClick={e => e.stopPropagation()}>
            <div className="doc-viewer-header">
              <div className="flex items-center gap-6">
                <img src="/images/LOGO TEPIANK3 2.png" alt="Logo" className="doc-viewer-logo" />
                <h3>{selectedDoc}</h3>
              </div>
              <button className="btn-close-viewer" onClick={() => setSelectedDoc(null)}>
                <ArrowLeft size={20} />
                <span>Tutup Dokumen</span>
              </button>
            </div>
            <div className="doc-viewer-content">
              {/* Document Mockup Image */}
              <div className="document-mockup-wrapper">
                <img src="/images/29.png" alt="Document Content" className="document-mockup-img" />
                <div className="pdf-footer-note">Halaman 1 dari 1</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformasiSetiapSaatDetail;
