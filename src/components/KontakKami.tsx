const contacts = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
      </svg>
    ),
    title: 'Nomor Telepon',
    content: <a href="tel:0541771306" className="kontak-link">(0541) 771306</a>,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    title: 'E-mail',
    content: 'balaik3samarinda@gmail.com',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
      </svg>
    ),
    title: 'Alamat',
    content: 'Jl. Sentosa No.9, Sungai Pinang Dalam,\nKec. Sungai Pinang, Kota Samarinda,\nKalimantan Timur 75242',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-12h2v4.5l3.5 2-1 1.5-4.5-2.5V8zM1 6l2-3 3.5 2-2 3L1 6zm22 0l-2-3-3.5 2 2 3 3.5-2z"/>
      </svg>
    ),
    title: 'Jam Operasional',
    content: (
      <table className="jam-table">
        <tbody>
          <tr>
            <td>Senin - Kamis</td>
            <td className="colon">:</td>
            <td>07.30 - 16.00 WITA</td>
          </tr>
          <tr>
            <td>Jum'at</td>
            <td className="colon">:</td>
            <td>07.30 - 16.30 WITA</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

const KontakKami = () => {
  return (
    <section className="kontak-section" id="kontak">
      <div className="kontak-header">
        <h2>Kontak Kami</h2>
        <div className="kontak-gradient-bar" />
        <p>
          Hubungi kami untuk informasi lebih lanjut terkait layanan Balai K3 Samarinda.
        </p>
      </div>

      <div className="kontak-cards">
        {contacts.map((c, i) => (
          <div className="kontak-card" key={i}>
            <div className="kontak-card-bg-wave"></div>
            <div className="kontak-card-icon">{c.icon}</div>
            <div className="kontak-card-text">
              <h4>{c.title}</h4>
              <p>{c.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="kontak-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.680516639573!2d117.16582867459971!3d-0.47620369951913044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f571a019dc3%3A0xeb5741f440333753!2sBalai%20K3%20Samarinda!5e0!3m2!1sen!2sid!4v1777185019368!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Balai K3 Samarinda"
        />
      </div>

      <div className="kontak-social">
        <p>Ikuti media sosial kami untuk informasi terbaru.</p>
        <div className="social-divider"></div>
        <div className="social-icons">
          <a href="#" className="social-icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="social-icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>
          </a>
          <a href="#" className="social-icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
          <a href="#" className="social-icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default KontakKami;
