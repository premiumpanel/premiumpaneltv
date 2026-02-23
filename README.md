# Premium IPTV Reseller Paneli

Bu proje, yüksek performanslı ve SEO uyumlu bir IPTV bayilik satış sitesidir.

## Kurulum ve Çalıştırma

Gerekli bağımlılıkları yükleyin ve projeyi başlatın:

```bash
npm install
npm run dev
```

Prodüksiyon build'i almak için:

```bash
npm run build
npm start
```

## Yapılandırma

### WhatsApp Numarası Değiştirme
Tüm sitedeki WhatsApp yönlendirmeleri `components/Header.tsx`, `components/Hero.tsx`, `components/Footer.tsx`, `app/iletisim/page.tsx` ve `app/paketler/page.tsx` dosyalarında bulunmaktadır.
Hızlı bir arama (Ctrl+Shift+F) ile `wa.me` veya `YOUR_PHONE_NUMBER` araması yaparak kendi numaranızla değiştirebilirsiniz.

### Renk Paleti
`tailwind.config.ts` dosyası üzerinden ana renkleri güncelleyebilirsiniz:
- `primary`: Koyu lacivert tonları (Slate 900-950)
- `accent`: Altın rengi (Yellow 500)
- `highlight`: Mavi tonları (Blue 500)

### Blog Yazısı Ekleme
Blog yazıları statik olarak `lib/blog.ts` dosyasında tutulmaktadır. Yeni bir yazı eklemek için `blogPosts` dizisine yeni bir obje eklemeniz yeterlidir. HTML formatında içerik ekleyebilirsiniz.

## SEO ve Performans

- **Metadata:** Her sayfanın başında `metadata` objesi özelleştirilebilir.
- **Sitemap:** `app/sitemap.ts` dosyası otomatik olarak sitemap.xml üretir. Yeni statik sayfalar eklerseniz buraya da eklemeyi unutmayın.
- **Resimler:** `next/image` kullanılmıştır. Yeni görselleri `public/` klasörüne atıp kullanabilirsiniz.

## İletişim Formu
`app/iletisim/page.tsx` dosyasında yer alan form şu an sadece arayüz olarak çalışmaktadır (mock). Gerçek bir gönderim için backend API'nize veya bir form servisine (ör: Formspree) bağlamanız gerekir.

## Lisans
Bu proje özel kullanım içindir.
