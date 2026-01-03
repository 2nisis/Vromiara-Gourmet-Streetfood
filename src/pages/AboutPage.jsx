import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Flame, Clock, Heart, Sparkles, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

const AboutPage = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.3 });
  const [manifestoRef, manifestoVisible] = useScrollReveal({ threshold: 0.2 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.1 });

  const timeline = [
    {
      year: "2015",
      title: "Ξεκίνημα στα Ιωάννινα",
      description: "Η πρώτη καντίνα άνοιξε στην Αβέρωφ 60. Εκεί άρχισε όλο.",
    },
    {
      year: "2018",
      title: "Επέκταση στο Περιστέρι",
      description: "Η Βρωμιάρα έφτασε στην Αθήνα.",
    },
    {
      year: "2020",
      title: "Πασαλιμάνι & Ν. Φιλαδέλφεια",
      description: "Δύο νέα spots άνοιξαν τις πόρτες τους.",
    },
    {
      year: "2023",
      title: "Θεσσαλονίκη",
      description: "Η επέκταση στη Βόρεια Ελλάδα.",
    },
  ];

  const values = [
    {
      icon: <Flame className="text-yellow-400" size={32} />,
      title: "SOUS VIDE MASTERS",
      description: "16 ώρες σιγομαγειρέματος για την τέλεια τρυφερότητα.",
      color: "yellow",
    },
    {
      icon: <Heart className="text-pink-500" size={32} />,
      title: "HOMEMADE EVERYTHING",
      description: "Όλες οι σάλτσες φτιαγμένες από τα χεράκια μας.",
      color: "pink",
    },
    {
      icon: <Clock className="text-yellow-400" size={32} />,
      title: "SOLD OUT CULTURE",
      description: "Όταν τελειώνει, τελείωσε. Αυτό σημαίνει ποιότητα.",
      color: "yellow",
    },
    {
      icon: <MapPin className="text-pink-500" size={32} />,
      title: "STREET CULTURE",
      description: "Πιστοί στις ρίζες μας. Στο δρόμο, για το δρόμο.",
      color: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white" data-testid="about-page">
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/logos/brand-manifesto.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-aurora opacity-40" />
        
        {/* Floating sparkles */}
        <div className="absolute top-20 left-20 animate-float opacity-30">
          <Sparkles className="text-yellow-400" size={40} />
        </div>
        <div className="absolute bottom-20 right-20 animate-float delay-500 opacity-30">
          <Heart className="text-pink-500" size={36} />
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img
            src="/images/logos/vromiara-logo-truly-transparent.png"
            alt="VRMR"
            className="h-32 md:h-44 w-auto mx-auto mb-8 drop-shadow-2xl animate-float"
          />
          <div className="inline-block mb-4">
            <span className="badge-yellow">🔥 Since 2015</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 graffiti-text-glow mb-4">
            ΛΙΓΑ ΠΡΑΓΜΑΤΑ ΓΙΑ ΕΜΑΣ
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Η αντίφαση ονόματος και ποιότητας...
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section ref={manifestoRef} className="py-24 bg-black relative" data-testid="manifesto-full">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className={`glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${manifestoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/4 w-20 h-7 bg-gradient-to-r from-yellow-400/60 to-yellow-400/40 transform -rotate-6 rounded" />
            <div className="absolute -top-2 right-1/3 w-16 h-6 bg-gradient-to-r from-pink-500/60 to-pink-500/40 transform rotate-3 rounded" />
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              WE ARE NOT JUST A SHOP...
            </h2>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Οι Καντίνες που η <strong className="text-yellow-400">πανσέτα σιγομαγειρεύεται 16 ώρες</strong> και ακολουθεί, πιστά, 
                το στήθος φιλέτο, όπως και το μπιφτέκι, με την τεχνική <strong className="text-pink-500">SOUS VIDE</strong>.
              </p>
              <p>
                Όλες οι σάλτσες μαγειρεμένες και φτιαγμένες από τα χεράκια μας, με δικές μας συνταγές για να 
                γνωρίζουμε και να ξέρετε ακριβώς τι σερβίρουμε και τι τρώτε.
              </p>
              <p>
                Λάχανο με καρότο πάντρεμα σε συνταγή μας, φρέσκια ρόκα, παρμεζάνα και τηγανητό κρεμμύδι, 
                μπέικον, αυγά μάτια και μπόλικα καλούδια...
              </p>
              <p>
                <strong className="text-yellow-400">Ψωμί</strong> που αν δεν του φερθείς όμορφα στραβώνει επειδή είναι το μαλακότερο στην κατηγορία του...
              </p>
              <p className="text-gray-400 italic border-l-4 border-pink-500/50 pl-4">
                Για αυτό τον λόγο υπάρχει περίπτωση να μην προλάβεις σήμερα, αλλά και αύριο μέρα είναι, 
                για κάτι που απαιτεί τόσο κόπο για να ικανοποιήσει τον ουρανίσκο σου και να ζεστάνει 
                το στομάχι σου και φτιάχνεται μέσα σε λίγα τετραγωνικά...
              </p>
              <p className="text-xl font-bold text-white mt-8 pt-6 border-t border-yellow-500/20">
                Κύριες και κύριοι αυτή είναι <span className="gradient-text">Η Βρωμιάρα</span> - The Gourmet Street Food αυτοί είμαστε 
                και σας ευχαριστούμε για την κατανόηση και την αγάπη που μας δείχνετε για αυτό που φτιάχνουμε για εσάς!!!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-zinc-950 relative overflow-hidden" data-testid="values-section">
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-black text-center text-white mb-16 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            WHAT WE <span className="gradient-text-animated">STAND FOR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl p-6 text-center hover-lift group transition-all duration-500 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-block p-4 rounded-xl mb-4 transition-colors ${
                  value.color === 'yellow' ? 'bg-yellow-400/10 group-hover:bg-yellow-400/20' : 'bg-pink-500/10 group-hover:bg-pink-500/20'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                
                {/* Bottom accent */}
                <div className={`w-12 h-1 mx-auto mt-4 rounded-full transition-all duration-300 ${
                  value.color === 'yellow' ? 'bg-yellow-400/30 group-hover:bg-yellow-400' : 'bg-pink-500/30 group-hover:bg-pink-500'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 bg-black relative" data-testid="timeline-section">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-black text-center text-white mb-16 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            OUR <span className="gradient-text-animated">JOURNEY</span>
          </h2>
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-pink-500 to-yellow-400" />
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 transition-all duration-700 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${timelineVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-black" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}>
                  <div className={`glass-card rounded-xl p-6 inline-block ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}>
                    <span className="text-yellow-400 font-black text-3xl block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 graffiti-text">
            READY TO TASTE THE LEGEND?
          </h2>
          <p className="text-black/70 mb-8 text-lg">
            Find your nearest spot and experience the VROMIARA philosophy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/locations"
              className="magnetic-btn bg-black text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2 rounded-lg elevation-4"
            >
              <MapPin size={20} />
              FIND A SPOT
              <ArrowRight size={18} className="ml-1" />
            </Link>
            <a
              href="https://instagram.com/vromiarastreetfood"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn bg-white text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2 rounded-lg elevation-4"
            >
              <Instagram size={20} />
              FOLLOW US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
