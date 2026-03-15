// Reddit Bot for PowergenX Supplements
// This bot can post advertisements to Reddit forums and interact with users

class RedditBot {
  constructor() {
    // Bot configuration
    this.subreddits = ['supplements', 'health', 'fitness', 'nutrition'];
    this.postingInterval = 3600000; // 1 hour in milliseconds
    this.lastPostTime = 0;
    this.isRunning = false;
    
    // Product information for posts (one from each category)
    this.products = [
      {
        name: "Libido Enhancement Formula",
        description: "Natural formula to boost libido and sexual health",
        price: "€44.95",
        url: "https://yourwebsite.com/product-detail.html?id=libido1"
      },
      {
        name: "Immune Support Injection",
        description: "High-quality injection for immune system support",
        price: "€59.95",
        url: "https://yourwebsite.com/product-detail.html?id=inject1"
      },
      {
        name: "Energy Boosting Tablets",
        description: "Premium tablets for sustained energy and focus",
        price: "€34.95",
        url: "https://yourwebsite.com/product-detail.html?id=tablet1"
      }
    ];
    
    // Common questions and responses
    this.faqResponses = {
      "shipping": "We offer fast shipping within 1-2 business days in the Netherlands and 3-5 business days internationally.",
      "payment": "We accept cryptocurrency payments (Bitcoin, Ethereum, Litecoin) via our secure payment portal. Visit our Crypto Payment page for more details.",
      "quality": "All our products are laboratory tested for purity and potency. We work with certified suppliers only.",
      "age": "Our products are exclusively for adults 18 years and older.",
      "contact": "You can reach us at websitepowergenx@proton.me or via WhatsApp. We typically respond within 24 hours."
    };
  }
  
  // Initialize the bot
  init() {
    console.log("Reddit Bot initialized");
    this.setupEventListeners();
    this.updateUI();
  }
  
  // Update the UI with current bot status
  updateUI() {
    if (typeof document !== 'undefined') {
      const statusElement = document.getElementById('botStatus');
      const activityElement = document.getElementById('lastActivity');
      
      if (statusElement) {
        statusElement.textContent = this.isRunning ? 'Bot is actief' : 'Bot is gestopt';
        statusElement.className = this.isRunning ? 'bot-active' : 'bot-inactive';
      }
      
      if (activityElement && this.lastPostTime > 0) {
        const timeString = new Date(this.lastPostTime).toLocaleString('nl-NL');
        activityElement.textContent = timeString;
      }
    }
  }
  
  // Setup event listeners for the bot controls
  setupEventListeners() {
    // These would be connected to UI elements in the HTML
    if (typeof window !== 'undefined') {
      window.startRedditBot = () => this.start();
      window.stopRedditBot = () => this.stop();
      window.postToReddit = () => this.manualPost();
      window.manualPostToReddit = () => this.manualPost();
    }
  }
  
  // Start the bot
  start() {
    if (this.isRunning) {
      console.log("Bot is already running");
      return;
    }
    
    this.isRunning = true;
    console.log("Reddit Bot started");
    this.updateUI();
    
    // Schedule periodic posting
    this.schedulePosting();
  }
  
  // Stop the bot
  stop() {
    this.isRunning = false;
    console.log("Reddit Bot stopped");
    this.updateUI();
  }
  
  // Schedule periodic posting
  schedulePosting() {
    if (!this.isRunning) return;
    
    const timeSinceLastPost = Date.now() - this.lastPostTime;
    const timeToWait = Math.max(0, this.postingInterval - timeSinceLastPost);
    
    setTimeout(() => {
      if (this.isRunning) {
        this.postAdvertisement();
        this.lastPostTime = Date.now();
        this.updateUI();
        this.schedulePosting(); // Schedule next post
      }
    }, timeToWait);
  }
  
  // Post an advertisement to a random subreddit
  postAdvertisement() {
    // Select a random subreddit
    const subreddit = this.subreddits[Math.floor(Math.random() * this.subreddits.length)];
    
    // Select a random product
    const product = this.products[Math.floor(Math.random() * this.products.length)];
    
    // Create post content
    const postTitle = `[Advertisement] ${product.name} - ${product.description}`;
    const postContent = `
## ${product.name}

${product.description}

**Price:** ${product.price}

[View Product](${product.url})

---

*This is an automated post from PowergenX Supplements. All our products are exclusively for adults 18+.*

**FAQ:**
- Shipping: Fast delivery within 1-2 business days (NL) or 3-5 business days (international)
- Payment: We accept cryptocurrency payments (Bitcoin, Ethereum, Litecoin) via our secure payment portal
- Quality: All products are laboratory tested for purity and potency

For questions, contact us at websitepowergenx@proton.me
    `;
    
    console.log(`Posting to r/${subreddit}: ${postTitle}`);
    
    // In a real implementation, this would make an API call to Reddit
    // For now, we'll just simulate the posting
    const result = this.simulatePost(subreddit, postTitle, postContent);
    
    // Update UI with activity
    this.lastPostTime = Date.now();
    this.updateUI();
    
    return result;
  }
  
  // Simulate posting to Reddit (in a real implementation, this would use Reddit API)
  simulatePost(subreddit, title, content) {
    console.log(`
=== REDDIT POST SIMULATION ===
Subreddit: r/${subreddit}
Title: ${title}
Content:
${content}
============================
    `);
    
    // Simulate successful post
    return {
      success: true,
      postId: "t3_" + Math.random().toString(36).substr(2, 9),
      url: `https://reddit.com/r/${subreddit}/comments/${Math.random().toString(36).substr(2, 9)}`
    };
  }
  
  // Manual post function
  manualPost() {
    console.log("Manual post initiated...");
    const result = this.postAdvertisement();
    console.log("Manual post completed!");
    return result;
  }
  
  // Respond to comments (simulated)
  respondToComments(comment) {
    const lowerComment = comment.toLowerCase();
    
    // Check for FAQ keywords
    for (const [keyword, response] of Object.entries(this.faqResponses)) {
      if (lowerComment.includes(keyword)) {
        return response;
      }
    }
    
    // Default response
    return "Thanks for your comment! For specific questions about our products, please visit our website or contact us directly.";
  }
  
  // Monitor mentions (simulated)
  monitorMentions() {
    // In a real implementation, this would check for mentions of the bot
    // For now, we'll just log that monitoring is happening
    console.log("Monitoring for mentions...");
  }
}

// Initialize the bot when the page loads
if (typeof window !== 'undefined') {
  window.redditBot = new RedditBot();
  window.redditBot.init();
  
  // Export for potential console use
  window.RedditBot = RedditBot;
}

// For Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RedditBot };
}