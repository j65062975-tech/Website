#!/usr/bin/env python3
"""
Script to generate sample advertisement posts for testing
"""

import random
from datetime import datetime

# Product information for posts
products = [
    {
        "name": "NeuroEnhance Cognitive Booster",
        "description": "Advanced nootropic blend to enhance focus, memory, and mental clarity",
        "price": "€49.95",
        "url": "https://yourwebsite.com/product-detail.html?id=cognitive1",
        "benefits": [
            "Scientifically formulated with premium nootropics",
            "Enhances focus, concentration, and mental performance",
            "Supports memory formation and recall",
            "Promotes mental clarity and reduces brain fog",
            "100% pure ingredients, laboratory tested for quality"
        ],
        "cta": "Take your cognitive performance to the next level with NeuroEnhance Cognitive Booster. Perfect for students, professionals, and anyone looking to maximize their mental potential."
    },
    {
        "name": "Metabolic Burn Fat Loss Capsules",
        "description": "Scientifically formulated capsules to accelerate fat burning and metabolism",
        "price": "€42.95",
        "url": "https://yourwebsite.com/product-detail.html?id=metabolic1",
        "benefits": [
            "Accelerates fat burning and weight loss",
            "Boosts metabolic rate naturally",
            "Suppresses appetite and reduces cravings",
            "Increases energy levels during dieting",
            "Clinically tested ingredients for safety and efficacy"
        ],
        "cta": "Transform your body composition with Metabolic Burn Fat Loss Capsules. Achieve your weight loss goals faster with science-backed nutrition."
    },
    {
        "name": "JointFlex Mobility Complex",
        "description": "Premium joint support formula for improved mobility and reduced inflammation",
        "price": "€37.95",
        "url": "https://yourwebsite.com/product-detail.html?id=joint1",
        "benefits": [
            "Reduces joint pain and stiffness",
            "Improves flexibility and range of motion",
            "Contains anti-inflammatory compounds",
            "Supports cartilage health and regeneration",
            "Suitable for athletes and active individuals"
        ],
        "cta": "Maintain your active lifestyle with JointFlex Mobility Complex. Say goodbye to joint discomfort and hello to unrestricted movement."
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
    """
    
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