// producten
let products = [

    // ===== INJECTIONS - ZYCARE BRAND =====
    { 
      id: 1, 
      name: "DROSTA-ZYLONE 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/masteron front side view.jpg",
      images: [
        "/img/products/masteron front side view.jpg",
        "/img/products/masteron back side view.jpg"
      ] 
    },
    { 
      id: 2, 
      name: "NANDRO-ZYNOATE 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/nanrdolone deca front view vials.jpg",
      images: [
        "/img/products/nanrdolone deca front view vials.jpg",
        "/img/products/nandrolone deca back side view.jpg"
      ] 
    },
    { 
      id: 3, 
      name: "Primozycare 100mg/ml", 
      price: "44,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/primobolon front side view 2.jpg",
      images: [
        "/img/products/primobolon front side view 2.jpg",
        "/img/products/primobolon front side view.jpg",
        "/img/products/primobolon vials.jpg"
      ] 
    },
    { 
      id: 4, 
      name: "TESTO ZYPRO 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/test p front view vials.jpg",
      images: [
        "/img/products/test p front view vials.jpg",
        "/img/products/test p front view.jpg",
        "/img/products/test p vials front view.jpg"
      ] 
    },
    { 
      id: 5, 
      name: "TESTO-ZYCYP 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/test c front view vials 2.jpg",
      images: [
        "/img/products/test c front view vials 2.jpg",
        "/img/products/test c front view vials.jpg",
        "/img/products/test c front view.jpg"
      ] 
    },
    { 
      id: 6, 
      name: "Testo-Zyenate 250mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/test e back side view.jpg",
      images: [
        "/img/products/test e back side view.jpg",
        "/img/products/test e front side view.jpg",
        "/img/products/test e front view.jpg"
      ] 
    },
    { 
      id: 7, 
      name: "TESTO-ZYMIX 250mg", 
      price: "43,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/TESTO-ZYMIX-250mg.jpg",
      images: [
        "/img/products/TESTO-ZYMIX-250mg.jpg",
        "/img/products/TESTO-ZYMIX-250mg-2.jpg"
      ] 
    },
    { 
      id: 8, 
      name: "TREN-ZYACE 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/TREN-ZYACE-100mg.jpg",
      images: [
        "/img/products/TREN-ZYACE-100mg.jpg",
        "/img/products/TREN-ZYACE-100mg-2.jpg"
      ] 
    },
    { 
      id: 9, 
      name: "NANDRO-ZYPRO 100mg", 
      price: "39,95", 
      category: "injections", 
      brand: "Zycare", 
      image: "/img/products/NANDRO-ZYPRO-100mg.jpg",
      images: [
        "/img/products/NANDRO-ZYPRO-100mg.jpg",
        "/img/products/NANDRO-ZYPRO-100mg-2.jpg"
      ] 
    },

    // ===== TABLETS - ZYCARE BRAND =====
    { 
      id: 10, 
      name: "Zycare-Drol 50mg", 
      price: "24,95", 
      category: "tablets", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Drol-50mg.jpg",
      images: [
        "/img/products/Zycare-Drol-50mg.jpg",
        "/img/products/Zycare-Drol-50mg-2.jpg"
      ] 
    },
    { 
      id: 11, 
      name: "Zycare-Var 50mg", 
      price: "29,95", 
      category: "tablets", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Var-50mg.jpg",
      images: [
        "/img/products/Zycare-Var-50mg.jpg",
        "/img/products/Zycare-Var-50mg-2.jpg"
      ] 
    },
    { 
      id: 12, 
      name: "Zycare-Win 10mg", 
      price: "19,95", 
      category: "tablets", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Win-10mg.jpg",
      images: [
        "/img/products/Zycare-Win-10mg.jpg",
        "/img/products/Zycare-Win-10mg-2.jpg"
      ] 
    },
    { 
      id: 13, 
      name: "Zycare-Tbol 25mg", 
      price: "22,95", 
      category: "tablets", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Tbol-25mg.jpg",
      images: [
        "/img/products/Zycare-Tbol-25mg.jpg",
        "/img/products/Zycare-Tbol-25mg-2.jpg"
      ] 
    },
    { 
      id: 14, 
      name: "Zycare-Dian 50mg", 
      price: "27,95", 
      category: "tablets", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Dian-50mg.jpg",
      images: [
        "/img/products/Zycare-Dian-50mg.jpg",
        "/img/products/Zycare-Dian-50mg-2.jpg"
      ] 
    },

    // ===== PEPTIDES - ZYCARE BRAND =====
    { 
      id: 15, 
      name: "Zycare-HGH 10IU", 
      price: "54,95", 
      category: "peptides", 
      brand: "Zycare", 
      image: "/img/products/Zycare-HGH-10IU.jpg",
      images: [
        "/img/products/Zycare-HGH-10IU.jpg",
        "/img/products/Zycare-HGH-10IU-2.jpg"
      ] 
    },
    { 
      id: 16, 
      name: "Zycare-IGF-1 1mg", 
      price: "49,95", 
      category: "peptides", 
      brand: "Zycare", 
      image: "/img/products/Zycare-IGF-1-1mg.jpg",
      images: [
        "/img/products/Zycare-IGF-1-1mg.jpg",
        "/img/products/Zycare-IGF-1-1mg-2.jpg"
      ] 
    },
    { 
      id: 17, 
      name: "Zycare-GHRP-6 5mg", 
      price: "34,95", 
      category: "peptides", 
      brand: "Zycare", 
      image: "/img/products/Zycare-GHRP-6-5mg.jpg",
      images: [
        "/img/products/Zycare-GHRP-6-5mg.jpg",
        "/img/products/Zycare-GHRP-6-5mg-2.jpg"
      ] 
    },
    { 
      id: 18, 
      name: "Zycare-CJC-1295 2mg", 
      price: "39,95", 
      category: "peptides", 
      brand: "Zycare", 
      image: "/img/products/Zycare-CJC-1295-2mg.jpg",
      images: [
        "/img/products/Zycare-CJC-1295-2mg.jpg",
        "/img/products/Zycare-CJC-1295-2mg-2.jpg"
      ] 
    },
    { 
      id: 19, 
      name: "Zycare-Ipamorelin 5mg", 
      price: "44,95", 
      category: "peptides", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Ipamorelin-5mg.jpg",
      images: [
        "/img/products/Zycare-Ipamorelin-5mg.jpg",
        "/img/products/Zycare-Ipamorelin-5mg-2.jpg"
      ] 
    },

    // ===== LIBIDO - ZYCARE BRAND =====
    { 
      id: 20, 
      name: "Cenforce-100 mg", 
      price: "34,95", 
      category: "libido", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Libido-Boost.jpg",
      images: [
        "/img/products/Zycare-Libido-Boost.jpg",
        "/img/products/Zycare-Libido-Boost-2.jpg"
      ] 
    },
    { 
      id: 21, 
      name: "Cenforce-D 100 + 60mg", 
      price: "39,95", 
      category: "libido", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Vigor-Max.jpg",
      images: [
        "/img/products/Zycare-Vigor-Max.jpg",
        "/img/products/Zycare-Vigor-Max-2.jpg"
      ] 
    },
    { 
      id: 22, 
      name: "Careforce FM 100 mg", 
      price: "44,95", 
      category: "libido", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Performance-Plus.jpg",
      images: [
        "/img/products/Zycare-Performance-Plus.jpg",
        "/img/products/Zycare-Performance-Plus-2.jpg"
      ] 
    },
    { 
      id: 23, 
      name: "Zycare-Stamina Formula - coming soon", 
      price: "37,95", 
      category: "libido", 
      brand: "Zycare", 
      image: "/img/products/Zycare-Stamina-Formula.jpg",
      images: [
        "/img/products/Zycare-Stamina-Formula.jpg",
        "/img/products/Zycare-Stamina-Formula-2.jpg"
      ] 
    }
];
