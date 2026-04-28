import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, Calendar, Info, FileText, HelpCircle, Sparkles } from 'lucide-react';

const IMG = 'https://drive.google.com/thumbnail?id=133CvIRz9rnJisqondIB-W8Mye7rnnmAa&sz=w1000';

const KNOWLEDGE_BASE = [
  {k:["jadwal","pelatihan","training","kapan","safety talk","k3 dasar","seminar","goes to campus"],r:"Berdasarkan Rencana Kegiatan 2026, berikut adalah jadwal pelatihan Balai K3 Samarinda:\n\n1. 🎓 K3 Dasar: 20 Mei, 9 Juni, 23 Juni, & 7 Okt 2026\n2. 💻 Safety Talk (Daring): Digelar rutin setiap bulan (Februari - September 2026)\n3. 🏫 Goes to Campus: Mulai 16 April hingga 9 September 2026\n\nAda jadwal pelatihan spesifik yang ingin Anda ikuti?"},
  {k:["profil","wilayah kerja","akreditasi","tentang","tepian","aplikasi","sertifikat","iso"],r:"Balai K3 Samarinda merupakan Unit Pelaksana Teknis Pusat (UPTP) Kemnaker RI.\n\n🌍 Wilayah Kerja: Seluruh Kalimantan, Provinsi Bali, dan Jawa Timur.\n🏆 Akreditasi: KAN (SNI ISO/IEC 17025:2017), ISO 9001:2015, & Lab Lingkungan KLHK.\n📱 Inovasi: Kami memiliki ekosistem layanan digital bernama 'TEPIAN K3' untuk kemudahan pendaftaran uji dan pelatihan."},
  {k:["layanan","daftar layanan","apa saja layanan","pengujian","uji kompetensi"],r:"Balai K3 Samarinda menyediakan berbagai layanan unggulan, antara lain:\n1. 🧪 Pengujian Lingkungan Kerja (Faktor Fisik, Kimia, Biologi, Emisi)\n2. 🩺 Pemeriksaan Kesehatan Tenaga Kerja & Ergonomi\n3. 🎓 Pelatihan & Sertifikasi K3 (Hiperkes, P3K, Ahli K3)\n4. 🏅 Uji Kompetensi K3\n\nLayanan mana yang ingin Anda ketahui lebih detail?"},
  {k:["jam","operasional","buka","tutup"],r:"Jam operasional Balai K3 Samarinda adalah:\n📅 Senin - Kamis: 08.00 - 16.00 WITA\n📅 Jumat: 08.00 - 16.30 WITA\n📅 Sabtu, Minggu & Hari Libur Nasional: Tutup"},
  {k:["biaya","harga","tarif","bayar","pnbp"],r:"Biaya layanan pengujian dan pemeriksaan di Balai K3 Samarinda mengacu pada tarif resmi PNBP (Penerimaan Negara Bukan Pajak) sesuai peraturan perundang-undangan Kementerian Ketenagakerjaan yang berlaku. Pembayaran dilakukan melalui e-billing SIMPONI."},
  {k:["syarat","persyaratan","berkas","dokumen","permohonan"],r:"Secara umum, persyaratan untuk mengajukan layanan kami adalah:\n- Surat Permohonan resmi dari Perusahaan\n- Profil singkat / Data Perusahaan (NIB/NPWP)\n- Rincian objek yang akan diuji/diperiksa\n\nPengajuan layanan kini lebih mudah melalui ekosistem digital 'TEPIAN K3'."},
  {k:["lokasi","alamat","dimana"],r:"Balai K3 Samarinda berlokasi di Jl. Sentosa No. 09, Samarinda, Provinsi Kalimantan Timur. Fasilitas kami dilengkapi dengan Gedung Lab 3-4 Lantai dan Safety Emergency Response Training Ground."},
  {k:["halo","hai","pagi","siang","sore","malam","asty"],r:"Halo! Safety First! 👷 Ada yang bisa Asty bantu terkait layanan Balai K3 Samarinda, jadwal pelatihan 2026, atau info seputar keselamatan kerja?"},
  {k:["terima kasih","makasih","thanks","ok","oke"],r:"Sama-sama! 😊 Ingat selalu untuk mengutamakan Keselamatan dan Kesehatan Kerja. Jika butuh info lain, sapa saya lagi ya!"},
  {k:["bantuan","help","panduan"],r:"Anda bisa bertanya tentang layanan Balai K3, misalnya:\n- 'Kapan jadwal pelatihan K3 Dasar?'\n- 'Apa itu aplikasi Tepian K3?'\n- 'Apa saja layanan pengujiannya?'\n- 'Di mana wilayah kerja Balai K3?'"}
];

interface Message {
  text: string;
  who: 'b' | 'u';
  time: string;
}

