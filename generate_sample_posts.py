#!/usr/bin/env python3
"""
Script to generate sample advertisement posts for testing
"""

import random
from datetime import datetime

# Product information for posts
products = [
    {
        "name": "Testosteron Enanthate 250mg",
        "description": "Premium quality testosterone enanthate for muscle growth and strength enhancement",
        "price": "€39.95",
        "url": "https://yourwebsite.com/product-detail.html?id=test-enanthate",
        "benefits": [
            "Promotes significant muscle mass gains",
            "Enhances strength and power output",
            "Improves recovery time between workouts",
            "Boosts libido and sexual performance",
            "Clinically tested for purity and safety"
        ],
        "cta": "Maximize your muscle-building potential with Testosteron Enanthate 250mg. The gold standard for testosterone replacement therapy and performance enhancement."
    },
    {
        "name": "Testosteron Propionate 100mg",
        "description": "Fast-acting testosterone propionate for rapid muscle gains and improved recovery",
        "price": "€39.95",
        "url": "https://yourwebsite.com/product-detail.html?id=test-propionate",
        "benefits": [
            "Rapid onset of action for quick results",
            "Enhanced muscle hardness and definition",
            "Improved nitrogen retention",
            "Faster recovery between training sessions",
            "Pharmaceutical grade quality assurance"
        ],
        "cta": "Experience fast-acting results with Testosteron Propionate 100mg. Perfect for athletes seeking immediate performance improvements."
    },
    {
        "name": "Deca NPP 100mg",
        "description": "Nandrolone phenylpropionate for joint health and significant muscle mass gains",
        "price": "€39.95",
        "url": "https://yourwebsite.com/product-detail.html?id=deca-npp",
        "benefits": [
            "Exceptional joint pain relief",
            "Significant muscle mass increases",
            "Improved collagen synthesis",
            "Enhanced red blood cell production",
            "Reduced recovery time"
        ],
        "cta": "Build massive muscle while protecting your joints with Deca NPP 100mg. The perfect choice for bulking cycles."
    },
    {
        "name": "Boldenon 250mg",
        "description": "Equipoise for increased nitrogen retention and enhanced endurance",
        "price": "€43.95",
        "url": "https://yourwebsite.com/product-detail.html?id=boldenon",
        "benefits": [
            "Improved endurance and stamina",
            "Enhanced nitrogen retention",
            "Quality muscle gains without water retention",
            "Increased red blood cell production",
            "Minimal estrogenic side effects"
        ],
        "cta": "Boost your endurance and muscle quality with Boldenon 250mg. Ideal for athletes seeking sustainable performance gains."
    },
    {
        "name": "Trenbolone Enanthate 100mg",
        "description": "Powerful anabolic compound for extreme muscle hardness and fat loss",
        "price": "€39.95",
        "url": "https://yourwebsite.com/product-detail.html?id=tren-enanthate",
        "benefits": [
            "Extreme muscle hardness and definition",
            "Significant fat loss during cutting cycles",
            "Enhanced protein synthesis",
            "Increased IGF-1 production",
            "No aromatization to estrogen"
        ],
        "cta": "Achieve competition-ready conditioning with Trenbolone Enanthate 100mg. The most powerful cutting agent available."
    },
    {
        "name": "Anadrol 50mg",
        "description": "Oxymetholone for rapid strength increases and red blood cell production",
        "price": "€39.50",
        "url": "https://yourwebsite.com/product-detail.html?id=anadrol",
        "benefits": [
            "Rapid strength and power increases",
            "Enhanced red blood cell production",
            "Significant muscle mass gains",
            "Improved oxygen transport",
            "Fast-acting results"
        ],
        "cta": "Experience explosive strength gains with Anadrol 50mg. The ultimate choice for rapid mass building."
    },
    {
        "name": "Winstrol 10mg",
        "description": "Stanozolol for cutting cycles and enhanced muscle definition",
        "price": "€30.00",
        "url": "https://yourwebsite.com/product-detail.html?id=winstrol",
        "benefits": [
            "Enhanced muscle definition and hardness",
            "Fat loss during cutting cycles",
            "Improved vascularity",
            "No water retention",
            "Increased strength and endurance"
        ],
        "cta": "Reveal your true muscle definition with Winstrol 10mg. Perfect for achieving a lean, dry physique."
    },
    {
        "name": "Proviron 25mg",
        "description": "Mesterolone for increased free testosterone levels and improved libido",
        "price": "€45.00",
        "url": "https://yourwebsite.com/product-detail.html?id=proviron",
        "benefits": [
            "Increases free testosterone levels",
            "Enhances libido and sexual performance",
            "Reduces estrogenic side effects",
            "Improves muscle hardness",
            "Boosts motivation and aggression"
        ],
        "cta": "Optimize your hormone profile with Proviron 25mg. The perfect adjunct to any steroid cycle."
    }
]

def generate_sample_post():
    """Generate a sample advertisement post"""
    # Select a random product
    product = random.choice(products)
    
    # Create post content
    post_title = f"[Advertisement] {product['name']} - {product['description']}"
    post_content = f"""
## {product['name']}

{product['description']}

**Price:** {product['price']}

[View Product]({product['url']})

---

*This is an automated post from PowergenX Supplements. All our products are exclusively for adults 18+.*

**Why Choose {product['name']}?**

""" + "\n".join([f"✓ {benefit}" for benefit in product['benefits']]) + """

**FAQ:**
- Shipping: Fast delivery within 1-2 business days (NL) or 3-5 business days (international)
- Payment: We accept cryptocurrency payments (Bitcoin, Ethereum, Litecoin) via our secure payment portal
- Quality: All our products are laboratory tested for purity and potency

For questions, contact us at websitepowergenx@proton.me

---

*{product['cta']}*
""".format(product=product)
    
    return post_title, post_content

def main():
    """Generate and display sample posts for all products"""
    print("Sample Advertisement Posts Generator")
    print("=" * 40)
    print()
    
    for i, product in enumerate(products, 1):
        print(f"Product {i}: {product['name']}")
        print("-" * 30)
        
        title, content = generate_sample_post()
        print(f"Title: {title}")
        print("\nContent:")
        print(content)
        print("\n" + "="*50 + "\n")

if __name__ == "__main__":
    main()