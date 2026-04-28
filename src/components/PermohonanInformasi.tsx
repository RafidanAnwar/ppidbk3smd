import { useState, useRef, type ChangeEvent } from 'react';
import { ArrowLeft, Upload, Info, ChevronRight, Check, Trash2, FileText } from 'lucide-react';

interface PermohonanInformasiProps {
  onBack: () => void;
}

const PermohonanInformasi = ({ onBack }: PermohonanInformasiProps) => {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    email: '',
    alamat: '',
    jenisInformasi: '',
    rincianInformasi: '',
    tujuanInformasi: '',
    caraMendapatkan: '',
    setuju: false
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKirim = () => {
    if (!formData.setuju) {
      alert('Silakan setujui pernyataan terlebih dahulu.');
      return;
    }
    setShowSuccessPopup(true);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="permohonan-page">
      <div className="profil-mesh-bg" />

      <div className="permohonan-container">
        <div className="permohonan-card animate-fade-in-up">
          {/* Header with Back Button */}
          <div className="permohonan-header">
            <button className="btn-kembali" onClick={onBack}>
              <ArrowLeft size={20} />
              <span>Kembali</span>
            </button>
          </div>

          <div className="permohonan-content">
            {/* Section 1: Data Pemohon */}
            <div className="form-section">
              <div className="section-title-box">
                <div className="icon-bg-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="title-text">
                  <h3>Data Pemohon Informasi</h3>
                  <p>Silakan isi formulir berikut untuk mengajukan permohonan informasi. Pastikan data yang diisi sudah benar dan lengkap.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Nama Pemohon *</label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan nama lengkap sesuai identitas"
                    value={formData.nama}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nomor Telepon/Whatsapp *</label>
                  <input
                    type="text"
                    name="telepon"
                    placeholder="0812xxxxxxx"
                    value={formData.telepon}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="contoh@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Alamat *</label>
                  <input
                    type="text"
                    name="alamat"
                    placeholder="Masukkan alamat lengkap"
                    value={formData.alamat}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Informasi yang Dimohonkan */}
            <div className="form-section mt-40">
              <div className="section-title-box">
                <div className="icon-bg-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 13H8" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 17H8" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 9H9H8" stroke="#1061D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="title-text">
                  <h3>Informasi yang Dimohonkan</h3>
                  <p>Silakan jelaskan informasi yang dibutuhkan secara rinci agar permohonan dapat diproses dengan tepat.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Jenis Informasi yang Dibutuhkan *</label>
                  <input
                    type="text"
                    name="jenisInformasi"
                    placeholder="Data/Dokumen, Laporan, informasi Kegiatan, dll"
                    value={formData.jenisInformasi}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Rincian Informasi yang Dibutuhkan *</label>
                  <input
                    type="text"
                    name="rincianInformasi"
                    placeholder="Laporan kegiatan tahun 2023, data pengujian K3, dll"
                    value={formData.rincianInformasi}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Tujuan Penggunaan Informasi *</label>
                  <input
                    type="text"
                    name="tujuanInformasi"
                    placeholder="penelitian, kebutuhan perusahaan, dll"
                    value={formData.tujuanInformasi}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Cara Mendapatkan Informasi *</label>
                  <div className="select-wrapper">
                    <select
                      name="caraMendapatkan"
                      value={formData.caraMendapatkan}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>Pilih salah satu cara mendapatkan informasi</option>
                      <option value="dikirim melalui Email">dikirim melalui Email</option>
                      <option value="Melihat langsung">Melihat langsung</option>
                    </select>
                    <ChevronRight className="select-icon" size={20} />
                  </div>
                </div>
              </div>

              <div className="form-group full-width mt-20">
                <label>Upload Dokumen <span className="label-note">(Unggah dokumen pendukung seperti surat permohonan atau identitas apabila diperlukan.)</span></label>
                <div className="upload-area" onClick={triggerFileInput}>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    accept=".pdf,.doc,.docx"
                  />
                  <Upload size={32} color="#1061D6" />
                  <p>Drag & drop atau <span className="browse-text">pilih file</span></p>
                  <span className="upload-limit">PDF atau DOC hingga 5MB</span>
                </div>

                {uploadedFile && (
                  <div className="file-preview-card">
                    <div className="file-icon-box">
                      <div className="red-icon-bg">
                        <FileText size={20} color="#EF4444" />
                        <span className="file-type-badge">PDF</span>
                      </div>
                    </div>
                    <div className="file-info-details">
                      <span className="file-name">{uploadedFile.name}</span>
                      <span className="file-size">PDF . {(uploadedFile.size / (1024 * 1024)).toFixed(1)}MB</span>
                    </div>
                    <button className="btn-remove-file" onClick={removeFile}>
                      <Trash2 size={20} color="#64748B" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Form */}
            <div className="form-footer">
              <div className="checkbox-group">
                <div className={`custom-checkbox ${formData.setuju ? 'checked' : ''}`} onClick={() => setFormData(prev => ({ ...prev, setuju: !prev.setuju }))}>
                  {formData.setuju && <Check size={14} color="white" />}
                </div>
                <label onClick={() => setFormData(prev => ({ ...prev, setuju: !prev.setuju }))}>
                  Saya menyatakan bahwa data yang diisi adalah benar dan dapat dipertanggungjawabkan. *
                </label>
              </div>

              <div className="footer-actions">
                <div className="required-note">
                  <Info size={16} />
                  <span>Field dengan tanda * wajib diisi</span>
                </div>
                <div className="btn-group">
                  <button className="btn-batal" onClick={onBack}>Batal</button>
                  <button className="btn-kirim" onClick={handleKirim}>Kirim Permohonan</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SUCCESS MODAL POPUP */}
      {showSuccessPopup && (
        <div className="success-modal-overlay">
          <div className="notifikasi-pop-up">
            <div className="rectangle-3464235"></div>
            <div className="pop-up-success">
              <div className="group-1000002879">
                <div className="ellipse-236"></div>
                <div className="ellipse-235"></div>
                <div className="circle-main">
                  <svg width="49" height="33" viewBox="0 0 49 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16.5L18.5 31L45 4.5" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Decorative Dots */}
                <div className="ellipse-237 decorative-dot"></div>
                <div className="ellipse-238 decorative-dot"></div>
                <div className="ellipse-239 decorative-dot"></div>
                <div className="ellipse-240 decorative-dot"></div>
                <div className="ellipse-241 decorative-dot"></div>
                <div className="ellipse-242 decorative-dot"></div>
                <div className="ellipse-243 decorative-dot"></div>
              </div>

              <div className="frame-1000007916">
                <h2 className="permohonan-berhasil-title">Permohonan Berhasil Dikirim!</h2>
                <p className="permohonan-berhasil-subtitle">
                  Konfirmasi dan detail permohonan akan dikirimkan melalui email yang telah didaftarkan.
                </p>
                <button className="btn-tutup-modal" onClick={() => {
                  setShowSuccessPopup(false);
                  onBack();
                }}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermohonanInformasi;
