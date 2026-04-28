import { useState, useEffect } from 'react';
import { Check, ThumbsUp, Folder, MessageSquare, Sliders, ChevronDown, BarChart3, Star, Hourglass, Ban, BookOpen, Send, ArrowRight } from 'lucide-react';

interface CounterProps {
  target: number;
  duration?: number;
}

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
};

interface ProfilPPIDProps {
  onPermohonanClick: () => void;
}

const ProfilPPID = ({ onPermohonanClick }: ProfilPPIDProps) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="profil-ppid-page">
      {/* Mesh Background */}
      <div className="profil-mesh-bg" />

      {/* TENTANG PPID SECTION */}
      <section className="profil-section tentang-ppid">
        <div className="profil-container">
          <div className="tentang-text-box animate-slide-left">
            <h1 className="profil-title-main">Tentang PPID</h1>
            <div className="title-gradient-line"></div>

            <p className="profil-desc-large">
              Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab dalam pengelolaan dan pelayanan informasi publik.
            </p>
            <p className="profil-desc-large">
              PPID berperan dalam mewujudkan keterbukaan informasi publik yang transparan, akuntabel, dan mudah diakses oleh masyarakat sesuai dengan ketentuan peraturan perundang-undangan.
            </p>
          </div>

          <div className="tentang-image-box animate-slide-right">
            <img src="/images/69.png" alt="PPID Illustration" />
          </div>
        </div>
      </section>

      {/* TUGAS & FUNGSI SECTION */}
      <section className="profil-section tugas-ppid">
        <div className="profil-container">
          <div className="tugas-header-box animate-fade-in-up">
            <h2 className="section-label-center">Tugas PPID</h2>
            <div className="underline-center-gradient"></div>
          </div>

          <div className="tugas-cards-new">
            {/* Hak Card */}
            <div className="tugas-card-new animate-fade-in-up">
              <div className="card-header-gradient">Hak</div>
              <ul className="tugas-list-new">
                <li>
                  <div className="icon-circle-bg">
                    <Check className="check-icon-new" size={24} />
                  </div>
                  <span>Berhak menolak memberikan informasi yang dikecualikan oleh instansi.</span>
                </li>
                <li>
                  <div className="icon-circle-bg">
                    <Check className="check-icon-new" size={24} />
                  </div>
                  <span>PPID berhak meminta pemohon untuk melengkapi identitas serta tujuan penggunaan informasi guna kepetingan administrasi.</span>
                </li>
              </ul>
            </div>

            {/* Kewajiban Card */}
            <div className="tugas-card-new animate-fade-in-up">
              <div className="card-header-gradient">Kewajiban</div>
              <ul className="tugas-list-new">
                <li>
                  <div className="icon-circle-bg">
                    <Check className="check-icon-new" size={24} />
                  </div>
                  <span>Menyediakan dan memberikan informasi publik yang akurat.</span>
                </li>
                <li>
                  <div className="icon-circle-bg">
                    <Check className="check-icon-new" size={24} />
                  </div>
                  <span>Menyediakan, menyimpan, mendokumentasikan, dan mengamankan informasi publik.</span>
                </li>
                <li>
                  <div className="icon-circle-bg">
                    <Check className="check-icon-new" size={24} />
                  </div>
                  <span>PPID wajib menyusun dan memperbarui Daftar Informasi Publik secara berkala.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FUNGSI PPID SECTION */}
      <section className="profil-section fungsi-ppid">
        <div className="profil-container">
          <div className="fungsi-header-box animate-fade-in-up">
            <h2 className="section-label-center">Fungsi PPID</h2>
            <div className="underline-center-gradient"></div>
          </div>

          <div className="fungsi-cards-grid">
            {/* Card 1 */}
            <div className="fungsi-card animate-fade-in-up">
              <div className="fungsi-icon-box">
                <div className="icon-circle-bg-blue">
                  <Folder className="fungsi-icon" size={28} />
                </div>
              </div>
              <p className="fungsi-card-text">Mengelola dan mendokumentasikan informasi publik.</p>
            </div>

            {/* Card 2 */}
            <div className="fungsi-card animate-fade-in-up">
              <div className="fungsi-icon-box">
                <div className="icon-circle-bg-blue">
                  <MessageSquare className="fungsi-icon" size={28} />
                </div>
              </div>
              <p className="fungsi-card-text">Menyediakan dan melayani permohonan informasi.</p>
            </div>

            {/* Card 3 */}
            <div className="fungsi-card animate-fade-in-up">
              <div className="fungsi-icon-box">
                <div className="icon-circle-bg-blue">
                  <Sliders className="fungsi-icon" size={28} />
                </div>
              </div>
              <p className="fungsi-card-text">Melakukan pengkalsifikasian informasi (terbuka dan dikecualikan).</p>
            </div>

            {/* Card 4 */}
            <div className="fungsi-card animate-fade-in-up">
              <div className="fungsi-icon-box">
                <div className="icon-circle-bg-blue">
                  <ThumbsUp className="fungsi-icon" size={28} />
                </div>
              </div>
              <p className="fungsi-card-text">Menjamin ketersediaan informasi yang akurat dan dapat diakses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK SECTION */}
      <section className="profil-section stat-section-new">
        <div className="profil-container">
          <div className="stat-header-box animate-fade-in-up">
            <h2 className="section-label-center">Statistik Layanan Informasi</h2>
            <div className="underline-center-gradient"></div>
          </div>

          <div className="stat-controls">
            <div className="filter-tahun">
              <span>Filter Tahun:</span>
              <div className="dropdown-year" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{selectedYear}</span>
                <ChevronDown size={16} />
                {isDropdownOpen && (
                  <div className="year-dropdown-menu">
                    {['2024', '2023', '2022'].map(year => (
                      <div 
                        key={year} 
                        className="year-item" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedYear(year);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {year}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="stat-cards-row">
            {/* Total Permintaan */}
            <div className="stat-card-detailed animate-fade-in-up">
              <div className="stat-card-icon-box blue">
                <BarChart3 size={24} />
              </div>
              <div className="stat-card-info">
                <h3>Total Permintaan</h3>
                <span className="stat-card-number"><Counter target={248} /></span>
                <span className="stat-card-unit">Permintaan</span>
              </div>
            </div>

            {/* Permohonan Dipenuhi */}
            <div className="stat-card-detailed animate-fade-in-up">
              <div className="stat-card-icon-box green">
                <Star size={24} />
              </div>
              <div className="stat-card-info">
                <h3>Permohonan Dipenuhi</h3>
                <span className="stat-card-number"><Counter target={214} /></span>
                <span className="stat-card-unit">Permintaan</span>
              </div>
            </div>

            {/* Permohonan Diproses */}
            <div className="stat-card-detailed animate-fade-in-up">
              <div className="stat-card-icon-box yellow">
                <Hourglass size={24} />
              </div>
              <div className="stat-card-info">
                <h3>Permohonan Diproses</h3>
                <span className="stat-card-number"><Counter target={24} /></span>
                <span className="stat-card-unit">Permintaan</span>
              </div>
            </div>

            {/* Permohonan Ditolak */}
            <div className="stat-card-detailed animate-fade-in-up">
              <div className="stat-card-icon-box red">
                <Ban size={24} />
              </div>
              <div className="stat-card-info">
                <h3>Permohonan Ditolak</h3>
                <span className="stat-card-number"><Counter target={10} /></span>
                <span className="stat-card-unit">Permintaan</span>
              </div>
            </div>
          </div>

          <div className="stat-charts-row">
            <div className="chart-card info-grafik animate-fade-in-up">
              <div className="chart-header">
                <h3>Jumlah Permintaan per-Bulan</h3>
              </div>
              <div className="chart-content">
                {/* Mock Line Chart */}
                <div className="mock-line-chart">
                  <div className="chart-y-axis">
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>
                  <div className="chart-area">
                    <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                      <path className="animate-draw" d="M0,180 L50,150 L100,140 L150,120 L200,130 L250,100 L300,70 L350,90 L400,100 L450,70 L500,40 L550,80 L600,100 L650,80 L700,90 L750,100 L800,100"
                        fill="none" stroke="#1061D6" strokeWidth="4" />
                      <path d="M0,180 L50,150 L100,140 L150,120 L200,130 L250,100 L300,70 L350,90 L400,100 L450,70 L500,40 L550,80 L600,100 L650,80 L700,90 L750,100 L800,100 V200 H0 Z"
                        fill="url(#chartGradient)" opacity="0.1" />
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1061D6" />
                          <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="chart-x-axis">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
                    <span>Jul</span><span>Agt</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Des</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-card stat-permintaan animate-fade-in-up">
              <div className="chart-header">
                <h3>Statistik Permintaan</h3>
              </div>
              <div className="chart-content donut-box">
                {/* Mock Donut Chart */}
                <div className="mock-donut-chart">
                  <svg width="180" height="180" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#39CB70" strokeWidth="15" strokeDasharray="210 251.2" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F6B939" strokeWidth="15" strokeDasharray="30 251.2" strokeDashoffset="-210" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F43F5E" strokeWidth="15" strokeDasharray="11.2 251.2" strokeDashoffset="-240" />
                  </svg>
                  <div className="donut-center"></div>
                </div>
                <div className="donut-legend">
                  <div className="legend-item"><span className="dot green"></span> Permohonan Dipenuhi</div>
                  <div className="legend-item"><span className="dot yellow"></span> Permohonan Diproses</div>
                  <div className="legend-item"><span className="dot red"></span> Permohonan Ditolak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profil-section more-info-section animate-fade-in-up">
        <div className="profil-container">
          <div className="cs-circle-container">
            <div className="cs-image-box">
              <img src="/images/rectangle_cs.png" alt="Customer Service" />
            </div>
          </div>

          <div className="info-content-box">
            <h2 className="info-title">Butuh Informasi Lebih Lanjut?</h2>
            <p className="info-subtitle">Akses informasi publik yang tersedia atau ajukan permohonan informasi sesuai kebutuhan Anda.</p>

            <div className="info-buttons-row">
              {/* Button 1 */}
              <div className="info-action-card blue-bg">
                <div className="action-card-content">
                  <div className="action-icon-box">
                    <BookOpen size={40} color="#1061D6" />
                  </div>
                  <span className="action-text">Akses Informasi Publik</span>
                  <ArrowRight size={35} color="#1061D6" strokeWidth={3} />
                </div>
              </div>

              {/* Button 2 */}
              <div className="info-action-card green-bg" onClick={onPermohonanClick}>
                <div className="action-card-content">
                  <div className="action-icon-box">
                    <Send size={40} color="#059669" />
                  </div>
                  <span className="action-text gradient-green">Permohonan Informasi</span>
                  <ArrowRight size={35} color="#059669" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilPPID;
