# Income Tax Calculator FY 2025-26

A modern web application for calculating Bangladesh income tax for Fiscal Year 2025-26 with bilingual support (English + Bangla). Features include accurate tax calculations with exemptions, progressive slabs, rebates, and investment planning tools.

## 🌟 Features

- **📊 Accurate Tax Calculations**: FY 2025-26 Bangladesh tax rules with gender-based exemptions
- **🌐 Bilingual Support**: Full English and Bangla translations
- **💰 Rebate Maximize Calculator**: Plan investments for maximum tax rebate
- **📱 Responsive Design**: Glassmorphic UI that works on all devices
- **📈 Detailed Breakdown**: Tax slab analysis, rebate calculations, and investment recommendations

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

Open `index.html` in any modern web browser - no build process required!

**Live Demo**: [View on GitHub Pages](https://github.com/twentyTwo/finsource-tax-calculator)

## 📊 Project Structure

```
finsource-maximize-rebate/
├── index.html                      # Main tax calculator
├── rebate-maximize-calculator.html # Investment planning tool
├── script.js                       # Main calculator logic
├── rebate-maximize-script.js       # Investment calculator logic
├── styles.css                      # Shared styles
└── tax-config-fy-2025-26.json     # Tax configuration
```

## 🤝 Contributing

Contributions are welcome! Create a pull request on [GitHub](https://github.com/twentyTwo/finsource-tax-calculator)

## ⚠️ Disclaimer

This calculator is for informational purposes only. For accurate tax filing, consult with a certified tax professional or the Bangladesh National Board of Revenue (NBR).

---

**Made with ❤️ by FinSource | FY 2025-26**
