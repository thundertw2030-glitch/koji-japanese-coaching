# Static Instagram link + contact form combined update

This release combines the multilingual Netlify consultation form with direct HTML Instagram links.

Instagram URL:
https://www.instagram.com/japancareer.support/

## Instagram link placement
- Header navigation
- Contact cards
- Footer

The Instagram links are now written directly into each of the 12 language `index.html` files. They no longer depend on JavaScript DOM insertion, improving reliability on iPhone Safari and with cached scripts.

## Consultation form
- Netlify Forms enabled via `data-netlify="true"`
- Honeypot anti-spam field
- 12 localized forms and thank-you pages
- Privacy consent included

## Upload
Upload the full contents of `koji-japanese-coaching-main` to the GitHub repository and commit. Netlify should deploy automatically.

Suggested commit message:
`Add static Instagram links and multilingual consultation form`
