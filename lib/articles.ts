export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  updated: string;
  body: string; // perenggan dipisah dengan \n\n; "## " untuk subtajuk
}

export const articles: Article[] = [
  {
    slug: "cara-pilih-mercun-berlesen",
    title: "Cara Pilih Mercun Berlesen Yang Betul",
    excerpt:
      "Panduan lengkap memilih mercun & bunga api berlesen yang sah, selamat dan berkualiti di Malaysia.",
    updated: "2026-08-01",
    body: `Memilih mercun yang betul bukan sekadar tentang kesan visual — ia tentang keselamatan, kesahihan undang-undang, dan nilai untuk wang anda. Berikut panduan ringkas daripada pasukan MercunBerlesen.

## 1. Pastikan Ia Berlesen

Perkara pertama dan paling penting: pastikan pembekal beroperasi secara sah di bawah undang-undang PDRM (Akta Bahan Letupan 1957). Pembekal berlesen boleh menyediakan dokumentasi permit dan surat sokongan. Produk tanpa lesen mendedahkan anda kepada risiko rampasan dan saman.

## 2. Padankan Dengan Majlis Anda

Setiap jenis mercun sesuai untuk tujuan berbeza:

- Perayaan besar (Tahun Baru Cina, Merdeka): Celebration Cake bertembakan tinggi untuk finale gah.
- Majlis kahwin: cold sparkler dan air pancut (fountain) yang selamat dan cantik.
- Kanak-kanak: pop-pop dan sparkler berbunyi rendah.

## 3. Semak Kualiti & Konsistensi

Produk berkualiti memberikan kesan yang konsisten setiap kali. Beli daripada pembekal yang menstok jenama dipercayai dan boleh tunjukkan video sebenar produk sebelum anda membeli.

## 4. Fikir Tentang Kuantiti (Borong)

Jika anda peniaga atau menganjurkan majlis besar, membeli secara borong (peti) memberikan harga terbaik. Bincang keperluan anda dengan pasukan kami untuk cadangan pakej.`,
  },
  {
    slug: "beza-mercun-berlesen-dan-tidak-berlesen",
    title: "Apa Beza Mercun Berlesen & Tidak Berlesen?",
    excerpt:
      "Fahami perbezaan penting antara mercun berlesen dan tidak berlesen di Malaysia — dan kenapa ia penting.",
    updated: "2026-08-01",
    body: `Ramai orang tidak sedar bahawa membeli mercun daripada sumber yang salah boleh membawa akibat undang-undang yang serius. Berikut perbezaannya.

## Mercun Berlesen

Mercun berlesen dibekalkan oleh syarikat yang beroperasi secara sah di bawah Akta Bahan Letupan 1957. Ciri-cirinya:

- Ada dokumentasi permit dan surat sokongan.
- Produk terpilih dan mematuhi jenis yang dibenarkan.
- Pembekal boleh dihubungi dan bertanggungjawab.
- Anda meraikan dengan tenang tanpa risiko undang-undang.

## Mercun Tidak Berlesen

Sumber tidak berlesen — termasuk jualan dalam talian kepada pengguna, yang sebenarnya dilarang — membawa risiko:

- Denda sehingga RM10,000 dan tindakan undang-undang.
- Tiada dokumentasi; anda tidak dilindungi.
- Produk tidak menentu dan berpotensi tidak selamat.

## Kesimpulan

Perbezaan yang paling penting ialah ketenangan minda. Dengan pembekal berlesen seperti MercunBerlesen, anda mendapat produk berkualiti, dokumentasi yang betul, dan sokongan penuh.`,
  },
  {
    slug: "keperluan-permit-pdrm-mercun",
    title: "Perlukah Permit PDRM Untuk Mercun?",
    excerpt:
      "Ketahui bila anda memerlukan permit PDRM untuk mercun & bunga api, dan bagaimana untuk memohon.",
    updated: "2026-08-01",
    body: `Di Malaysia, penggunaan mercun dan bunga api dikawal ketat. Berikut asas yang perlu anda tahu tentang permit PDRM.

## Bila Permit Diperlukan

Secara umum, permit daripada Ketua Polis Daerah (PDRM) diperlukan untuk pemilikan dan penggunaan mercun bagi majlis atau acara. Pihak berkuasa tempatan (PBT) hanya akan mempertimbangkan permohonan setelah kelulusan PDRM diperoleh.

## Siapa Boleh Memohon

- Warganegara Malaysia berumur 21 tahun ke atas.
- Syarikat dan organisasi berdaftar.
- Penganjur acara dan majlis.

## Bagaimana Kami Membantu

MercunBerlesen menyediakan surat sokongan dan panduan lengkap untuk memudahkan permohonan permit anda. Sebagai pembekal berlesen, kami memahami proses dan dokumen yang diperlukan oleh pihak berkuasa.

Hubungi kami untuk bantuan permit sebelum majlis anda.`,
  },
  {
    slug: "panduan-keselamatan-mercun",
    title: "Panduan Keselamatan Menggunakan Mercun",
    excerpt:
      "Langkah keselamatan penting semasa menyimpan dan menggunakan mercun & bunga api.",
    updated: "2026-08-01",
    body: `Mercun memberi kegembiraan — tetapi keselamatan mesti diutamakan. Ikuti garis panduan ini.

## Sebelum Menggunakan

- Baca arahan pada setiap produk.
- Pilih kawasan lapang, jauh daripada bangunan dan bahan mudah terbakar.
- Sediakan baldi air atau alat pemadam berdekatan.

## Semasa Menggunakan

- Nyalakan satu pada satu masa, dan berundur dengan segera.
- Jangan sesekali cuba menyalakan semula produk yang gagal.
- Pastikan kanak-kanak diawasi orang dewasa pada setiap masa.

## Penyimpanan

- Simpan di tempat kering dan sejuk, jauh daripada sumber api.
- Jauhkan daripada capaian kanak-kanak.

Keselamatan yang baik memastikan setiap sambutan kekal sebagai kenangan indah.`,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
