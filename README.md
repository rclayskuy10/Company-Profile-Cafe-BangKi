# 🎨 Café Aroma - Multi-Page Website

Website café modern, elegan, dan aesthetic dengan desain warm & cozy menggunakan HTML, CSS, dan JavaScript murni (tanpa framework).

---

## 📁 Struktur Folder

```
Cafe Aroma/
│
├── index.html          # Halaman Home
├── menu.html           # Halaman Menu
├── gallery.html        # Halaman Gallery
├── about.html          # Halaman About Us
├── contact.html        # Halaman Contact
│
├── css/
│   └── style.css       # Stylesheet utama
│
├── js/
│   └── script.js       # JavaScript interaktif
│
└── images/             # Folder untuk gambar lokal (opsional)
```

---

## 🎨 Fitur Desain

### Color Palette
- **Primary Color**: `#8B7355` (Warm Brown)
- **Secondary Color**: `#D4A574` (Latte)
- **Accent Gold**: `#C9A961`
- **Cream**: `#F5F0E8`
- **Dark Brown**: `#3E2723`

### Typography
- **Heading Font**: Playfair Display (Serif)
- **Body Font**: Poppins (Sans-serif)

---

## 📄 Halaman Website

### 1. **HOME** (index.html)
- ✅ Hero section dengan background image aesthetic
- ✅ Nama café: "Café Aroma"
- ✅ Tagline: "Your Daily Dose of Coffee & Comfort"
- ✅ CTA buttons: View Menu & Visit Us
- ✅ Section menu unggulan (4 items)
- ✅ Section testimoni pelanggan (3 testimonials)
- ✅ Footer dengan navigasi & social media

### 2. **MENU** (menu.html)
- ✅ Hero section dengan judul "Our Menu"
- ✅ Filter kategori dengan JavaScript
- ✅ 4 Kategori: Coffee, Non-Coffee, Pastry, Food
- ✅ Card design dengan gambar, harga, deskripsi
- ✅ Total 36+ items menu

### 3. **GALLERY** (gallery.html)
- ✅ Grid foto (24 items)
- ✅ Foto interior, barista, latte art, kopi, suasana café
- ✅ Lightbox ketika foto diklik
- ✅ Navigasi prev/next dengan keyboard
- ✅ Section Instagram follow

### 4. **ABOUT** (about.html)
- ✅ Cerita café (origin story)
- ✅ Filosofi kopi (quality, sustainability, craft)
- ✅ Nilai-nilai café (6 value cards)
- ✅ Tim barista profesional (3 profiles)
- ✅ Penghargaan & sertifikasi

### 5. **CONTACT** (contact.html)
- ✅ Form kontak lengkap (nama, email, telepon, subjek, pesan)
- ✅ Informasi alamat dan jam operasional
- ✅ Tombol WhatsApp order
- ✅ Google Maps embed
- ✅ Social media icons
- ✅ FAQ section (6 pertanyaan)

---

## ⚙️ Fitur JavaScript

### Interaktivitas
- ✅ **Smooth Scrolling** - Navigasi halus ke section
- ✅ **Navbar Scroll Effect** - Navbar berubah warna saat scroll
- ✅ **Hamburger Menu** - Responsive mobile menu
- ✅ **Fade-in Animation** - Section muncul dengan animasi
- ✅ **Menu Filter** - Filter kategori menu dengan JavaScript
- ✅ **Gallery Lightbox** - Full-screen image viewer dengan navigasi
- ✅ **Form Validation** - Validasi form kontak
- ✅ **Back to Top Button** - Tombol scroll ke atas
- ✅ **Active Nav Link** - Highlight halaman aktif

---

## 📱 Responsivitas

Website **fully responsive** dan dioptimasi untuk semua device!

### Device Support:
- 🖥️ **Large Desktop** (1400px+) - 4 column grids
- 💻 **Desktop** (1200px - 1399px) - 3 column grids
- 📱 **Tablet** (768px - 1199px) - 2 column grids
- 📱 **Mobile** (< 768px) - 1 column, optimized for touch
- 📱 **Small Mobile** (< 375px) - Extra optimized

### Fitur Responsive:
✅ **Mobile-First Navigation** - Hamburger menu dengan smooth animation
✅ **Adaptive Typography** - Font sizes menyesuaikan layar
✅ **Flexible Grids** - Auto-adjust columns berdasarkan screen width
✅ **Touch-Optimized** - Minimum 44x44px touch targets
✅ **Swipe Gestures** - Support swipe untuk menu navigation
✅ **PWA-Ready** - Dapat diinstall sebagai app di mobile
✅ **Viewport Fix** - Custom JavaScript untuk 100vh issue di mobile
✅ **Image Optimization** - Lazy loading & responsive images
✅ **Smooth Animations** - Hardware accelerated transitions
✅ **Orientation Support** - Portrait & landscape optimized

### Breakpoints Details:
```css
/* Extra Small Mobile */
@media (max-width: 375px) { ... }

/* Mobile Portrait */
@media (max-width: 576px) { ... }

/* Mobile Landscape & Small Tablets */
@media (max-width: 768px) { ... }

/* Tablets */
@media (max-width: 968px) { ... }

/* Large Tablets & Small Desktops */
@media (max-width: 1200px) { ... }

/* High Resolution Displays */
@media (min-width: 1400px) { ... }
```

