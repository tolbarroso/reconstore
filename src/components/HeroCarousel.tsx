import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '@/components/ui/button'; // ajuste o caminho se seu Button estiver em outro lugar

// ⚠️ Use caminhos relativos para evitar problemas no build da Vercel (case-sensitive)
// Certifique-se de que os nomes dos arquivos batem 100% (maiúsculas/minúsculas e extensão)
import reconLogo from "../../assets/IconeReconStore.png";
import reconFundo from "../../assets/fundoRecon.png";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
};

const heroSlides: Slide[] = [
  {
    id: 1,
    image: reconFundo,
    title: "Recon Store",
    subtitle: "Loja virtual da Catedral da Reconciliação",
    description: "Aqui você encontrará diversos produtos da nossa igreja.",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide apenas se houver mais de um slide
  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products-section");
    if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
  };

  // Fallback caso heroSlides esteja vazio
  if (heroSlides.length === 0) {
    return (
      <div className="relative w-full h-[70vh] md:h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center px-4">
          <h1 className="font-brand text-4xl md:text-6xl font-bold mb-4 tracking-wider">
            Recon Store
          </h1>
          <p className="text-white/80">Em breve novidades por aqui.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={`${slide.title}${slide.subtitle ? ` — ${slide.subtitle}` : ""}`}
          >
            {/* Overlay opcional (defina .hero-overlay no seu CSS/Tailwind se quiser um degradê) */}
            <div className="hero-overlay absolute inset-0" />

            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <img
                    src={reconLogo}
                    alt="Recon Store"
                    className="mx-auto h-16 md:h-20 object-contain filter brightness-0 invert"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <h1 className="font-brand text-6xl md:text-8xl font-bold mb-4 tracking-wider">
                  {slide.title}
                </h1>

                {slide.subtitle && (
                  <h2 className="font-brand text-2xl md:text-3xl mb-6 text-white/90 font-semibold">
                    {slide.subtitle}
                  </h2>
                )}

                {slide.description && (
                  <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                )}

                <Button
                  onClick={scrollToProducts}
                  variant="whatsapp" // garanta que esse variant existe no seu Button
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Conheça Nossos Produtos
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Setas (esconda se só houver 1 slide) */}
      {heroSlides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                       bg-black/20 hover:bg-black/40 text-white p-3 rounded-full
                       transition-all duration-300"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                       bg-black/20 hover:bg-black/40 text-white p-3 rounded-full
                       transition-all duration-300"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots (esconda se só houver 1 slide) */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-accent scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