const ChatbotAsty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const msgsEndRef = useRef<HTMLDivElement>(null);

  // Animation for the floating trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        text: "Halo! 👋 Saya Asty (Asisten Safety), asisten virtual Balai K3 Samarinda.\n\nSaya siap membantu Anda mendapatkan informasi layanan pengujian, jadwal pelatihan K3 2026, profil balai, atau pertanyaan seputar K3 (Safety). Apa yang bisa saya bantu hari ini?",
        who: 'b',
        time: getCurrentTime()
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  function getCurrentTime() {
    return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      text: inputValue,
      who: 'u',
      time: getCurrentTime()
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getResponse(currentInput);
      const botMsg: Message = {
        text: botResponse,
        who: 'b',
        time: getCurrentTime()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1200);
  };

  const getResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    for (const item of KNOWLEDGE_BASE) {
      if (item.k.some(keyword => lowerInput.includes(keyword))) {
        return item.r;
      }
    }
    return "Terima kasih atas pertanyaannya. Untuk informasi lebih lanjut, silakan hubungi Balai K3 Samarinda atau kunjungi ekosistem digital 'TEPIAN K3'. Safety First! 👷";
  };

  const handleQuickReply = (text: string) => {
    setInputValue(text);
    // Use a small timeout to allow state update before sending
    setTimeout(() => {
      const userMsg: Message = {
        text: text,
        who: 'u',
        time: getCurrentTime()
      };
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botResponse = getResponse(text);
        const botMsg: Message = {
          text: botResponse,
          who: 'b',
          time: getCurrentTime()
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1200);
    }, 100);
  };

  const handleSummarize = () => {
    alert('Fitur ringkasan AI memerlukan koneksi ke Gemini API.\nIni adalah preview statis dari tampilan chatbot.');
  };

  return (
    <>
      {/* Floating Trigger */}
      <div className={`asty-floating-container frame-${currentFrame}`} onClick={() => setIsOpen(true)}>
        {/* Speech Bubble (only for frame 2 and 3) */}
        {(currentFrame === 2 || currentFrame === 3) && (
          <div className="asty-speech-bubble-animated">
            {currentFrame === 2 ? (
              <span className="asty-text-bubble">Asisten<br />Safety<br />Kamu!</span>
            ) : (
              <span className="asty-text-bubble">Hai,<br />ASTY<br />disini!</span>
            )}
          </div>
        )}

        <div className="asty-character-float">
          <div className="asty-circle-bg-float" />
          {/* Logo Frame */}
          {currentFrame === 0 && (
            <img 
              src="/images/Desain tanpa judul (22) 1.png" 
              alt="Logo Balai K3" 
              className="asty-img-float logo-frame"
            />
          )}
          {/* Character Frames */}
          {currentFrame > 0 && (
            <img 
              src="/images/asty_3.png" 
              alt="ASTY Character" 
              className="asty-img-float character-frame"
            />
          )}
        </div>
      </div>

      {/* Chatbot Overlay */}
      {isOpen && (
        <div className="asty-overlay" onClick={() => setIsOpen(false)}>
          <div className="asty-window" onClick={(e) => e.stopPropagation()}>
            <header className="asty-header">
              <div className="av-wrap">
                <div className="av">
                  <img src={IMG} alt="Asty" />
                </div>
                <span className="dot-on"></span>
              </div>
              <div className="hdr">
                <h1>Asty (Asisten Safety) <span style={{ color: '#fde047' }}>✨</span></h1>
                <p>Balai K3 Samarinda</p>
              </div>
              <button className="asty-close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </header>

            <div className="asty-msgs">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mrow ${msg.who === 'b' ? 'b' : 'u'}`}>
                  <div className="mcont">
                    <div className="mav">
                      <div className={`mavc ${msg.who === 'b' ? 'ba' : 'ua'}`}>
                        {msg.who === 'b' ? (
                          <img src={IMG} alt="Asty" />
                        ) : (
                          <User size={18} className="ui" color="#6b7280" />
                        )}
                      </div>
                    </div>
                    <div className="mcol">
                      <div className={`bub ${msg.who === 'b' ? 'bb' : 'ub'}`}>
                        {msg.text}
                      </div>
                      <span className="ts">{msg.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mrow b">
                  <div className="mcont">
                    <div className="mav">
                      <div className="mavc ba">
                        <img src={IMG} alt="Asty" />
                      </div>
                    </div>
                    <div className="typing">
                      <div className="td"></div>
                      <div className="td"></div>
                      <div className="td"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={msgsEndRef} />
            </div>

            <div className="asty-qr">
              <div className="qr-in">
                <button className="qb sum" onClick={handleSummarize}>
                  <Sparkles size={14} />
                  ✨ Ringkas Obrolan
                </button>
                <button className="qb" onClick={() => handleQuickReply('Jadwal Pelatihan 2026')}>
                  <Calendar size={14} />
                  Jadwal Pelatihan
                </button>
                <button className="qb" onClick={() => handleQuickReply('Profil Balai K3 Samarinda')}>
                  <Info size={14} />
                  Profil Balai
                </button>
                <button className="qb" onClick={() => handleQuickReply('Apa saja layanan yang tersedia?')}>
                  <FileText size={14} />
                  Daftar Layanan
                </button>
                <button className="qb" onClick={() => handleQuickReply('Apa saja persyaratannya?')}>
                  <HelpCircle size={14} />
                  Persyaratan
                </button>
              </div>
            </div>

            <div className="asty-inp">
              <form className="inp-f" onSubmit={handleSend}>
                <input 
                  type="text" 
                  className="inp-t" 
                  placeholder="Tanya info layanan / jadwal pelatihan / tips K3..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="snd" disabled={!inputValue.trim()}>
                  <Send size={18} />
                </button>
              </form>
              <div className="ft">Asty dirancang untuk memberikan informasi layanan Balai K3 Samarinda & edukasi Keselamatan Kerja.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotAsty;
