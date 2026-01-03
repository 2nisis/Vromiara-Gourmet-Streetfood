import React, { useState } from "react";
import { Flame, Info, Sparkles, ChefHat } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("sandwiches");
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.3 });
  const [menuRef, menuVisible] = useScrollReveal({ threshold: 0.1 });
  const [sousVideRef, sousVideVisible] = useScrollReveal({ threshold: 0.2 });

  const categories = [
    { id: "sandwiches", name: "SANDWICHES", icon: "🥪" },
    { id: "tortillas", name: "ΤΟΡΤΙΓΙΕΣ", icon: "🌯" },
    { id: "burgers", name: "BURGERS", icon: "🍔" },
    { id: "potatoes", name: "ΠΑΤΑΤΕΣ", icon: "🍟" },
    { id: "drinks", name: "ΠΟΤΑ", icon: "🥤" },
  ];

  const menuItems = {
    sandwiches: [
      {
        name: "SANDWICH ΒΡΩΜΙΑΡΑΣ 3",
        description: "Κρέας επιλογής, πατάτες τηγανητές, flakes παρμεζάνας, baby ρόκα, κρεμμύδι τηγανητό και διπλή χειροποίητη sauce γιαουρτιού.",
        price: "5.50",
        tags: ["signature", "bestseller"],
      },
      {
        name: "SANDWICH CYKA",
        description: "Κρέας επιλογής, πατάτες τηγανητές, flakes παρμεζάνας, λάχανο-καρότο, χειροποίητη BBQ sauce και χειροποίητη sauce γιαουρτιού.",
        price: "5.50",
        tags: ["bestseller"],
      },
      {
        name: "SANDWICH OLD SKOOL",
        description: "Κρέας επιλογής, πατάτες τηγανητές, ντομάτα και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["classic"],
      },
      {
        name: "SANDWICH OLD SKOOL 2",
        description: "Κρέας επιλογής, μαγιονέζα βρωμιάρας, ντομάτα, ρόκα, παρμεζάνα και BBQ sauce.",
        price: "5.00",
        tags: ["classic"],
      },
      {
        name: "SANDWICH SKINNY PLUS PLUS",
        description: "Πανσέτα, cheddar sauce βρωμιάρας, παρμεζάνα, ρόκα, λάχανο, καρότο και μαγιονέζα βρωμιάρας.",
        price: "5.50",
        tags: ["signature"],
      },
      {
        name: "SANDWICH ΚΑΒΟΥΡΟΠΑΡΤΥ",
        description: "Κοτόπουλο φιλέτο στήθος, πατάτες τηγανητές, flakes παρμεζάνας, αυγό τηγανητό, ντομάτα, baby ρόκα, pesto πιπεριάς φλωρίνης και μαγιονέζα βρωμιάρας.",
        price: "6.50",
        tags: ["loaded"],
      },
      {
        name: "SANDWICH SPECIAL ΠΑΝΣΕΤΑ",
        description: "Διπλή πανσέτα χοιρινή, πατάτες τηγανητές, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό, pesto φέτας και χειροποίητη sauce γιαουρτιού.",
        price: "7.00",
        tags: ["signature", "premium"],
      },
      {
        name: "SANDWICH SPECIAL ΚΟΤΟΠΟΥΛΟ",
        description: "Διπλό κοτόπουλο φιλέτο στήθος, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό και διπλή cheddar sauce βρωμιάρας.",
        price: "7.00",
        tags: ["sous-vide", "premium"],
      },
      {
        name: "SANDWICH ΤΗΛΕΟΠΤΙΚΟ",
        description: "Χειροποίητο μπιφτέκι από ανάμεικτο (μοσχαρίσιο και χοιρινό) κιμά 160gr, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, cheddar sauce βρωμιάρας και μαγιονέζα βρωμιάρας.",
        price: "7.00",
        tags: ["sous-vide", "premium"],
      },
      {
        name: "SANDWICH ΥΠΕΡΔΙΑΓΑΛΑΞΙΑΚΟ",
        description: "Χειροποίητο μπιφτέκι 160gr, μπέικον, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό, αυγό τηγανητό, cheddar sauce βρωμιάρας, μαγιονέζα βρωμιάρας.",
        price: "8.50",
        tags: ["loaded", "premium"],
      },
      {
        name: "HOT DOG",
        description: "Λουκάνικο τύπου Φρανκφούρτης Θράκης, λάχανο-καρότο, κέτσαπ, μουστάρδα και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["classic"],
      },
      {
        name: "SANDWICH VEGETARIAN",
        description: "Μανιτάρια porcini, flakes παρμεζάνας, πατάτες τηγανητές, ντομάτα, baby ρόκα, pesto πιπεριάς φλωρίνης και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["vegetarian"],
      },
    ],
    tortillas: [
      {
        name: "ΤΟΡΤΙΓΙΑ ΒΡΩΜΙΑΡΑΣ 3",
        description: "Κρέας επιλογής, πατάτες τηγανητές, flakes παρμεζάνας, baby ρόκα, κρεμμύδι τηγανητό και διπλή χειροποίητη sauce γιαουρτιού.",
        price: "5.50",
        tags: ["signature", "bestseller"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ CYKA",
        description: "Κρέας επιλογής, πατάτες τηγανητές, flakes παρμεζάνας, λάχανο-καρότο, χειροποίητη BBQ sauce και χειροποίητη sauce γιαουρτιού.",
        price: "5.50",
        tags: ["bestseller"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ OLD SKOOL",
        description: "Κρέας επιλογής, πατάτες τηγανητές, ντομάτα και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["classic"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ SKINNY PLUS PLUS",
        description: "Πανσέτα, cheddar sauce βρωμιάρας, παρμεζάνα, ρόκα, λάχανο, καρότο και μαγιονέζα βρωμιάρας.",
        price: "5.50",
        tags: ["signature"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ ΚΑΒΟΥΡΟΠΑΡΤΥ",
        description: "Κοτόπουλο φιλέτο στήθος, πατάτες τηγανητές, flakes παρμεζάνας, αυγό τηγανητό, ντομάτα, baby ρόκα, pesto πιπεριάς φλωρίνης και μαγιονέζα βρωμιάρας.",
        price: "6.50",
        tags: ["loaded"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ SPECIAL ΠΑΝΣΕΤΑ",
        description: "Διπλή πανσέτα χοιρινή, πατάτες τηγανητές, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό, pesto φέτας και χειροποίητη sauce γιαουρτιού.",
        price: "7.00",
        tags: ["signature", "premium"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ SPECIAL ΚΟΤΟΠΟΥΛΟ",
        description: "Διπλό κοτόπουλο φιλέτο στήθος, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό και διπλή cheddar sauce βρωμιάρας.",
        price: "7.00",
        tags: ["sous-vide", "premium"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ ΤΗΛΕΟΠΤΙΚΗ",
        description: "Χειροποίητο μπιφτέκι από ανάμεικτο κιμά 160gr, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, cheddar sauce βρωμιάρας και μαγιονέζα βρωμιάρας.",
        price: "7.00",
        tags: ["sous-vide", "premium"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ ΥΠΕΡΔΙΑΓΑΛΑΞΙΑΚΗ",
        description: "Χειροποίητο μπιφτέκι 160gr, μπέικον, πατάτες τηγανητές, flakes παρμεζάνας, ντομάτα, baby ρόκα, κρεμμύδι τηγανητό, αυγό τηγανητό, cheddar sauce βρωμιάρας, μαγιονέζα βρωμιάρας.",
        price: "8.50",
        tags: ["loaded", "premium"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ HOT DOG",
        description: "Λουκάνικο τύπου Φρανκφούρτης Θράκης, λάχανο-καρότο, κέτσαπ, μουστάρδα και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["classic"],
      },
      {
        name: "ΤΟΡΤΙΓΙΑ VEGETARIAN",
        description: "Μανιτάρια porcini, flakes παρμεζάνας, πατάτες τηγανητές, ντομάτα, baby ρόκα, pesto πιπεριάς φλωρίνης και μαγιονέζα βρωμιάρας.",
        price: "5.00",
        tags: ["vegetarian"],
      },
    ],
    burgers: [
      {
        name: "VLACHIKO BURGER",
        description: "Διπλό μοσχαρίσιο μπιφτέκι, κρέμα μετσοβόνε βρωμιάρας, μαύρο σκόρδο, iceberg, μπέικον, καραμελωμένα κρεμμύδια και μαγιονέζα βρωμιάρας.",
        price: "8.50",
        tags: ["signature", "bestseller"],
      },
      {
        name: "ΜΕΤΑΣΥΝΑΥΛΙΑΚΟ BURGER",
        description: "Φιλέτο κοτόπουλο πανέ, μπέικον, iceberg, παρμεζάνα, τηγανητό κρεμμύδι, cheddar βρωμιάρας και μαγιονέζα βρωμιάρας.",
        price: "8.50",
        tags: ["new", "premium"],
      },
    ],
    potatoes: [
      {
        name: "ΠΑΤΑΤΕΣ ΤΗΓΑΝΗΤΕΣ",
        description: "Μερίδα φρέσκες πατάτες τηγανητές.",
        price: "4.00",
        tags: ["classic"],
      },
      {
        name: "ΠΑΤΑΤΕΣ ΜΕ CHEDDAR & ΜΠΕΙΚΟΝ",
        description: "Μερίδα πατάτες τηγανητές με Cheddar Sauce Βρωμιάρας και μπέικον.",
        price: "6.00",
        tags: ["loaded"],
      },
      {
        name: "ΚΟΥΒΑΔΑΚΙ",
        description: "Μερίδα πατάτες με κρέας επιλογής και μαγιονέζα βρωμιάρας.",
        price: "7.00",
        tags: ["signature", "loaded"],
      },
      {
        name: "POP N FRIES",
        description: "Pop corn φιλέτο κοτόπουλο με πατάτες τηγανητές φρέσκες και μαγιονέζα βρωμιάρας.",
        price: "6.50",
        tags: ["new"],
      },
    ],
    drinks: [
      { name: "Coca-Cola 330ml", price: "2.00", description: "Κλασική Coca-Cola" },
      { name: "Coca-Cola Zero 330ml", price: "2.00", description: "Χωρίς ζάχαρη" },
      { name: "Fanta Πορτοκαλάδα 330ml", price: "2.00", description: "Πορτοκαλάδα" },
      { name: "Fanta Λεμονάδα 330ml", price: "2.00", description: "Λεμονάδα" },
      { name: "Sprite 330ml", price: "2.00", description: "Sprite" },
      { name: "Νερό 500ml", price: "0.50", description: "Εμφιαλωμένο νερό" },
      { name: "Άλφα 330ml", price: "2.50", description: "Μπύρα Άλφα" },
    ],
  };

  const getTagStyle = (tag) => {
    const styles = {
      signature: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30",
      bestseller: "bg-pink-500/20 text-pink-500 border-pink-500/30",
      "sous-vide": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      premium: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      loaded: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      new: "bg-green-500/20 text-green-400 border-green-500/30",
      classic: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      vegetarian: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    };
    return styles[tag] || styles.classic;
  };

  return (
    <div className="min-h-screen bg-black text-white" data-testid="menu-page">
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-zinc-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/food/menu-board.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-aurora opacity-40" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <ChefHat className="text-yellow-400" size={40} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float delay-300 opacity-30">
          <Sparkles className="text-pink-500" size={32} />
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4">
            <span className="badge-pink">🔥 Fresh Daily</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 graffiti-text-glow mb-4">
            THE MENU
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Πανσέτα σιγομαγειρεμένη 16 ώρες • Sous vide τεχνική • Σπιτικές σάλτσες από τα χεράκια μας
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section ref={menuRef} className="py-16 relative">
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Category Tabs */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-testid={`category-${cat.id}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`px-6 py-3 font-bold text-lg rounded-lg transition-all duration-300 ease-smooth ${
                  activeCategory === cat.id
                    ? "bg-yellow-400 text-black shadow-lg glow-yellow scale-105"
                    : "glass-card text-white hover:bg-zinc-800 hover:scale-102"
                }`}
              >
                <span className="mr-2 text-xl">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="menu-items">
            {menuItems[activeCategory]?.map((item, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl p-6 group hover-lift transition-all duration-500 ${menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                data-testid={`menu-item-${index}`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-black gradient-text flex items-center">
                    €{item.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105 ${getTagStyle(tag)}`}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Corner decoration */}
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/30 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className={`mt-12 glass-card-pink rounded-xl p-6 relative overflow-hidden transition-all duration-700 delay-500 ${menuVisible ? 'opacity-100' : 'opacity-0'}`} data-testid="menu-info">
            {/* Decorative tape */}
            <div className="absolute -top-2 left-1/4 w-16 h-6 bg-gradient-to-r from-pink-500/60 to-pink-500/40 transform -rotate-6 rounded" />
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Info className="text-pink-500 flex-shrink-0" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg">ΣΗΜΑΝΤΙΚΟ</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Το ψωμί μας είναι το πιο μαλακό στην κατηγορία του - αν δεν του φερθείς όμορφα, στραβώνει! 
                  Υπάρχει περίπτωση να μην προλάβεις σήμερα, αλλά αύριο μέρα είναι. 
                  <strong className="text-yellow-400 ml-1">Check the SOLD OUT sign & Instagram story!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sous Vide Info */}
      <section ref={sousVideRef} className="py-20 bg-zinc-950 relative overflow-hidden" data-testid="sousvide-section">
        {/* Background elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl" />
        
        <div className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${sousVideVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block p-4 bg-yellow-400/10 rounded-full mb-6 animate-float">
            <Flame className="text-yellow-400" size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ΤΙ ΕΙΝΑΙ ΤΟ <span className="gradient-text-animated">SOUS VIDE</span>;
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Η τεχνική sous vide (&quot;κάτω από κενό&quot; στα γαλλικά) μαγειρεύει το κρέας σε ακριβώς ελεγχόμενη 
            θερμοκρασία για ώρες, δημιουργώντας τρυφερότητα και γεύση που δεν μπορείς να πετύχεις αλλιώς. 
            Η πανσέτα μας σιγομαγειρεύεται για <strong className="text-yellow-400">16 ολόκληρες ώρες</strong>.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400">16</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Hours</div>
            </div>
            <div className="text-center border-x border-yellow-400/20">
              <div className="text-3xl font-black text-pink-500">58°</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Celsius</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Tender</div>
            </div>
          </div>
          
          <div className="inline-flex gap-3">
            <span className="tag-street bg-yellow-400/10 text-yellow-400">#SOUSVIDE</span>
            <span className="tag-street bg-pink-500/10 text-pink-500">#VRMR</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