### Mobile Features:
- **Hamburger Menu**: 3-line animated menu button
- **Swipe Navigation**: Swipe right (open) / left (close) menu
- **Body Scroll Lock**: Prevent scroll when menu open
- **Touch-Friendly Buttons**: All buttons minimum 44x44px
- **Optimized Forms**: Full-width inputs, easy typing
- **Back to Top**: Floating button muncul saat scroll

### Testing:
📖 Lihat file `TESTING_GUIDE.md` untuk panduan lengkap testing
📖 Lihat file `RESPONSIVE_FEATURES.md` untuk detail semua fitur

### Quick Test:
1. Buka di Chrome/Firefox
2. Tekan `F12` → Toggle Device Toolbar (`Ctrl+Shift+M`)
3. Test berbagai device presets
4. Atau resize browser window secara manual

---

## 🚀 Cara Menggunakan

### 1. **Langsung Buka File**
Cukup buka file `index.html` di browser favorit Anda:
```
double-click pada index.html
```

### 2. **Menggunakan Live Server (Recommended)**
Jika menggunakan VS Code:
1. Install extension "Live Server"
2. Right-click pada `index.html`
3. Pilih "Open with Live Server"

### 3. **Deploy ke Hosting**
Upload semua file ke hosting web Anda (cPanel, Netlify, Vercel, GitHub Pages, dll)

---

## 🖼️ Gambar Placeholder

Website menggunakan **Unsplash Source API** untuk placeholder images:
```
https://source.unsplash.com/[dimensions]/?[keywords]
```

### Cara Mengganti dengan Gambar Sendiri:
1. Simpan gambar di folder `images/`
2. Ganti URL di HTML:
   ```html
   <!-- Dari -->
   <img src="https://source.unsplash.com/..." alt="...">
   
   <!-- Menjadi -->
   <img src="images/your-image.jpg" alt="...">
   ```

---

## 🎯 Customization

### Mengubah Warna
Edit file `css/style.css`, bagian `:root`:
```css
:root {
    --primary-color: #8B7355;      /* Ubah sesuai keinginan */
    --secondary-color: #D4A574;    /* Ubah sesuai keinginan */
    --accent-gold: #C9A961;        /* Ubah sesuai keinginan */
    /* ... */
}
```

### Mengubah Font
Edit di bagian `<head>` setiap HTML file:
```html
<!-- Ganti dengan font Google Fonts pilihan Anda -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Mengubah Konten
- **Nama Café**: Cari "Café Aroma" dan replace all
- **Tagline**: Edit di `index.html` bagian hero
- **Menu Items**: Edit di `menu.html`
- **Alamat & Kontak**: Edit di semua file bagian footer dan `contact.html`

---

## 🔗 Social Media Links

Update link social media di file HTML:
```html
<div class="social-links">
    <a href="https://facebook.com/your-page" class="social-link">...</a>
    <a href="https://instagram.com/your-account" class="social-link">...</a>
    <a href="https://twitter.com/your-account" class="social-link">...</a>
    <a href="https://wa.me/6281234567890" class="social-link">...</a>
</div>
```

---

## 📍 Google Maps

Update Google Maps di `contact.html`:
1. Buka [Google Maps](https://www.google.com/maps)
2. Cari lokasi café Anda
3. Klik "Share" → "Embed a map"
4. Copy kode iframe
5. Replace di `contact.html`

---

## 📦 Dependencies

### Eksternal (CDN):
- **Google Fonts** (Playfair Display & Poppins)
- **Font Awesome 6.4.0** (Icons)

Tidak ada dependency Node.js atau library JavaScript framework!

---

## ✨ Browser Support

Website kompatibel dengan:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

## 📝 Catatan Penting

1. **Gambar Unsplash**: Gambar dari Unsplash adalah placeholder. Untuk produksi, gunakan gambar milik sendiri.
2. **Google Maps**: Update iframe dengan lokasi café sebenarnya.
3. **WhatsApp**: Update nomor WhatsApp di semua link WA.
4. **Email & Kontak**: Update alamat email dan nomor telepon.
5. **Social Media**: Update semua link social media dengan akun resmi.

---

## 🛠️ Troubleshooting

### Masalah: Gambar tidak muncul
**Solusi**: 
- Cek koneksi internet (untuk Unsplash)
- Atau ganti dengan gambar lokal di folder `images/`

### Masalah: JavaScript tidak berfungsi
**Solusi**:
- Pastikan file `js/script.js` ter-load dengan benar
- Cek Console Browser (F12) untuk error

### Masalah: Layout berantakan di mobile
**Solusi**:
- Clear browser cache
- Pastikan meta viewport tag ada di `<head>`

---

## 📄 License

Website ini dibuat untuk keperluan komersial/personal. 
Anda bebas menggunakannya untuk project apapun.

---

## 👨‍💻 Credits

**Designed & Developed with ❤️**

- **Design Style**: Modern, Elegant, Aesthetic
- **Color Theme**: Warm & Cozy Café Vibes
- **Images**: Unsplash (Free Stock Photos)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: info@cafearoma.com
- 💬 WhatsApp: +62 812-3456-7890

---

**Happy Brewing! ☕**

*Café Aroma - Your Daily Dose of Coffee & Comfort*