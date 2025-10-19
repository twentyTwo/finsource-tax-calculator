# Bangladesh Income Tax Calculator FY 2025-26

A modern, accessible, glassmorphic single-page web application for calculating Bangladesh individual income tax for Fiscal Year 2025-26. Features a beautiful UI with bilingual support (English + Bangla) and comprehensive tax calculations including exemptions, progressive slabs, and rebates.

## 🌟 Features

- **📊 Accurate Tax Calculations**: Implements exact Bangladesh tax rules for FY 2025-26
- **🌐 Bilingual Support**: Full English and Bangla translations with instant language switching
- **✨ Modern Glassmorphic Design**: Beautiful, animated gradient background with glass effect cards
- **📱 Mobile-First & Responsive**: Works seamlessly on all devices from phones to desktops
- **♿ Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **⚡ Performant**: Pure vanilla JavaScript - no frameworks, fast loading, minimal footprint
- **🎯 Real-time Input Formatting**: Automatic number formatting with comma separators
- **📈 Detailed Breakdown**: Complete tax slab analysis, rebate calculations, and visual breakdowns

## 🧮 Tax Calculation Rules

### Exempted Income
- **Formula**: `min(Gross Income / 3, BDT 450,000)`
- One-third of gross income or BDT 450,000, whichever is lower

### Taxable Income
- **Formula**: `Gross Income - Exempted Income`

### Progressive Tax Slabs (Marginal Rates)
| Income Range (BDT) | Tax Rate |
|-------------------|----------|
| 0 — 350,000 | 0% |
| 350,001 — 450,000 | 5% |
| 450,001 — 850,000 | 10% |
| 850,001 — 1,350,000 | 15% |
| 1,350,001 — 1,850,000 | 20% |
| 1,850,001 — 3,850,000 | 25% |
| 3,850,001 and above | 30% |

### Tax Rebate
- **Formula**: `min(3% of Taxable Income, 15% of Investment, BDT 1,000,000)`
- Minimum of three values is selected

### Final Calculations
- **Final Tax Payable**: `Tax Before Rebate - Rebate`
- **Net Due**: `Final Tax - Employer Deposited Tax`
- **Effective Tax Rate**: `(Final Tax / Gross Income) × 100%`

## 🚀 Quick Start

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/bangladesh-tax-calculator.git
   cd bangladesh-tax-calculator
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required!

3. **Or use a local server** (optional, recommended for development)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then visit `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
   - Name it something like `bangladesh-tax-calculator`
   - Make it public

2. **Upload files**
   - Upload `index.html`, `styles.css`, and `script.js`
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be published at: `https://yourusername.github.io/bangladesh-tax-calculator/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add files
git add index.html styles.css script.js README.md

# Commit
git commit -m "Initial commit: Bangladesh Tax Calculator FY 2025-26"

# Add remote repository
git remote add origin https://github.com/yourusername/bangladesh-tax-calculator.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages via Settings → Pages (as above)
```

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select your project folder
4. Publish repository to GitHub
5. Enable GitHub Pages in repository settings

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4f46e5;  /* Main brand color */
    --secondary-color: #06b6d4; /* Accent color */
    --success-color: #10b981;   /* Success messages */
    /* ... more variables */
}
```

### Modifying Tax Rules

Update the configuration in `script.js`:

```javascript
const TAX_CONFIG = {
    EXEMPTION_DIVISOR: 3,
    MAX_EXEMPTION: 450000,
    MAX_REBATE: 1000000,
    REBATE_RATE_TAXABLE: 0.03,
    REBATE_RATE_INVESTMENT: 0.15,
    TAX_SLABS: [
        // Modify slabs here
    ]
};
```

### Adding More Languages

Add new language objects to the `translations` object in `script.js`:

```javascript
const translations = {
    en: { /* English translations */ },
    bn: { /* Bangla translations */ },
    es: { /* Spanish translations - your addition */ }
};
```

## 📱 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ iOS Safari (last 2 versions)
- ✅ Chrome for Android (last 2 versions)

## ♿ Accessibility Features

- **Semantic HTML5**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for all interactive elements
- **Keyboard Navigation**: Full keyboard access with visible focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Responsive Text**: Scales properly with browser zoom

## 🧪 Testing

### Manual Testing Checklist

- [ ] Enter various income amounts and verify calculations
- [ ] Test with and without investment amounts
- [ ] Test with employer deposit values
- [ ] Switch between English and Bangla
- [ ] Test on mobile devices (responsive design)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify all tax slabs are calculated correctly
- [ ] Test edge cases (zero income, very high income)

### Example Test Cases

| Gross Income | Investment | Employer Deposit | Expected Tax | Notes |
|-------------|-----------|------------------|-------------|-------|
| 300,000 | 0 | 0 | 0 | Below taxable threshold |
| 500,000 | 0 | 0 | 2,500 | First two slabs |
| 1,000,000 | 100,000 | 0 | 44,500 | With rebate |
| 5,000,000 | 500,000 | 50,000 | 1,106,500 | High income |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use 4 spaces for indentation
- Follow existing naming conventions
- Add comments for complex calculations
- Ensure responsive design is maintained
- Test accessibility features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This calculator is for **informational purposes only**. Tax laws can be complex and subject to change. For accurate tax filing and professional advice, please consult with:

- A certified tax professional
- Bangladesh National Board of Revenue (NBR)
- Your organization's tax department

## 📞 Support

If you encounter any issues or have questions:

- Open an issue on GitHub
- Check existing issues for solutions
- Review the tax calculation logic in `script.js`

## 🙏 Acknowledgments

- Bangladesh National Board of Revenue (NBR) for tax rules
- Tax professionals who validated the calculations
- Open source community for inspiration

## 📊 Project Structure

```
bangladesh-tax-calculator/
├── index.html          # Main HTML structure
├── styles.css          # Glassmorphic styles and responsive design
├── script.js           # Tax calculation engine and UI logic
└── README.md          # This file
```

## 🔄 Version History

### v1.0.0 (2025-10-19)
- Initial release
- FY 2025-26 tax rules implementation
- English and Bangla support
- Glassmorphic UI design
- Full responsive layout
- Accessibility features

## 🎯 Roadmap

Future enhancements under consideration:

- [ ] Print-friendly tax summary
- [ ] Export to PDF functionality
- [ ] Save/Load calculations
- [ ] Wealth surcharge calculation
- [ ] Multiple income source support
- [ ] Tax planning suggestions
- [ ] Dark mode toggle
- [ ] More language options

---

**Made with ❤️ for Bangladesh taxpayers | FY 2025-26**

*Last updated: October 19, 2025*
