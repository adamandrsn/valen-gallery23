import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.jpeg";
import g7 from "@/assets/gallery-7.jpeg";
import g8 from "@/assets/gallery-8.jpeg";

const photos = [
  { src: g1, w: 768, h: 1024, caption: "" },
  { src: g2, w: 768, h: 768, caption: "" },
  { src: g3, w: 768, h: 960, caption: "" },
  { src: g4, w: 768, h: 1152, caption: "" },
  { src: g5, w: 768, h: 768, caption: "" },
  { src: g6, w: 768, h: 960, caption: "" },
  { src: g7, w: 768, h: 1024, caption: "" },
  { src: g8, w: 768, h: 768, caption: "" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top hairline meta */}
      <div className="px-6 md:px-12 pt-6">
        <div className="flex items-center justify-between eyebrow text-muted-foreground">
          <span>Galeri 23</span>
          <span className="hidden sm:inline">Edisi · MMXXVI</span>
          <span>Vol. 01</span>
        </div>
        <div className="hairline mt-4" />
      </div>

      {/* HERO */}
      <header className="relative px-6 md:px-12 pt-16 md:pt-28 pb-24 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          <p className="eyebrow text-muted-foreground mb-10 md:mb-16 animate-fade">
            Sebuah pameran untuk
          </p>

          <div className="grid grid-cols-12 gap-4 items-end">
            <h1 className="col-span-12 md:col-span-8 display-num text-foreground animate-rise"
                style={{ fontSize: "clamp(10rem, 32vw, 28rem)" }}>
              23
            </h1>

            <div className="col-span-12 md:col-span-4 md:pb-6 animate-rise delay-200">
              <h2 className="display-sans text-foreground"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
                Valen.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
                Delapan bingkai. Satu rangkaian sederhana untuk merayakan satu tahun lagi
                dari kamu.
              </p>
            </div>
          </div>

          <div className="hairline mt-20 md:mt-28" />
          <div className="flex items-center justify-between eyebrow text-muted-foreground mt-4 animate-fade delay-500">
            <span>Indeks · 01 — 08</span>
            <span className="hidden md:inline">Gulir untuk melihat</span>
            <span>↓</span>
          </div>
        </div>
      </header>

      {/* GALLERY */}
      <section id="gallery" className="px-6 md:px-12 pb-24 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h3 className="display-sans text-foreground" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Koleksi
            </h3>
            <span className="eyebrow text-muted-foreground">Pilihan · 2026</span>
          </div>

          <div className="masonry">
            {photos.map((p, i) => (
              <figure key={i} className="tile group">
                <img
                  src={p.src}
                  alt={p.caption}
                  width={p.w}
                  height={p.h}
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <figcaption className="mt-3 flex items-center justify-between eyebrow text-muted-foreground">
                  <span>{String(i + 1).padStart(2, "0")} — {p.caption}</span>
                  <span>↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

{/* WISHES */}
      <section id="wishes" className="px-6 md:px-12 py-24 md:py-40 bg-secondary">
        <div className="max-w-[1100px] mx-auto">
          <p className="eyebrow text-muted-foreground mb-10">Kata · Tunggal</p>
          <p className="display-sans text-foreground leading-relaxed"
             style={{ fontSize: "clamp(1.125rem, 2vw + 0.5rem, 2.25rem)" }}>
            <span className="display-num italic font-medium">Selamat ulang tahun, Valen-ku sayang. Barakallah fii umrik — </span> 
            Kita udah ngelewatin banyak hal bareng ya, dari yang bikin ketawa sampai yang sering bikin kita berdebat hebat. Makasih banyak udah jadi wanita yang makin dewasa, selalu sabar ngertiin kondisi aku, dan terus jadi 'rumah' paling nyaman buat aku pulang.
            <br /><br />
            Semoga Allah selalu jaga kamu, kasih kamu kebahagiaan yang nggak putus-putus, dan ngelancarin semua urusan serta kuliahmu. Aku bersyukur banget akhirnya bisa ngerayain ulang tahun kamu kali ini di kota yang sama lagi.
            <br /><br />
            Semoga hubungan kita makin kuat dan kita bisa terus bareng-bareng buat ngerayain ulang tahun kamu di tahun-tahun berikutnya. Stay amazing, cantik. I love you more than words can say.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="hairline mb-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 eyebrow text-muted-foreground">
            <span>© Galeri 23</span>
            <span>Dirangkai dengan tenang.</span>
            <a href="#gallery" className="hover:text-foreground transition-colors">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
