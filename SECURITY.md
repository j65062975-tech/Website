# Security Policy

## Supported Versions

This website is regularly updated with security improvements.

## Reporting a Vulnerability

If you discover a security vulnerability, please contact us at websitepowergenx@proton.me.

We take all security vulnerabilities seriously and will respond as quickly as possible to address any issues.

## Security Measures Implemented

### HTTPS Enforcement
- All pages include Strict-Transport-Security headers
- Forces encryption in transit for all communications

### XSS Prevention
- Input sanitization for all user-provided data
- Content-Type sniffing protection disabled
- Frame embedding protection enabled

### Data Validation
- Email format validation
- Cart item validation before processing
- Client-side sanitization of product names

### DDoS Protection Recommendation
For DDoS protection, we recommend implementing:
- Cloudflare Free tier for basic DDoS protection
- CDN services to reduce server load
- Rate limiting on form submissions

### Data Handling
- No sensitive payment information is stored
- Customer data is processed through secure channels (email, WhatsApp)
- Minimal data retention policy

## Future Improvements
Consider implementing:
- Server-side form processing for better validation
- CAPTCHA on forms to prevent bot abuse
- Web Application Firewall (WAF) for enhanced protection