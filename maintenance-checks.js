 // Maintenance and Security Check Functions
// This file contains helper functions for periodic security checks

// Check for outdated links
function checkLinks() {
    const links = document.querySelectorAll('a[href]');
    const brokenLinks = [];
    
    // This would typically be done server-side or with a service
    // For client-side, we can at least check for obviously bad patterns
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('javascript:') || href.includes('data:')) {
            brokenLinks.push(href);
        }
    });
    
    if (brokenLinks.length > 0) {
        console.warn('Potential security issues found in links:', brokenLinks);
    }
    
    return brokenLinks.length === 0;
}

// Check localStorage for suspicious data
function checkLocalStorage() {
    const suspiciousKeys = [];
    for (let key in localStorage) {
        // Look for potentially malicious keys
        if (key.includes('script') || key.includes('eval') || key.includes('<')) {
            suspiciousKeys.push(key);
        }
    }
    
    if (suspiciousKeys.length > 0) {
        console.warn('Suspicious localStorage keys found:', suspiciousKeys);
        // In a real implementation, you might want to clear these
    }
    
    return suspiciousKeys.length === 0;
}

// Clean up expired rate limiting data
function cleanupRateLimitData() {
    const now = Date.now();
    const timeWindow = 60000; // 1 minute
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('rate_limit_')) {
            const data = JSON.parse(localStorage.getItem(key));
            if (data && (now - data.timestamp > timeWindow)) {
                localStorage.removeItem(key);
            }
        }
    }
}

// Run periodic maintenance
function runMaintenance() {
    checkLinks();
    checkLocalStorage();
    cleanupRateLimitData();
    
    // Schedule next run
    setTimeout(runMaintenance, 300000); // Run every 5 minutes
}

// Start maintenance when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runMaintenance);
} else {
    runMaintenance();
}

// Export functions for potential use in console
window.SecurityMaintenance = {
    checkLinks,
    checkLocalStorage,
    cleanupRateLimitData,
    runMaintenance
};