import React, { useState } from "react";
import { X, Instagram, ZoomIn, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.3 });
  const [galleryRef, galleryVisible] = useScrollReveal({ threshold: 0.05 });

  const filters = [
    { id: "all", name: "ALL", icon: "✨" },
    { id: "food", name: "FOOD", icon: "🍔" },
    { id: "atmosphere", name: "VIBES", icon: "🎸" },
  ];

  const galleryImages = [
    { src: "/images/food/food-1.jpeg", category: "food", caption: "#VRMR Classic" },
    { src: "/images/food/food-2.jpeg", category: "food", caption: "Sous Vide Perfection" },
    { src: "/images/food/food-3.jpeg", category: "food", caption: "Street Food Goals" },
    { src: "/images/atmosphere/atmosphere-1.jpeg", category: "atmosphere", caption: "The Vibe" },
    { src: "/images/food/food-4.jpeg", category: "food", caption: "Loaded" },
    { src: "/images/food/food-5.jpeg", category: "food", caption: "F*ck Your Diet" },
    { src: "/images/atmosphere/atmosphere-2.jpeg", category: "atmosphere", caption: "Spot Check" },
    { src: "/images/food/food-6.jpeg", category: "food", caption: "Gourmet Street" },
    { src: "/images/food/food-7.jpeg", category: "food", caption: "16 Hours" },
    { src: "/images/atmosphere/atmosphere-3.jpeg", category: "atmosphere", caption: "Night Mode" },
    { src: "/images/food/food-8.jpeg", category: "food", caption: "The Good Stuff" },
    { src: "/images/atmosphere/atmosphere-4.jpeg", category: "atmosphere", caption: "Squad" },
    { src: "/images/food/food-truck.jpeg", category: "atmosphere", caption: "The Truck" },
    { src: "/images/food/menu-board.jpeg", category: "atmosphere", caption: "Menu Vibes" },
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white" data-testid="gallery-page">
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-zinc-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/atmosphere/atmosphere-2.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-aurora opacity-40" />
        
        {/* Floating camera icon */}
        <div className="absolute top-20 right-20 animate-float opacity-20">
          <Camera className="text-yellow-400" size={60} />
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4">
            <span className="badge-yellow">📸 Behind The Scenes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 graffiti-text-glow mb-4">
            GALLERY
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Shots from the street. The food. The vibe. The culture.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                data-testid={`filter-${filter.id}`}
                className={`px-6 py-2.5 font-bold text-sm rounded-lg transition-all duration-300 ease-smooth flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-yellow-400 text-black shadow-lg glow-yellow scale-105"
                    : "bg-zinc-900/80 text-white hover:bg-zinc-800 hover:scale-102"
                }`}
              >
                <span>{filter.icon}</span>
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-12 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testid="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group film-grain transition-all duration-500 ease-smooth ${
                  galleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`gallery-image-${index}`}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-yellow-400/20 rounded-full backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="text-white" size={28} />
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-yellow-400 font-bold text-sm">{image.caption}</p>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 mt-2" />
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/60 transition-all duration-300" />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-4 bg-pink-500/10 rounded-full mb-6 animate-float">
            <Instagram className="text-pink-500" size={48} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            MORE ON <span className="gradient-text">INSTAGRAM</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Daily content, sold out updates, behind the scenes!
          </p>
          <a
            href="https://instagram.com/vromiarastreetfood"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 font-bold rounded-lg hover:opacity-90 transition-all elevation-3"
            data-testid="instagram-btn"
          >
            <Instagram size={20} />
            @VROMIARASTREETFOOD
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-modal"
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-yellow-400 transition-colors bg-white/10 rounded-full backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            data-testid="lightbox-close"
          >
            <X size={28} />
          </button>
          
          {/* Image container */}
          <div 
            className="max-w-4xl max-h-[85vh] relative animate-scale-in" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-center text-yellow-400 font-bold text-xl">
                {selectedImage.caption}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mt-3 rounded-full" />
            </div>
            
            {/* Navigation hint */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
