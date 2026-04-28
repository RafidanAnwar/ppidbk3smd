# Portal PPID Balai K3 Samarinda

Portal resmi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Balai Keselamatan dan Kesehatan Kerja (K3) Samarinda. Platform ini dirancang untuk memudahkan masyarakat dalam mengakses informasi publik dan mengajukan permohonan informasi secara digital.

## ✨ Fitur Utama

- **Layanan Informasi Publik**: Akses cepat ke berbagai kategori informasi K3.
- **Formulir Permohonan Informasi**: Pengajuan permohonan informasi secara online dengan fitur unggah dokumen pendukung dan pratinjau file.
- **Profil PPID**: Informasi lengkap mengenai struktur, tugas, dan fungsi PPID Balai K3 Samarinda.
- **Dashboard Statistik**: Visualisasi data layanan informasi yang modern.
- **Integrasi Chatbot ASTY**: Asisten pintar yang siap membantu menjawab pertanyaan umum seputar layanan.
- **Desain Responsif**: Tampilan yang optimal di berbagai perangkat (Desktop, Tablet, Mobile).

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS dengan desain modern (Glassmorphism & Vibrant Gradients)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Memulai (Local Development)

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Instalasi
1. Clone repositori ini:
   ```bash
   git clone https://github.com/RafidanAnwar/ppidbk3smd.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd ppidbk3smd
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```

### Menjalankan Server Pengembangan
```bash
npm run dev
```
Akses aplikasi melalui `http://localhost:5173`.

### Membangun untuk Produksi
```bash
npm run build
```

## 📂 Struktur Proyek Utama
- `src/components/`: Komponen UI mandiri (Hero, LayananPublik, PermohonanInformasi, ProfilPPID, dll).
- `src/App.tsx`: Komponen utama pengatur navigasi dan state aplikasi.
- `src/App.css`: Pusat pengelolaan gaya desain (styling) global.
- `public/images/`: Aset gambar dan ilustrasi yang digunakan dalam aplikasi.

---

© 2024 Balai K3 Samarinda - PPID Portal.
