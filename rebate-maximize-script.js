// Translation Data
const translations = {
    en: {
        mainTitle: "Rebate Maximize Calculator",
        fiscalYear: "Plan Your Investments for Maximum Tax Rebate",
        backToMain: "Back to Main Calculator",
        descriptionText: "Use this calculator to plan your investments for the next financial year to maximize your tax rebate. Enter your current monthly salary to see how much you need to invest.",
        incomeTitle: "Income Information",
        labelMonthlySalary: "Current Monthly Salary (BDT)",
        helpMonthlySalary: "Enter your current monthly basic salary",
        btnCalculate: "Calculate Investment Needed",
        btnReset: "Reset",
        resultsTitle: "Investment Planning Results",
        tableComponent: "Component",
        tableCalculation: "Calculation",
        tableAmount: "Amount (BDT)",
        yearlySalaryLabel: "Yearly Salary",
        yearlySalaryCalc: "Monthly Salary × 12",
        thirteenthSalaryLabel: "13th Salary + Performance Bonus",
        thirteenthSalaryCalc: "≈ Monthly Salary × 1.4",
        festivalBonusLabel: "Festival Bonus",
        festivalBonusCalc: "≈ Monthly Salary × 1.2",
        grossSalaryLabel: "Gross Salary (Approximate)",
        grossSalaryCalc: "Sum of above",
        taxableIncomeLabel: "Taxable Income",
        taxableIncomeCalc: "Gross - Exempted Income",
        maxInvestLimitLabel: "Max Investment Limit",
        maxInvestLimitCalc: "(Taxable Income × 0.03) ÷ 0.15",
        providentFundLabel: "Provident Fund",
        providentFundCalc: "Monthly Salary × 12 × 12%",
        additionalInvestmentLabel: "You Need to Invest",
        additionalInvestmentCalc: "Max Investment Limit - Provident Fund",
        formulaExplanation: "Formula Explanation: To get maximum tax rebate, you need to invest 20% of your taxable income (since 15% of investment should be equal to 3% of taxable income). Your provident fund contribution (12% of basic salary) is already counted as investment.",
        infoTitle: "How to Maximize Your Rebate",
        infoProvidentFundTitle: "1. Provident Fund",
        infoProvidentFundText: "Your 12% provident fund contribution is automatically counted as eligible investment for tax rebate.",
        infoAdditionalInvestmentTitle: "2. Additional Investment",
        infoAdditionalInvestmentText: "Invest in DPS, insurance, stocks, or government bonds to reach the maximum investment limit.",
        infoTimingTitle: "3. Timing is Important",
        infoTimingText: "Plan your investments throughout the year to maximize your tax benefits for the next financial year.",
        footerDisclaimer: "Disclaimer: This calculator is for informational purposes only. Please consult with a tax professional for accurate tax planning.",
        footerCopyright: "© 2025 Finsource Income Tax Calculator | FY 2025-26",
        langText: "বাংলা"
    },
    bn: {
        mainTitle: "রেয়াত সর্বোচ্চকরণ ক্যালকুলেটর",
        fiscalYear: "সর্বোচ্চ কর রেয়াতের জন্য আপনার বিনিয়োগ পরিকল্পনা করুন",
        backToMain: "প্রধান আয়কর ক্যালকুলেটরে ফিরে যান",
        descriptionText: "পরবর্তী অর্থবছরের জন্য আপনার কর রেয়াত সর্বোচ্চ করতে এই ক্যালকুলেটর ব্যবহার করুন। আপনাকে কত বিনিয়োগ করতে হবে তা দেখতে আপনার বর্তমান মাসিক বেতন লিখুন।",
        incomeTitle: "আয়ের তথ্য",
        labelMonthlySalary: "বর্তমান মাসিক বেতন (টাকা)",
        helpMonthlySalary: "আপনার বর্তমান মাসিক মৌলিক বেতন লিখুন",
        btnCalculate: "প্রয়োজনীয় বিনিয়োগ গণনা করুন",
        btnReset: "রিসেট",
        resultsTitle: "বিনিয়োগ পরিকল্পনার ফলাফল",
        tableComponent: "উপাদান",
        tableCalculation: "গণনা",
        tableAmount: "পরিমাণ (টাকা)",
        yearlySalaryLabel: "বার্ষিক বেতন",
        yearlySalaryCalc: "মাসিক বেতন × ১২",
        thirteenthSalaryLabel: "১৩তম বেতন + পারফরম্যান্স বোনাস",
        thirteenthSalaryCalc: "≈ মাসিক বেতন × ১.৪",
        festivalBonusLabel: "উৎসব বোনাস",
        festivalBonusCalc: "মাসিক বেতন × ১.২",
        grossSalaryLabel: "মোট বেতন (আনুমানিক)",
        grossSalaryCalc: "উপরের সমষ্টি",
        taxableIncomeLabel: "করযোগ্য আয়",
        taxableIncomeCalc: "মোট বেতন - করমুক্ত আয়",
        maxInvestLimitLabel: "সর্বোচ্চ বিনিয়োগ সীমা",
        maxInvestLimitCalc: "(করযোগ্য আয় × ০.০৩) ÷ ০.১৫",
        providentFundLabel: "ভবিষ্য তহবিল",
        providentFundCalc: "মাসিক বেতন × ১২ × ১২%",
        additionalInvestmentLabel: "আপনাকে বিনিয়োগ করতে হবে",
        additionalInvestmentCalc: "সর্বোচ্চ বিনিয়োগ সীমা - ভবিষ্য তহবিল",
        formulaExplanation: "সূত্রের ব্যাখ্যা: সর্বোচ্চ কর রেয়াত পেতে, আপনাকে আপনার করযোগ্য আয়ের ২০% বিনিয়োগ করতে হবে (যেহেতু বিনিয়োগের ১৫% করযোগ্য আয়ের ৩% এর সমান হওয়া উচিত)। আপনার ভবিষ্য তহবিল অবদান (মৌলিক বেতনের ১২%) ইতিমধ্যেই বিনিয়োগ হিসাবে গণনা করা হয়।",
        infoTitle: "কিভাবে আপনার রেয়াত সর্বোচ্চ করবেন",
        infoProvidentFundTitle: "১. ভবিষ্য তহবিল",
        infoProvidentFundText: "আপনার ১২% ভবিষ্য তহবিল অবদান স্বয়ংক্রিয়ভাবে কর রেয়াতের জন্য যোগ্য বিনিয়োগ হিসাবে গণনা করা হয়।",
        infoAdditionalInvestmentTitle: "২. অতিরিক্ত বিনিয়োগ",
        infoAdditionalInvestmentText: "সর্বোচ্চ বিনিয়োগ সীমা পৌঁছাতে ডিপিএস, বীমা, স্টক বা সরকারি বন্ডে বিনিয়োগ করুন।",
        infoTimingTitle: "৩. সময় গুরুত্বপূর্ণ",
        infoTimingText: "পরবর্তী অর্থবছরের জন্য আপনার কর সুবিধা সর্বোচ্চ করতে বছর জুড়ে আপনার বিনিয়োগ পরিকল্পনা করুন।",
        footerDisclaimer: "ডিসক্লেইমার: এই ক্যালকুলেটরটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে। সঠিক কর পরিকল্পনার জন্য একজন কর পেশাদারের সাথে পরামর্শ করুন।",
        footerCopyright: "© ২০২৫ ফিনসোর্স আয়কর ক্যালকুলেটর | অর্থবছর ২০২৫-২৬",
        langText: "English"
    }
};

