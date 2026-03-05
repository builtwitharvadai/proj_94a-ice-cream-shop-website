# Ice Cream Shop Website

A simple, static website for ice cream businesses to showcase their products, location, and contact information. The site will serve as a basic online presence to help customers discover the shop and learn about available flavors and services.

## Project Structure

```
.
├── index.html          # Main homepage
├── flavors.html        # Ice cream flavors page
├── contact.html        # Contact information and location
├── styles.css          # Main stylesheet
├── script.js           # Interactive functionality
├── favicon.ico         # Site favicon
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## Local Development Setup

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. No build process or dependencies required - this is a static HTML/CSS/JavaScript site

For local development with live reload:
- Use a simple HTTP server like Python's `python -m http.server` or `php -S localhost:8000`
- Or use VS Code's Live Server extension

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select the branch you want to deploy (usually `main`)
4. Click "Save"
5. Your site will be available at `https://[username].github.io/[repository-name]/`

Alternative deployment options:
- Netlify: Drag and drop your project folder
- Vercel: Connect your GitHub repository
- Any static hosting service

## Updating Content

### For Ice Cream Shop Owners

This site is designed to be easy to update without programming knowledge:

**To update shop hours:**
- Open `index.html`
- Find the section with id `hours`
- Update the text between the HTML tags

**To update flavors:**
- Open `flavors.html`
- Add or remove flavor entries in the list
- Follow the existing HTML pattern

**To update contact information:**
- Open `contact.html`
- Update address, phone, and email information
- Update the embedded map if needed

**To change colors and styling:**
- Open `styles.css`
- Modify CSS custom properties at the top of the file
- Primary colors, fonts, and spacing can be adjusted here

### Tips
- Always make a backup before editing
- Test changes locally before deploying
- Keep the HTML structure intact - only change the text content
- If you break something, use Git to revert to a previous version

## Browser Support

This site uses modern HTML5 and CSS3 features and is compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for use by ice cream shops and similar businesses.
