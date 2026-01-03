import React from "react";
import { MapPin, Clock, Navigation, ExternalLink, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

const LocationsPage = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.3 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });
  const [comingRef, comingVisible] = useScrollReveal({ threshold: 0.2 });

  const locations = [
    {
      city: "ΙΩΑΝΝΙΝΑ",
      address: "Αβέρωφ 60",
      status: "OG SPOT",
      established: "2015",
      hours: "Καθημερινά (εκτός Δευτέρας)",
      openTime: "19:00",
      description: "Εδώ ξεκίνησε όλο το ταξίδι το 2015. Το original spot!",
      mapLink: "https://maps.google.com/?q=Αβέρωφ+60+Ιωάννινα",
      featured: true,
    },
    {
      city: "ΠΕΡΙΣΤΕΡΙ",
      address: "Παναγή Τσαλδάρη & Ερυθραίας",
      status: "OPEN",
      hours: "Καθημερινά",
      openTime: "19:00",
      description: "Στην καρδιά του Περιστερίου!",
      mapLink: "https://maps.google.com/?q=Παναγή+Τσαλδάρη+Περιστέρι",
      featured: false,
    },
    {
      city: "ΠΕΙΡΑΙΑΣ - ΠΑΣΑΛΙΜΑΝΙ",
      address: "Σωτήρος Διός 47",
      status: "OPEN",
      hours: "Καθημερινά",
      openTime: "19:00",
      description: "Το μερακλίδικο spot στο Πασαλιμάνι!",
      mapLink: "https://maps.google.com/?q=Σωτήρος+Διός+47+Πειραιάς",
      featured: false,
    },
    {
      city: "ΝΕΑ ΦΙΛΑΔΕΛΦΕΙΑ",
      address: "Βρυούλων 5",
      status: "OPEN",
      hours: "Καθημερινά",
      openTime: "19:00",
      description: "Κλασσικό spot στην Νέα Φιλαδέλφεια!",
      mapLink: "https://maps.google.com/?q=Βρυούλων+5+Νέα+Φιλαδέλφεια",
      featured: false,
    },
    {
      city: "ΘΕΣΣΑΛΟΝΙΚΗ",
      address: "Συγγρού 7",
      status: "OPEN",
      hours: "Καθημερινά",
      openTime: "19:00",
      description: "Η Βρωμιάρα έφτασε και στη Θεσσαλονίκη!",
      mapLink: "https://maps.google.com/?q=Συγγρού+7+Θεσσαλονίκη",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white" data-testid="locations-page">
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/atmosphere/atmosphere-1.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-aurora opacity-40" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 animate-float opacity-30">
          <MapPin className="text-yellow-400" size={50} />
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4">
            <span className="badge-yellow">📍 5 Locations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 graffiti-text-glow mb-4">
            OUR SPOTS
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Τα φώτα ανάβουν, η Βρωμιάρα σερβίρει, οι μουσικές στήνουν ατμόσφαιρα άλλης φάσης!
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="glass-card-pink py-6 border-y border-pink-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="p-2 bg-pink-500/20 rounded-lg animate-bounce-subtle">
              <Clock className="text-pink-500" size={24} />
            </div>
            <p className="text-white">
              <strong className="text-yellow-400">SOLD OUT?</strong> Check our Instagram story before you come!
              <span className="block sm:inline sm:ml-2 text-gray-400">
                Η αυλαία πέφτει μόλις έρθει το ξεπούλημα!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section ref={gridRef} className="py-16 relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="locations-grid">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-500 group hover-lift ${
                  location.featured
                    ? "glass-card bg-gradient-to-br from-yellow-500/10 to-pink-500/10 border-2 border-yellow-500/50 col-span-1 md:col-span-2 lg:col-span-1"
                    : "glass-card"
                } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`location-${index}`}
              >
                {location.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2">
                      <Sparkles size={14} />
                      {location.status} - EST {location.established}
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                    <MapPin className="text-yellow-400" size={28} />
                  </div>
                  {!location.featured && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
                      {location.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {location.city}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  {location.address}
                </p>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {location.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="text-yellow-400/60" size={16} />
                    <span className="text-gray-400">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 font-black text-xl">
                      {location.openTime}
                    </span>
                    <span className="text-gray-500 text-sm">Opening time</span>
                  </div>
                </div>

                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black py-3.5 rounded-lg font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 magnetic-btn"
                >
                  <Navigation size={18} />
                  GET DIRECTIONS
                </a>
                
                {/* Corner decoration */}
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section ref={comingRef} className="py-20 bg-zinc-950 relative overflow-hidden" data-testid="coming-soon">
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${comingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block mb-6">
            <span className="badge-pink animate-bounce-subtle">🚀 Coming Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ΣΥΝΤΟΜΑ ΣΕ <span className="gradient-text-animated">ΠΕΡΙΣΣΟΤΕΡΕΣ ΠΟΛΕΙΣ</span>...
          </h2>
          <p className="text-gray-400 mb-8">
            Η Βρωμιάρα επεκτείνεται! Stay tuned for new locations.
          </p>
          <a
            href="https://instagram.com/vromiarastreetfood"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-yellow-400 transition-colors font-bold underline-grow"
          >
            Follow us for updates <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Linktree CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 graffiti-text">
            ONE CLICK TO ALL SPOTS
          </h2>
          <p className="text-black/70 mb-8">
            Εύκολη πρόσβαση σε όλα τα spots μέσα από ένα link!
          </p>
          <a
            href="https://linktr.ee/vromiara.spots"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn bg-black text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 rounded-lg elevation-4"
            data-testid="linktree-cta"
          >
            <ExternalLink size={20} />
            LINKTREE → #VRMR
          </a>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
