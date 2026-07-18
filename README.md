# Koji Japanese Coaching — Version 2.0

Production URL: https://nimble-shortbread-ea1a37.netlify.app

## Implemented
- Premium dark navy and gold responsive design
- Motion with reduced-motion accessibility support
- 12 localized landing-page URLs with hreflang
- Direct Email, WhatsApp, and LINE conversion paths
- Consent-controlled GA4 and Microsoft Clarity
- GA4 events: contact_click, language_switch, scroll_90, lesson_finder_complete
- Search Console verification
- Structured data, sitemap, robots, canonical and Open Graph
- Rule-based lesson finder with transparent disclosure
- Blog and free-resource foundation
- Privacy, legal, and analytics settings pages
- Netlify security/cache headers
- GitHub Actions quality checks

## Recommended Git workflow
- `main`: production
- `develop`: staging and edits
- Pull request from `develop` to `main`
- Netlify production deploy from `main`
- Optional Netlify branch deploy from `develop`

## Verification after deployment
1. Open page in a private browser and accept analytics.
2. GA4 Admin > DebugView or Realtime: confirm page_view.
3. Click Email, WhatsApp, and LINE: confirm contact_click.
4. Complete lesson finder: confirm lesson_finder_complete.
5. Search Console: verify ownership, then submit `sitemap.xml`.
6. Clarity: wait for the first consented session and confirm recordings.
