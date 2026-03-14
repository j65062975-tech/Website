# Content Security Policy (CSP)

## Overview

This document outlines the Content Security Policy for the PowergenX website. CSP is a security layer that helps detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks.

## Current Implementation

Since this is a static website hosted on GitHub Pages, we implement security through:

1. Security headers in HTML files
2. Input sanitization in JavaScript
3. Proper escaping of dynamic content

## Recommended CSP Header

If you move to a hosting platform that supports custom headers, implement this CSP:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';
```

### Policy Breakdown:

- `default-src 'self'`: Only allow resources from the same origin
- `script-src 'self' 'unsafe-inline'`: Allow scripts from same origin and inline scripts (needed for current implementation)
- `style-src 'self' 'unsafe-inline'`: Allow styles from same origin and inline styles
- `img-src 'self' data:`: Allow images from same origin and data URIs
- `font-src 'self'`: Only allow fonts from same origin
- `connect-src 'self'`: Only allow connections to same origin
- `frame-ancestors 'none'`: Prevent framing of the site

## Future Improvements

For enhanced security, consider:

1. Moving to a hosting platform that supports custom headers
2. Removing 'unsafe-inline' by moving all JavaScript to external files
3. Implementing hash-based whitelisting for inline scripts
4. Using nonce-based script execution

## Testing CSP

To test a CSP policy:

1. Add the header as a meta tag in your HTML:
   ```html
   <meta http-equiv="Content-Security-Policy" content="YOUR_POLICY_HERE">
   ```

2. Test with report-only mode first:
   ```html
   <meta http-equiv="Content-Security-Policy-Report-Only" content="YOUR_POLICY_HERE">
   ```

3. Monitor browser console for violations

## Resources

- [MDN Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [Report URI](https://report-uri.com/) for CSP violation reporting