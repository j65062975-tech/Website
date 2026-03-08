// producten
let products = [

    // ===== INJECTIONS - ZYCARE BRAND =====
    { 
      id: 1, 
      name: "Masteron Propionate 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "coming soon",
      image: "/img/products/masteron front side view.jpg",
      images: [
        "/img/products/masteron front side view.jpg",
        "/img/products/masteron back side view.jpg"
      ] 
    },
    { 
      id: 2, 
      name: "Deca 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/nanrdolone deca front view vials.jpg",
      images: [
        "/img/products/nanrdolone deca front view vials.jpg",
        "/img/products/nandrolone deca back side view.jpg"
      ] 
    },
    { 
      id: 4, 
      name: "Testosteron Propionate 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/test p front view vials.jpg",
      images: [
        "/img/products/test p front view vials.jpg",
        "/img/products/test p front view.jpg",
        "/img/products/test p vials front view.jpg"
      ] 
    },
    { 
      id: 5, 
      name: "Testosteron Cypionate 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "coming soon",
      image: "/img/products/test c front view vials 2.jpg",
      images: [
        "/img/products/test c front view vials 2.jpg",
        "/img/products/test c front view vials.jpg",
        "/img/products/test c front view.jpg"
      ] 
    },
    { 
      id: 6, 
      name: "Testosteron Enanthate 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/test e front view.jpg",
      images: [
        "/img/products/test  back ide view.jpg",
        "/img/products/test e front side view.jpg",
        "/img/products/test e front view.jpg"
      ] 
    },
    { 
      id: 7, 
      name: "Boldenon 250mg", 
      price: "43,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/boldenon-250mg.jpg",
      images: [
        "/img/products/boldenon-250mg.jpg",
        "/img/products/boldenon-250mg-2.jpg"
      ] 
    },
    { 
      id: 8, 
      name: "Trenbolon Enanthate 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/tren e front view.jpg",
      images: [
        "/img/products/tren e front view.jpg",
        "/img/products/tren e vial front viwe.jpg",
        "/img/products/tren e vials .jpg",
        "/img/products/tren e backage back side view.jpg"
      ] 
    },
    { 
      id: 9, 
      name: "NPP 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      availability: "coming soon",
      image: "/img/products/NANDRO-ZYPRO-100mg.jpg",
      images: [
        "/img/products/NANDRO-ZYPRO-100mg.jpg",
        "/img/products/NANDRO-ZYPRO-100mg-2.jpg"
      ] 
    },

    // ===== TABLETS - ZYCARE BRAND =====
    { 
      id: 11, 
      name: "Evolve Anavar 10 mg", 
      price: "44,95", 
      category: "tablets", 
      brand: "Evolve", 
      availability: "available",
      image: "/img/products/Anavar.jpeg",
      images: [
        "/img/products/Anavar.jpeg"
      ] 
    },
    { 
      id: 12, 
      name: "Winstrol 10mg", 
      price: "30,00", 
      category: "tablets", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/winstrtol front side view.jpg",
      images: [
        "/img/products/winstrtol front side view.jpg"
      ] 
    },
    { 
      id: 13, 
      name: "Evolve biolabs Tbol 25mg", 
      price: "35,00", 
      category: "tablets", 
      brand: "Evolve", 
      availability: "available",
      image: "/img/products/Turinabol.jpeg",
      images: [
        "/img/products/Turinabol.jpeg"
      ] 
    },
    { 
      id: 14, 
      name: "Anadrol 50mg",
      price: "39,50", 
      category: "tablets", 
      brand: "Zycare", 
      availability: "available",
      image: "/img/products/oxymethelone front side view.jpg",
      images: [
        "/img/products/oxymethelone front side view.jpg",
        "/img/products/oxymethelone back side view.jpg"
      ] 
    },

    // ===== LIBIDO - ZYCARE BRAND =====
    { 
      id: 20, 
      name: "Cenforce-100 mg", 
      price: "10,00", 
      category: "libido", 
      brand: "Zycare", 
      availability: "available",
      description: "1 strip costs 10 euro's",
      image: "/img/products/Cenforce 100 mg.jpeg",
      images: [
        "/img/products/Cenforce 100 mg.jpeg"
      ] 
    },
    { 
      id: 21, 
      name: "Cenforce-D 100 + 60mg", 
      price: "10,00", 
      category: "libido", 
      brand: "Zycare", 
      availability: "available",
      description: "1 strip costs 10 euro's",
      image: "/img/products/Cenforce d.jpeg",
      images: [
        "/img/products/Cenforce d.jpeg"
      ] 
    },
    { 
      id: 22, 
      name: "Careforce FM 100 mg", 
      price: "10,00", 
      category: "libido", 
      brand: "Zycare", 
      availability: "available",
      description: "1 strip costs 10 euro's",
      image: "/img/products/careforce fm.jpeg",
      images: [
        "/img/products/careforce fm.jpeg"
      ] 
    },
    { 
      id: 24, 
      name: "Cenforce 200 mg", 
      price: "10,00", 
      category: "libido", 
      brand: "Zycare", 
      availability: "available",
      description: "1 strip costs 10 euro's",
      image: "/img/products/Cenforce 200.jpeg",
      images: [
        "/img/products/Cenforce 200.jpeg",
        "/img/products/Cenforce 200 mg 2.jpeg"
      ] 
    }
];