// State Management
let currentLanguage = 'en';

// Constants
const MAX_EXEMPTION = 450000;
const EXEMPTION_DIVISOR = 3;
const REBATE_RATE_TAXABLE = 0.03;
const REBATE_RATE_INVESTMENT = 0.15;
const PROVIDENT_FUND_RATE = 0.12;

// DOM Elements
const elements = {
    form: document.getElementById('rebateForm'),
    monthlySalary: document.getElementById('monthlySalary'),
    calculateBtn: document.getElementById('calculateBtn'),
    resetBtn: document.getElementById('resetBtn'),
    resultsSection: document.getElementById('resultsSection'),
    langToggle: document.getElementById('langToggle')
};

// Initialize Application
function init() {
    setupEventListeners();
    loadLanguagePreference();
    applyTranslations();
}

// Event Listeners
function setupEventListeners() {
    elements.form.addEventListener('submit', handleCalculate);
    elements.resetBtn.addEventListener('click', handleReset);
    elements.langToggle.addEventListener('click', toggleLanguage);
    
    // Format input as user types
    elements.monthlySalary.addEventListener('input', handleInputFormat);
    elements.monthlySalary.addEventListener('blur', handleInputBlur);
}

// Handle Calculate
function handleCalculate(e) {
    e.preventDefault();
    
    // Parse inputs
    const monthlySalary = parseFormattedNumber(elements.monthlySalary.value);
    
    // Validate
    if (monthlySalary <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please enter a valid monthly salary' 
            : 'দয়া করে একটি বৈধ মাসিক বেতন লিখুন');
        return;
    }
    
    // Calculate
    const results = calculateInvestment(monthlySalary);
    
    // Display results
    displayResults(results);
    
    // Scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Investment Calculation Engine
