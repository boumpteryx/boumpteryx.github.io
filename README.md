# Antoine Desjardins - Personal Portfolio

A modern, responsive personal portfolio website showcasing my professional experience, education, skills, and publications in Data Science and AI.

🌐 **Live Site**: [https://antoine-desjardins.github.io](https://antoine-desjardins.github.io)

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Animations**: Elements fade in as you scroll down the page
- **Social Links**: Direct links to LinkedIn, GitHub, Google Scholar, and email
- **Downloadable CV**: Direct download link for CV document
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Print Friendly**: Optimized styles for printing
- **Accessibility**: Keyboard navigation support and ARIA labels

## 🚀 Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/Antoine-Desjardins/Antoine-Desjardins.github.io.git
cd Antoine-Desjardins.github.io
```

2. Open `index.html` in your browser:
   - **Windows**: Double-click `index.html` or run `start index.html` in PowerShell
   - **Mac**: Run `open index.html` in Terminal
   - **Linux**: Run `xdg-open index.html` in Terminal

3. Or use a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
Antoine-Desjardins.github.io/
│
├── index.html                              # Main HTML file
├── styles.css                              # CSS stylesheet
├── script.js                               # JavaScript functionality
├── CV - IBM.docx                           # Downloadable CV
├── 0141_Colombre-Antoine-Villandry-141.jpg # Profile picture
└── README.md                               # This file
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Experience**: Modify the timeline items in the experience section
3. **Education**: Update education cards with your degrees
4. **Skills**: Add or remove skills in the skills section
5. **Publications**: Update the publications list with your research
6. **Contact Info**: Update email, phone, and location in the contact section

### Updating Social Links

Replace the placeholder URLs in `index.html`:
```html
<a href="https://www.linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://github.com/your-username">GitHub</a>
<a href="https://scholar.google.com/your-profile">Google Scholar</a>
```

### Changing Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #10b981;    /* Accent color */
    --accent-color: #f59e0b;       /* Highlight color */
    /* ... other colors */
}
```

### Updating Profile Picture

Replace `0141_Colombre-Antoine-Villandry-141.jpg` with your own image, or update the image path in `index.html`:
```html
<img src="your-image.jpg" alt="Your Name" class="profile-img">
```

## 🌐 Deployment to GitHub Pages

### Initial Setup

1. Create a new repository named `your-username.github.io` (replace `your-username` with your GitHub username)

2. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

4. Your site will be live at `https://your-username.github.io` within a few minutes!

### Updating Your Site

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site.

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lightweight: ~60KB total (HTML + CSS + JS)
- Fast loading: Optimized images and minimal dependencies
- Smooth animations: Hardware-accelerated CSS transitions
- Lazy loading: Images load as needed

## 🔒 Privacy & Security

- No tracking or analytics by default
- No external dependencies (except fonts and Font Awesome CDN)
- All data is static - no backend or database

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📧 Contact

**Antoine Desjardins**
- Email: antoinedesjard@gmail.com
- LinkedIn: [Antoine Desjardins](https://www.linkedin.com/in/antoine-desjardins)
- GitHub: [@Antoine-Desjardins](https://github.com/Antoine-Desjardins)

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ for showcasing AI and Data Science expertise**

Last Updated: May 2026
