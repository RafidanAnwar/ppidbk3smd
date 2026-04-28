const cards = [
  {
    bgImage: '/images/Rectangle 3464203.png',
    titleColor: '#FF8DB7',
    title: 'Informasi Setiap Saat',
    desc: 'Informasi yang selalu tersedia dan dapat diakses kapan saja',
    img: '/images/Desain tanpa judul (29) 2.png',
  },
  {
    bgImage: '/images/Rectangle 3464203 (1).png',
    titleColor: '#3EA581',
    title: 'Informasi Berkala',
    desc: 'Informasi yang disampaikan rutin dalam periode tertentu',
    img: '/images/Desain tanpa judul (22) 4.png',
  },
  {
    bgImage: '/images/Rectangle 3464203 (2).png',
    titleColor: '#FF770F',
    title: 'Informasi Serta Merta',
    desc: 'Informasi yang diumumkan segera saat kondisi darurat atau mendesak',
    img: '/images/Desain tanpa judul (22) 6.png',
  },
  {
    bgImage: '/images/Rectangle 3464203 (3).png',
    titleColor: '#E17A73',
    title: 'Informasi Dikecualikan',
    desc: 'Informasi yang tidak bisa di akses oleh umum',
    img: '/images/Desain tanpa judul (22) 2.png',
  },
];

interface InformasiPublikProps {
  onDetailClick?: (title: string) => void;
}

const InformasiPublik = ({ onDetailClick }: InformasiPublikProps) => {
  return (
    <section className="informasi-section" id="informasi">
      <div className="informasi-header">
        <h2>Informasi Publik</h2>
        <div className="informasi-gradient-bar" />
        <p>
          Informasi publik dikelompokkan berdasarkan jenisnya sesuai dengan
          ketentuan keterbukaan informasi, meliputi informasi berkala, serta
          merta, dan setiap saat.
        </p>
      </div>

      <div className="informasi-cards">
        {cards.map((card, i) => (
          <div 
            className="info-card cursor-pointer" 
            key={i}
            onClick={() => {
              if (card.title === 'Informasi Setiap Saat') {
                onDetailClick?.('informasi-setiap-saat');
              } else if (card.title === 'Informasi Berkala') {
                onDetailClick?.('informasi-berkala');
              } else if (card.title === 'Informasi Serta Merta') {
                onDetailClick?.('informasi-serta-merta');
              } else if (card.title === 'Informasi Dikecualikan') {
                onDetailClick?.('informasi-dikecualikan');
              } else {
                onDetailClick?.(card.title);
              }
            }}
          >
            <div
              className="info-card-top"
              style={{ 
                background: `url('${card.bgImage}') no-repeat center/contain`,
                backgroundColor: 'transparent'
              }}
            >
              <img src={card.img} alt={card.title} />
            </div>
            <h3
              className="info-card-title"
              style={{ color: card.titleColor }}
            >
              {card.title}
            </h3>
            <p className="info-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformasiPublik;