function calculateInvestment(monthlySalary) {
    // 1. Calculate Yearly Salary
    const yearlySalary = monthlySalary * 12;
    
    // 2. Calculate 13th Salary + Performance Bonus (approx 1.4 times monthly salary)
    const thirteenthSalaryBonus = monthlySalary * 1.4;
    
    // 3. Calculate Festival Bonus (approx 1.2 times monthly salary)
    const festivalBonus = monthlySalary * 1.2;
    
    // 4. Calculate Gross Salary (Approximate)
    const grossSalary = yearlySalary + thirteenthSalaryBonus + festivalBonus;
    
    // 5. Calculate Exempted Income
    const exemptedIncome = Math.min(grossSalary / EXEMPTION_DIVISOR, MAX_EXEMPTION);
    
    // 6. Calculate Taxable Income
    const taxableIncome = Math.max(0, grossSalary - exemptedIncome);
    
    // 7. Calculate Max Investment Limit
    // Formula: (Taxable Income × 0.03) ÷ 0.15 = Taxable Income × 0.2 (20% of taxable income)
    const maxInvestLimit = taxableIncome * 0.2;
    
    // 8. Calculate Provident Fund
    const providentFund = monthlySalary * 12 * PROVIDENT_FUND_RATE;
    
    // 9. Calculate Additional Investment Needed
    const additionalInvestment = Math.max(0, maxInvestLimit - providentFund);
    
    return {
        monthlySalary,
        yearlySalary,
        thirteenthSalaryBonus,
        festivalBonus,
        grossSalary,
        exemptedIncome,
        taxableIncome,
        maxInvestLimit,
        providentFund,
        additionalInvestment
    };
}

// Display Results
function displayResults(results) {
    // Show results section
    elements.resultsSection.classList.remove('hidden');
    
    // Update table with calculated values
    document.getElementById('yearlySalary').textContent = formatCurrency(results.yearlySalary);
    document.getElementById('thirteenthSalary').textContent = formatCurrency(results.thirteenthSalaryBonus);
    document.getElementById('festivalBonus').textContent = formatCurrency(results.festivalBonus);
    document.getElementById('grossSalary').textContent = formatCurrency(results.grossSalary);
    document.getElementById('taxableIncome').textContent = formatCurrency(results.taxableIncome);
    document.getElementById('maxInvestLimit').textContent = formatCurrency(results.maxInvestLimit);
    document.getElementById('providentFund').textContent = formatCurrency(results.providentFund);
    document.getElementById('additionalInvestment').textContent = formatCurrency(results.additionalInvestment);
    
    // Highlight if additional investment is needed
    const additionalInvestmentElement = document.getElementById('additionalInvestment');
    if (results.additionalInvestment > 0) {
        additionalInvestmentElement.style.color = 'var(--warning-color)';
    } else {
        additionalInvestmentElement.style.color = 'var(--success-color)';
    }
}

// Handle Reset
function handleReset() {
    elements.form.reset();
    elements.resultsSection.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Input Formatting Functions
function handleInputFormat(e) {
    // Remove non-numeric characters
    let value = e.target.value.replace(/[^\d]/g, '');
    e.target.value = value;
}

function handleInputBlur(e) {
    if (e.target.value) {
        const num = parseInt(e.target.value);
        e.target.value = formatNumber(num);
    }
}

// Format Number with Commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Parse Formatted Number
function parseFormattedNumber(str) {
    return parseInt(str.replace(/,/g, '') || '0');
}

// Format Currency
function formatCurrency(num) {
    return `৳ ${formatNumber(Math.round(num))}`;
}

// Language Toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    saveLanguagePreference();
    applyTranslations();
    
    // Recalculate if results are visible
    if (!elements.resultsSection.classList.contains('hidden')) {
        const monthlySalary = parseFormattedNumber(elements.monthlySalary.value);
        if (monthlySalary > 0) {
            handleCalculate(new Event('submit'));
        }
    }
}

// Apply Translations
function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Update all translatable elements
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'bn';
    
    // Update placeholders
    elements.monthlySalary.placeholder = '0';
}

// Save Language Preference
function saveLanguagePreference() {
    localStorage.setItem('rebateCalcLanguage', currentLanguage);
    // Also save to shared storage for main calculator
    localStorage.setItem('sharedLanguage', currentLanguage);
}

// Load Language Preference
function loadLanguagePreference() {
    // Try to load from shared storage first (from main calculator)
    let saved = localStorage.getItem('sharedLanguage');
    if (!saved) {
        // Fallback to own storage
        saved = localStorage.getItem('rebateCalcLanguage');
    }
    if (saved && (saved === 'en' || saved === 'bn')) {
        currentLanguage = saved;
    }
}

// Initialize on DOM Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
} else {
    init();
}