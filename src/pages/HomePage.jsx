import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Clock, Instagram, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal, useParallax } from "@/hooks/useAnimations";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxStyle = useParallax(0.3);
  
  // Scroll reveal refs
  const [manifestoRef, manifestoVisible] = useScrollReveal({ threshold: 0.2 });
  const [featuredRef, featuredVisible] = useScrollReveal({ threshold: 0.1 });
  const [locationsRef, locationsVisible] = useScrollReveal({ threshold: 0.1 });
  const [instagramRef, instagramVisible] = useScrollReveal({ threshold: 0.2 });
  const [newsletterRef, newsletterVisible] = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const manifesto = [
    "WE ARE NOT JUST A SHOP",
    "WE ARE PHILOSOPHY",
    "WE ARE STREET",
    "WE CREATE MEMORIES",
    "WE UNITE PEOPLE THROUGH FOOD",
    "WE ARE VROMIARA",
  ];

  const featuredSpots = [
    { city: "ΙΩΑΝΝΙΝΑ", address: "Αβέρωφ 60", status: "OG SPOT - EST 2015" },
    { city: "ΠΕΡΙΣΤΕΡΙ", address: "Παναγή Τσαλδάρη & Ερυθραίας", status: "OPEN" },
    { city: "ΠΕΙΡΑΙΑΣ", address: "Σωτήρος Διός 47, Πασαλιμάνι", status: "OPEN" },
    { city: "Ν. ΦΙΛΑΔΕΛΦΕΙΑ", address: "Βρυούλων 5", status: "OPEN" },
    { city: "ΘΕΣΣΑΛΟΝΙΚΗ", address: "Συγγρού 7", status: "OPEN" },
  ];

  return (
    <div className="bg-black text-white" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 particles-bg" />
        
        {/* Background with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/food/food-truck.jpeg')",
            ...parallaxStyle,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Graffiti overlay effect */}
        <div className="absolute inset-0 spray-texture" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/20 rounded-full animate-float opacity-50" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-pink-500/20 rounded-full animate-float delay-300 opacity-50" />
        <div className="absolute top-1/3 right-1/4 animate-bounce-subtle">
          <Sparkles className="text-yellow-400/30" size={32} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 animate-blur-in">
            <Link to="/">
              <img
                src="/images/logos/vromiara-logo-truly-transparent.png"
                alt="VROMIARA - THE GOURMET STREET FOOD"
                className="h-44 md:h-64 w-auto mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer drop-shadow-2xl"
                data-testid="hero-logo"
              />
            </Link>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200 tracking-widest">
            STREET FOOD HEADQUARTERS • EST 2015
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <Link
              to="/menu"
              className="magnetic-btn bg-yellow-400 text-black px-8 py-4 font-bold text-lg rounded transition-all duration-300 hover:bg-pink-500 hover:text-white pulse-neon group"
              data-testid="hero-menu-btn"
            >
              <span className="flex items-center gap-2">
                CHECK THE MENU
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/locations"
              className="magnetic-btn border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-bold text-lg rounded transition-all duration-300 hover:bg-yellow-400 hover:text-black glitch-hover backdrop-blur-sm"
              data-testid="hero-locations-btn"
            >
              FIND A SPOT
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-yellow-400/60 text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={28} className="text-yellow-400" />
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Manifesto Section */}
      <section 
        ref={manifestoRef}
        className="py-24 bg-black relative overflow-hidden" 
        data-testid="manifesto-section"
      >
        {/* Background text watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white/[0.02] whitespace-nowrap">
            VROMIARA
          </span>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/logos/street-manifesto.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className={`space-y-4 transition-all duration-1000 ${manifestoVisible ? 'opacity-100' : 'opacity-0'}`}>
            {manifesto.map((line, index) => (
              <p
                key={index}
                className={`text-2xl md:text-4xl font-black tracking-wider transition-all duration-700 ${
                  index === manifesto.length - 1
                    ? "text-yellow-400 text-3xl md:text-5xl mt-8 text-shimmer"
                    : "text-white"
                }`}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  textShadow: index === manifesto.length - 1 ? "0 0 30px rgba(255, 215, 0, 0.5)" : "none",
                  transform: manifestoVisible ? 'translateX(0)' : 'translateX(-30px)',
                  opacity: manifestoVisible ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className={`mt-12 flex gap-4 flex-wrap transition-all duration-700 delay-700 ${manifestoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="tag-street bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30">
              #VRMR
            </span>
            <span className="tag-street bg-pink-500/20 text-pink-500 hover:bg-pink-500/30">
              #SOUSVIDE
            </span>
            <span className="tag-street bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30">
              #EST2015
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-graffiti max-w-4xl mx-auto" />

      {/* Featured Food Section */}
      <section 
        ref={featuredRef}
        className="py-24 bg-zinc-950 relative overflow-hidden" 
        data-testid="featured-section"
      >
        {/* Aurora background */}
        <div className="absolute inset-0 bg-aurora opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-black text-yellow-400 graffiti-text-glow mb-4">
              F*CK YOUR DIET TONIGHT
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              16 ώρες σιγομαγειρεμένη πανσέτα • SOUS VIDE τεχνική • Σπιτικές σάλτσες
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <div
                key={num}
                className={`img-zoom rounded-lg overflow-hidden aspect-square relative group film-grain transition-all duration-500 ${
                  featuredVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <img
                  src={`/images/food/food-${num}.jpeg`}
                  alt={`Food ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-yellow-400 font-bold text-sm">#VRMR</span>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 mt-2" />
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-pink-500/0 group-hover:border-pink-500/50 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${featuredVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-pink-500 transition-colors font-bold underline-grow"
            >
              VIEW FULL GALLERY <ArrowRight size={20} className="animate-bounce-subtle" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section 
        ref={locationsRef}
        className="py-24 bg-black relative" 
        data-testid="locations-preview"
      >
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${locationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              OUR <span className="gradient-text-animated">SPOTS</span>
            </h2>
            <p className="text-gray-400">
              Check the SOLD OUT sign & Instagram story before you come!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSpots.map((spot, index) => (
              <div
                key={index}
                className={`glass-card rounded-lg p-6 group sticker hover-lift transition-all duration-500 ${
                  locationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                    <MapPin className="text-yellow-400" size={24} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                    spot.status === "OG SPOT - EST 2015" 
                      ? "bg-pink-500/20 text-pink-500 border border-pink-500/30" 
                      : "bg-green-500/20 text-green-500 border border-green-500/30"
                  }`}>
                    {spot.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {spot.city}
                </h3>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                  {spot.address}
                </p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${locationsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link
              to="/locations"
              className="magnetic-btn bg-yellow-400 text-black px-8 py-4 font-bold text-lg hover:bg-pink-500 hover:text-white transition-all inline-block rounded pulse-neon"
            >
              VIEW ALL LOCATIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section 
        ref={instagramRef}
        className="py-24 relative overflow-hidden" 
        data-testid="instagram-cta"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${instagramVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm mb-6 animate-float">
            <Instagram size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 graffiti-text">
            FOLLOW THE VIBE
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Check our Instagram for daily sold out updates, behind the scenes & more!
          </p>
          <a
            href="https://instagram.com/vromiarastreetfood"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn bg-white text-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all inline-flex items-center gap-2 rounded elevation-3"
            data-testid="instagram-follow-btn"
          >
            <Instagram size={20} />
            @VROMIARASTREETFOOD
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        ref={newsletterRef}
        className="py-24 bg-black relative" 
        data-testid="newsletter-section"
      >
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent" />
        
        <div className={`max-w-2xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="badge-yellow animate-bounce-subtle">✨ Newsletter</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ΚΑΝΕ ΕΓΓΡΑΦΗ ΝΑ ΤΑ ΜΑΘΑΙΝΕΙΣ ΟΛΑ <span className="gradient-text">ΣΤΑ ΜΠΑΜ</span>
          </h2>
          <p className="text-gray-400 mb-8">
            New spots, special drops, exclusive offers - be the first to know!
          </p>
          <form className="flex flex-col sm:flex-row gap-4" data-testid="newsletter-form">
            <input
              type="email"
              placeholder="Your email..."
              className="input-dark flex-1"
              data-testid="newsletter-email"
            />
            <button
              type="submit"
              className="magnetic-btn bg-yellow-400 text-black px-8 py-3 font-bold hover:bg-pink-500 hover:text-white transition-all rounded pulse-neon"
              data-testid="newsletter-submit"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-4">
            No spam, just good vibes. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
