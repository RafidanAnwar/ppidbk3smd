import { useState } from 'react';

const faqs = [
  {
    question: "Apa itu Balai K3 Samarinda?",
    answer: "Balai Keselamatan dan kesehatan kerja (K3) Samarinda merupakan lembaga resmi yang berperan strategis dalam mendukung penerapan K3 melalui pembinaan, pengujian dan pelatihan intensif."
  },
  {
    question: "Layanan apa saja yang tersedia?",
    answer: "Kami menyediakan berbagai layanan mulai dari pengujian lingkungan kerja, pelatihan sertifikasi kompetensi, uji kompetensi, hingga konsultasi implementasi SMK3."
  },
  {
    question: "Bagaimana cara mendaftar pelatihan?",
    answer: "Pendaftaran dapat dilakukan melalui portal Tepian K3 atau datang langsung ke kantor Balai K3 Samarinda dengan membawa persyaratan yang diperlukan."
  },
  {
    question: "Apakah sertifikat yang diterbitkan diakui nasional?",
    answer: "Ya, semua sertifikat pelatihan dan kompetensi yang kami terbitkan diakui secara nasional oleh Kementerian Ketenagakerjaan RI."
  }
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="home-faq-new" id="faq">
      <div className="faq-header-new">
        <div className="faq-badge-new">
          <div className="badge-dot" />
          <span>FAQ</span>
        </div>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-title-line" />
      </div>

      <div className="faq-content-new">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`faq-item-new ${openIndex === i ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="faq-trigger-new">
              <span className="faq-label-new">{faq.question}</span>
              <span className="faq-chevron-new">{openIndex === i ? '▲' : '▼'}</span>
            </div>
            {openIndex === i && (
              <div className="faq-answer-new">
                {faq.answer}
              </div>
            )}
            <div className="faq-divider-new" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFAQ;
