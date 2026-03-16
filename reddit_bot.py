#!/usr/bin/env python3
"""
Reddit Bot for PowergenX Supplements
This bot can post advertisements to Reddit forums and interact with users
"""

import time
import random
import logging
from datetime import datetime
import threading
import json

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class RedditBot:
    def __init__(self):
        """Initialize the Reddit bot with configuration"""
        # Bot configuration
        self.subreddits = ['supplements', 'health', 'fitness', 'nutrition']
        self.posting_interval = 3600  # 1 hour in seconds
        self.last_post_time = 0
        self.is_running = False
        self.bot_thread = None
        
        # Product information for posts (one from each category)
        self.products = [
            {
                "name": "NeuroEnhance Cognitive Booster",
                "description": "Advanced nootropic blend to enhance focus, memory, and mental clarity",
                "price": "€49.95",
                "url": "https://yourwebsite.com/product-detail.html?id=cognitive1"
            },
            {
                "name": "Metabolic Burn Fat Loss Capsules",
                "description": "Scientifically formulated capsules to accelerate fat burning and metabolism",
                "price": "€42.95",
                "url": "https://yourwebsite.com/product-detail.html?id=metabolic1"
            },
            {
                "name": "JointFlex Mobility Complex",
                "description": "Premium joint support formula for improved mobility and reduced inflammation",
                "price": "€37.95",
                "url": "https://yourwebsite.com/product-detail.html?id=joint1"
            }
        ]
        
        # Common questions and responses
        self.faq_responses = {
            "shipping": "We offer fast shipping within 1-2 business days in the Netherlands and 3-5 business days internationally.",
            "payment": "We accept cryptocurrency payments (Bitcoin, Ethereum, Litecoin) via our secure payment portal. Visit our Crypto Payment page for more details.",
            "quality": "All our products are laboratory tested for purity and potency. We work with certified suppliers only.",
            "age": "Our products are exclusively for adults 18 years and older.",
            "contact": "You can reach us at websitepowergenx@proton.me or via WhatsApp. We typically respond within 24 hours."
        }
        
        logger.info("Reddit Bot initialized")
    
    def start(self):
        """Start the bot"""
        if self.is_running:
            logger.info("Bot is already running")
            return
        
        self.is_running = True
        logger.info("Reddit Bot started")
        
        # Start the bot in a separate thread
        self.bot_thread = threading.Thread(target=self._run_bot, daemon=True)
        self.bot_thread.start()
    
    def stop(self):
        """Stop the bot"""
        self.is_running = False
        logger.info("Reddit Bot stopped")
    
    def _run_bot(self):
        """Main bot loop that runs in a separate thread"""
        while self.is_running:
            try:
                # Calculate time to wait
                current_time = time.time()
                time_since_last_post = current_time - self.last_post_time
                time_to_wait = max(0, self.posting_interval - time_since_last_post)
                
                # Wait for the next post time
                if time_to_wait > 0:
                    logger.info(f"Waiting {time_to_wait:.0f} seconds until next post")
                    time.sleep(min(time_to_wait, 60))  # Check every minute if bot should stop
                
                # Post if it's time and bot is still running
                if self.is_running and time.time() - self.last_post_time >= self.posting_interval:
                    self.post_advertisement()
                    self.last_post_time = time.time()
                    
            except Exception as e:
                logger.error(f"Error in bot loop: {e}")
                time.sleep(60)  # Wait a minute before retrying
    
    def post_advertisement(self):
        """Post an advertisement to a random subreddit"""
        # Select a random subreddit
        subreddit = random.choice(self.subreddits)
        
        # Select a random product
        product = random.choice(self.products)
        
        # Create post content
        post_title = f"[Advertisement] {product['name']} - {product['description']}"
        post_content = f"""
## {product['name']}

{product['description']}

**Price:** {product['price']}

[View Product]({product['url']})

---

*This is an automated post from PowergenX Supplements. All our products are exclusively for adults 18+.*

**FAQ:**
- Shipping: Fast delivery within 1-2 business days (NL) or 3-5 business days (international)
- Payment: We accept cryptocurrency payments (Bitcoin, Ethereum, Litecoin) via our secure payment portal
- Quality: All products are laboratory tested for purity and potency

For questions, contact us at websitepowergenx@proton.me
        """
        
        logger.info(f"Posting to r/{subreddit}: {post_title}")
        
        # In a real implementation, this would make an API call to Reddit
        # For now, we'll just simulate the posting
        result = self._simulate_post(subreddit, post_title, post_content)
        return result
    
    def _simulate_post(self, subreddit, title, content):
        """Simulate posting to Reddit (in a real implementation, this would use Reddit API)"""
        logger.info(f"""
=== REDDIT POST SIMULATION ===
Subreddit: r/{subreddit}
Title: {title}
Content:
{content}
============================
        """)
        
        # Simulate successful post
        post_id = "t3_" + "".join(random.choices("abcdefghijklmnopqrstuvwxyz0123456789", k=7))
        url = f"https://reddit.com/r/{subreddit}/comments/{post_id}"
        
        return {
            "success": True,
            "postId": post_id,
            "url": url
        }
    
    def manual_post(self):
        """Manual post function"""
        logger.info("Manual post initiated...")
        result = self.post_advertisement()
        logger.info("Manual post completed!")
        return result
    
    def respond_to_comments(self, comment):
        """Respond to comments (simulated)"""
        lower_comment = comment.lower()
        
        # Check for FAQ keywords
        for keyword, response in self.faq_responses.items():
            if keyword in lower_comment:
                return response
        
        # Default response
        return "Thanks for your comment! For specific questions about our products, please visit our website or contact us directly."
    
    def monitor_mentions(self):
        """Monitor mentions (simulated)"""
        # In a real implementation, this would check for mentions of the bot
        # For now, we'll just log that monitoring is happening
        logger.info("Monitoring for mentions...")
    
    def get_status(self):
        """Get current bot status"""
        return {
            "is_running": self.is_running,
            "last_post_time": self.last_post_time,
            "last_post_time_formatted": datetime.fromtimestamp(self.last_post_time).strftime('%Y-%m-%d %H:%M:%S') if self.last_post_time > 0 else "No activity yet"
        }

def main():
    """Main function to run the bot"""
    print("PowergenX Reddit Bot")
    print("====================")
    print("Commands:")
    print("  start - Start the bot")
    print("  stop - Stop the bot")
    print("  post - Make a manual post")
    print("  status - Show bot status")
    print("  quit - Exit the program")
    print()
    
    bot = RedditBot()
    
    while True:
        try:
            command = input("\nEnter command: ").strip().lower()
            
            if command == "start":
                bot.start()
                print("Bot started!")
                
            elif command == "stop":
                bot.stop()
                print("Bot stopped!")
                
            elif command == "post":
                result = bot.manual_post()
                print(f"Posted: {result['url']}")
                
            elif command == "status":
                status = bot.get_status()
                print(f"Bot running: {status['is_running']}")
                print(f"Last post: {status['last_post_time_formatted']}")
                
            elif command == "quit":
                bot.stop()
                print("Goodbye!")
                break
                
            else:
                print("Unknown command. Available commands: start, stop, post, status, quit")
                
        except KeyboardInterrupt:
            bot.stop()
            print("\nGoodbye!")
            break
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    main()