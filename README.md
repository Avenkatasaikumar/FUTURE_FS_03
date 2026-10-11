# FUTURE_FS_03: Local Business Website & Pitch (Concept Demo)

**Future Interns · Full Stack Web Development · Task 3**
Author: Aggala Venkata Sai Kumar ([@Avenkatasaikumar](https://github.com/Avenkatasaikumar))

**Live demo:** https://avenkatasaikumar.github.io/FUTURE_FS_03/

## About
A professional website for a neighbourhood café, **Brew & Bloom Café**. This is a **concept demo**: the business, menu, prices, hours and testimonials are sample content used to show how a local business website helps attract customers. The site is built so real details can be swapped in within minutes.

## Features
- Responsive layout (phone, tablet, desktop) and automatic dark mode
- Sticky navigation with smooth scrolling
- Home hero with a one-tap call button
- Tabbed menu rendered from a JavaScript data object (easy to edit)
- About section with opening hours
- Testimonials section
- Contact: address, phone, embedded Google Map, directions button
- Contact form that opens a pre-filled WhatsApp message
- Floating WhatsApp button
- SEO basics: title, meta description, Open Graph tags, semantic sections

## Screenshots
| Desktop home | Menu section |
|---|---|
| ![Desktop home](screenshots/01-desktop-home.png) | ![Menu](screenshots/03-menu-section.png) |

| Mobile | Mobile dark mode |
|---|---|
| ![Mobile](screenshots/04-mobile-home.png) | ![Dark mode](screenshots/05-mobile-dark-mode.png) |

Full page: [screenshots/02-desktop-full-page.png](screenshots/02-desktop-full-page.png)

## Tech stack
HTML5, CSS3 (custom properties, grid, flexbox, media queries), vanilla JavaScript. No frameworks or build step. Hosted on GitHub Pages.

## Project structure
```
FUTURE_FS_03/
├── index.html
├── css/style.css
├── js/script.js
├── README.md
├── PITCH.md
└── screenshots/
```

## How to customise for a real business
1. `index.html`: change the name, address, phone (`tel:` and `wa.me` links) and hours.
2. `js/script.js`: edit the `menu` object (categories, items, prices).
3. `css/style.css`: change the colours in the `:root` variables.
4. Replace the map `q=` value with the real business name and city.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder.

## What I learned
- Structuring content around what customers look for: hours, menu, location, contact
- Building mobile-first layouts and dark-mode theming with CSS variables
- Rendering UI from data with JavaScript so non-developers can update it
- Writing a benefit-focused pitch instead of a technical one

## Pitch
See [PITCH.md](PITCH.md).
