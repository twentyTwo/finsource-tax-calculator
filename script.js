// Translation Data
const translations = {
    en: {
        mainTitle: "Bangladesh Income Tax Calculator",
        fiscalYear: "Fiscal Year 2025-26",
        incomeTitle: "Income Information",
        labelGrossIncome: "Gross Annual Income (BDT)",
        helpGrossIncome: "Enter your total annual gross income",
        labelInvestment: "Investment Amount (BDT)",
        helpInvestment: "Investment in eligible schemes (DPS, insurance, provident fund, etc.)",
        labelEmployerDeposit: "Tax Already Deposited by Employer (BDT)",
        helpEmployerDeposit: "Amount already paid by your employer on your behalf",
        badgeOptional: "Optional",
        btnCalculate: "Calculate Tax",
        btnReset: "Reset",
        resultsTitle: "Tax Calculation Results",
        labelNetPayable: "Net Tax Payable",
        labelEffectiveRate: "Effective Tax Rate",
        labelMinInvestmentNeeded: "Min Investment for Max Rebate",
        labelYourInvestment: "Your Investment",
        labelPotentialSavings: "Potential Extra Savings",
        breakdownTitle: "Detailed Breakdown",
        labelGrossIncomeBreakdown: "Gross Income",
        labelExemptedIncome: "Exempted Income",
        labelTaxableIncome: "Taxable Income",
        labelTaxBeforeRebate: "Tax Before Rebate",
        labelRebate: "Tax Rebate",
        labelFinalTax: "Final Tax Payable",
        labelEmployerPaid: "Employer Deposited",
        labelRemainingDue: "Remaining Due",
        slabTitle: "Tax Slab Breakdown",
        rebateDetailsTitle: "Rebate Calculation",
        infoTitle: "How It Works",
        infoExemptionTitle: "1. Exempted Income",
        infoExemptionText: "Minimum of (Gross Income ÷ 3) or BDT 450,000 is tax-free",
        infoSlabTitle: "2. Progressive Tax Slabs",
        infoSlabText: "Tax is calculated progressively on taxable income using marginal rates from 0% to 30%",
        infoRebateTitle: "3. Tax Rebate",
        infoRebateText: "Minimum of: 3% of taxable income, 15% of actual investment, or BDT 1,000,000",
        infoFinalTitle: "4. Net Payable",
        infoFinalText: "Final tax minus employer deposit equals your remaining tax liability",
        footerDisclaimer: "Disclaimer: This calculator is for informational purposes only. Please consult with a tax professional for accurate tax filing.",
        footerCopyright: "© 2025 Bangladesh Income Tax Calculator | FY 2025-26",
        langText: "বাংলা",
        slabRange: "Range",
        slabRate: "Rate",
        slabTax: "Tax",
        rebateCalc3Percent: "3% of Taxable Income",
        rebateCalc15Percent: "15% of Investment",
        rebateCalcMax: "Maximum Rebate Limit",
        rebateSelected: "Selected Rebate (Minimum)",
        noTaxDue: "No tax payable - Your income is below the taxable threshold",
        refundScenario: "Refund Due - Employer deposited more than required"
    },
    bn: {
        mainTitle: "বাংলাদেশ আয়কর ক্যালকুলেটর",
        fiscalYear: "অর্থবছর ২০২৫-২৬",
        incomeTitle: "আয়ের তথ্য",
        labelGrossIncome: "মোট বার্ষিক আয় (টাকা)",
        helpGrossIncome: "আপনার মোট বার্ষিক আয় লিখুন",
        labelInvestment: "বিনিয়োগের পরিমাণ (টাকা)",
        helpInvestment: "যোগ্য প্রকল্পে বিনিয়োগ (ডিপিএস, বীমা, ভবিষ্য তহবিল, ইত্যাদি)",
        labelEmployerDeposit: "নিয়োগকর্তা কর্তৃক জমাকৃত কর (টাকা)",
        helpEmployerDeposit: "আপনার পক্ষ থেকে নিয়োগকর্তা ইতিমধ্যে যে পরিমাণ পরিশোধ করেছেন",
        badgeOptional: "ঐচ্ছিক",
        btnCalculate: "কর গণনা করুন",
        btnReset: "রিসেট",
        resultsTitle: "কর গণনার ফলাফল",
        labelNetPayable: "নিট প্রদেয় কর",
        labelEffectiveRate: "কার্যকর কর হার",
        labelMinInvestmentNeeded: "সর্বোচ্চ রেয়াতের জন্য ন্যূনতম বিনিয়োগ",
        labelYourInvestment: "আপনার বিনিয়োগ",
        labelPotentialSavings: "সম্ভাব্য অতিরিক্ত সাশ্রয়",
        breakdownTitle: "বিস্তারিত বিবরণ",
        labelGrossIncomeBreakdown: "মোট আয়",
        labelExemptedIncome: "করমুক্ত আয়",
        labelTaxableIncome: "করযোগ্য আয়",
        labelTaxBeforeRebate: "রেয়াত ছাড়া কর",
        labelRebate: "কর রেয়াত",
        labelFinalTax: "চূড়ান্ত প্রদেয় কর",
        labelEmployerPaid: "নিয়োগকর্তা জমাকৃত",
        labelRemainingDue: "অবশিষ্ট বকেয়া",
        slabTitle: "কর স্ল্যাব বিবরণ",
        rebateDetailsTitle: "রেয়াত গণনা",
        infoTitle: "কীভাবে কাজ করে",
        infoExemptionTitle: "১. করমুক্ত আয়",
        infoExemptionText: "(মোট আয় ÷ ৩) অথবা ৪,৫০,০০০ টাকার মধ্যে যেটি কম সেটি করমুক্ত",
        infoSlabTitle: "২. প্রগতিশীল কর স্ল্যাব",
        infoSlabText: "করযোগ্য আয়ের উপর ০% থেকে ৩০% পর্যন্ত ক্রমান্বয়ে কর হিসাব করা হয়",
        infoRebateTitle: "৩. কর রেয়াত",
        infoRebateText: "এই তিনটির মধ্যে যেটি কম: করযোগ্য আয়ের ৩%, প্রকৃত বিনিয়োগের ১৫%, অথবা ১০,০০,০০০ টাকা",
        infoFinalTitle: "৪. নিট প্রদেয়",
        infoFinalText: "চূড়ান্ত কর বিয়োগ নিয়োগকর্তা জমাকৃত = আপনার অবশিষ্ট কর দায়",
        footerDisclaimer: "দাবিত্যাগ: এই ক্যালকুলেটরটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে। সঠিক কর দাখিলের জন্য একজন কর পেশাদারের সাথে পরামর্শ করুন।",
        footerCopyright: "© ২০২৫ বাংলাদেশ আয়কর ক্যালকুলেটর | অর্থবছর ২০২৫-২৬",
        langText: "English",
        slabRange: "সীমা",
        slabRate: "হার",
        slabTax: "কর",
        rebateCalc3Percent: "করযোগ্য আয়ের ৩%",
        rebateCalc15Percent: "বিনিয়োগের ১৫%",
        rebateCalcMax: "সর্বোচ্চ রেয়াত সীমা",
        rebateSelected: "নির্বাচিত রেয়াত (ন্যূনতম)",
        noTaxDue: "কোন কর প্রদেয় নয় - আপনার আয় করযোগ্য সীমার নিচে",
        refundScenario: "ফেরত প্রদেয় - নিয়োগকর্তা প্রয়োজনের চেয়ে বেশি জমা করেছেন"
    }
};

// Tax Configuration
const TAX_CONFIG = {
    EXEMPTION_DIVISOR: 3,
    MAX_EXEMPTION: 450000,
    MAX_REBATE: 1000000,
    REBATE_RATE_TAXABLE: 0.03,
    REBATE_RATE_INVESTMENT: 0.15,
    TAX_SLABS: [
        { min: 0, max: 350000, rate: 0 },
        { min: 350001, max: 450000, rate: 0.05 },
        { min: 450001, max: 850000, rate: 0.10 },
        { min: 850001, max: 1350000, rate: 0.15 },
        { min: 1350001, max: 1850000, rate: 0.20 },
        { min: 1850001, max: 3850000, rate: 0.25 },
        { min: 3850001, max: Infinity, rate: 0.30 }
    ]
};

// State Management
let currentLanguage = 'en';

// DOM Elements
const elements = {
    form: document.getElementById('taxForm'),
    grossIncome: document.getElementById('grossIncome'),
    investmentAmount: document.getElementById('investmentAmount'),
    employerDeposit: document.getElementById('employerDeposit'),
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
    [elements.grossIncome, elements.investmentAmount, elements.employerDeposit].forEach(input => {
        input.addEventListener('input', handleInputFormat);
        input.addEventListener('blur', handleInputBlur);
    });
}

// Input Formatting
function handleInputFormat(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
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

// Handle Calculate
function handleCalculate(e) {
    e.preventDefault();
    
    // Parse inputs
    const grossIncome = parseFormattedNumber(elements.grossIncome.value);
    const investmentAmount = parseFormattedNumber(elements.investmentAmount.value);
    const employerDeposit = parseFormattedNumber(elements.employerDeposit.value);
    
    // Validate
    if (grossIncome <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please enter a valid gross income' 
            : 'দয়া করে একটি বৈধ মোট আয় লিখুন');
        return;
    }
    
    // Calculate
    const results = calculateTax(grossIncome, investmentAmount, employerDeposit);
    
    // Display results
    displayResults(results);
    
    // Scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Tax Calculation Engine
function calculateTax(grossIncome, investmentAmount, employerDeposit) {
    // 1. Calculate Exempted Income
    const exemptedIncome = Math.min(
        grossIncome / TAX_CONFIG.EXEMPTION_DIVISOR,
        TAX_CONFIG.MAX_EXEMPTION
    );
    
    // 2. Calculate Taxable Income
    const taxableIncome = Math.max(0, grossIncome - exemptedIncome);
    
    // 3. Calculate Tax Before Rebate (Progressive Slabs)
    const { totalTax, slabBreakdown } = calculateProgressiveTax(taxableIncome);
    
    // 4. Calculate Rebate
    const rebateDetails = calculateRebate(taxableIncome, investmentAmount);
    const rebate = rebateDetails.selectedRebate;
    
    // 5. Calculate Final Tax
    const finalTax = Math.max(0, totalTax - rebate);
    
    // 6. Calculate Net Payable
    const netPayable = Math.max(0, finalTax - employerDeposit);
    
    // 7. Calculate Effective Rates
    const effectiveRate = grossIncome > 0 ? (finalTax / grossIncome) * 100 : 0;
    const effectiveAfterOffsetRate = grossIncome > 0 ? (netPayable / grossIncome) * 100 : 0;
    
    // 8. Calculate Investment Analysis
    const investmentAnalysis = calculateInvestmentAnalysis(
        grossIncome, 
        investmentAmount, 
        taxableIncome, 
        totalTax,
        rebateDetails
    );
    
    return {
        grossIncome,
        exemptedIncome,
        taxableIncome,
        totalTax,
        rebate,
        rebateDetails,
        finalTax,
        employerDeposit,
        netPayable,
        effectiveRate,
        effectiveAfterOffsetRate,
        slabBreakdown,
        investmentAnalysis,
        isRefund: employerDeposit > finalTax
    };
}

// Calculate Progressive Tax
function calculateProgressiveTax(taxableIncome) {
    let totalTax = 0;
    const slabBreakdown = [];
    
    for (let i = 0; i < TAX_CONFIG.TAX_SLABS.length; i++) {
        const slab = TAX_CONFIG.TAX_SLABS[i];
        
        if (taxableIncome <= slab.min - 1) {
            // Income doesn't reach this slab
            slabBreakdown.push({
                min: slab.min,
                max: slab.max,
                rate: slab.rate,
                taxableAmount: 0,
                taxAmount: 0,
                applied: false
            });
            continue;
        }
        
        // Calculate taxable amount in this slab
        const slabStart = slab.min;
        const slabEnd = Math.min(slab.max, taxableIncome);
        const taxableInSlab = slabEnd - slabStart + 1;
        const taxInSlab = taxableInSlab * slab.rate;
        
        totalTax += taxInSlab;
        
        slabBreakdown.push({
            min: slab.min,
            max: slab.max,
            rate: slab.rate,
            taxableAmount: taxableInSlab,
            taxAmount: taxInSlab,
            applied: taxableInSlab > 0
        });
        
        // If income is within this slab, we're done
        if (taxableIncome <= slab.max) {
            // Add remaining slabs as not applied
            for (let j = i + 1; j < TAX_CONFIG.TAX_SLABS.length; j++) {
                const remainingSlab = TAX_CONFIG.TAX_SLABS[j];
                slabBreakdown.push({
                    min: remainingSlab.min,
                    max: remainingSlab.max,
                    rate: remainingSlab.rate,
                    taxableAmount: 0,
                    taxAmount: 0,
                    applied: false
                });
            }
            break;
        }
    }
    
    return { totalTax, slabBreakdown };
}

// Calculate Rebate
function calculateRebate(taxableIncome, investmentAmount) {
    const rebate3Percent = taxableIncome * TAX_CONFIG.REBATE_RATE_TAXABLE;
    const rebate15Percent = investmentAmount * TAX_CONFIG.REBATE_RATE_INVESTMENT;
    const maxRebate = TAX_CONFIG.MAX_REBATE;
    
    // Select minimum of the three
    const selectedRebate = Math.min(rebate3Percent, rebate15Percent, maxRebate);
    
    return {
        rebate3Percent,
        rebate15Percent,
        maxRebate,
        selectedRebate,
        investmentProvided: investmentAmount > 0
    };
}

// Calculate Investment Analysis
function calculateInvestmentAnalysis(grossIncome, currentInvestment, taxableIncome, totalTax, rebateDetails) {
    // Calculate the rebate options
    const rebate3Percent = taxableIncome * TAX_CONFIG.REBATE_RATE_TAXABLE;
    const maxRebateCeiling = TAX_CONFIG.MAX_REBATE;
    
    // To get maximum rebate, we need to find the minimum investment where 15% of investment >= 3% of taxable income
    // Formula: 15% of Investment >= 3% of Taxable Income
    // Investment >= (3% of Taxable Income) / 15%
    // Investment >= (0.03 * Taxable Income) / 0.15
    // Investment >= 0.2 * Taxable Income (which is 20% of taxable income)
    
    const minInvestmentForMaxRebate = rebate3Percent / TAX_CONFIG.REBATE_RATE_INVESTMENT;
    
    // The maximum rebate is the minimum of (3% of taxable, 1M ceiling)
    const maxPossibleRebate = Math.min(rebate3Percent, maxRebateCeiling);
    
    // Current rebate (what they're getting now)
    const currentRebate = rebateDetails.selectedRebate;
    
    // Potential additional savings if they invest to get max rebate
    const potentialExtraSavings = Math.max(0, maxPossibleRebate - currentRebate);
    
    // Investment shortfall to reach minimum needed
    const investmentShortfall = Math.max(0, minInvestmentForMaxRebate - currentInvestment);
    
    return {
        minInvestmentForMaxRebate,
        currentInvestment,
        maxPossibleRebate,
        currentRebate,
        potentialExtraSavings,
        investmentShortfall,
        isMaxedOut: currentInvestment >= minInvestmentForMaxRebate
    };
}

// Display Results
function displayResults(results) {
    // Show results section
    elements.resultsSection.classList.remove('hidden');
    
    // Update summary
    document.getElementById('netPayable').textContent = formatCurrency(results.netPayable);
    document.getElementById('effectiveRate').textContent = `${results.effectiveRate.toFixed(2)}%`;
    
    // Update investment analysis
    const inv = results.investmentAnalysis;
    document.getElementById('maxInvestmentLimit').textContent = formatCurrency(inv.minInvestmentForMaxRebate);
    document.getElementById('yourInvestment').textContent = formatCurrency(inv.currentInvestment);
    document.getElementById('potentialSavings').textContent = formatCurrency(inv.potentialExtraSavings);
    
    // Update breakdown
    document.getElementById('grossIncomeBreakdown').textContent = formatCurrency(results.grossIncome);
    document.getElementById('exemptedIncome').textContent = formatCurrency(results.exemptedIncome);
    document.getElementById('taxableIncome').textContent = formatCurrency(results.taxableIncome);
    document.getElementById('taxBeforeRebate').textContent = formatCurrency(results.totalTax);
    document.getElementById('rebateAmount').textContent = formatCurrency(results.rebate);
    document.getElementById('finalTax').textContent = formatCurrency(results.finalTax);
    document.getElementById('employerPaid').textContent = formatCurrency(results.employerDeposit);
    document.getElementById('remainingDue').textContent = formatCurrency(results.netPayable);
    
    // Display slab breakdown
    displaySlabBreakdown(results.slabBreakdown);
    
    // Display rebate details
    displayRebateDetails(results.rebateDetails);
    
    // Handle special cases
    if (results.isRefund) {
        const remainingDueElement = document.getElementById('remainingDue');
        remainingDueElement.textContent = formatCurrency(results.employerDeposit - results.finalTax);
        remainingDueElement.parentElement.querySelector('span:first-child').textContent = 
            translations[currentLanguage].refundScenario;
    }
    
    if (results.totalTax === 0) {
        const netPayableElement = document.getElementById('netPayable');
        netPayableElement.textContent = translations[currentLanguage].noTaxDue;
    }
}

// Display Slab Breakdown
function displaySlabBreakdown(slabs) {
    const container = document.getElementById('slabBreakdown');
    container.innerHTML = '';
    
    slabs.forEach(slab => {
        const slabItem = document.createElement('div');
        slabItem.className = `slab-item ${slab.applied ? 'applied' : ''}`;
        
        const rangeText = slab.max === Infinity 
            ? `${formatNumber(slab.min)}+`
            : `${formatNumber(slab.min)} - ${formatNumber(slab.max)}`;
        
        slabItem.innerHTML = `
            <span class="slab-range">${rangeText}</span>
            <span class="slab-rate">${(slab.rate * 100).toFixed(0)}%</span>
            <span class="slab-tax">${formatCurrency(slab.taxAmount)}</span>
        `;
        
        container.appendChild(slabItem);
    });
}

// Display Rebate Details
function displayRebateDetails(rebateDetails) {
    const container = document.getElementById('rebateDetailsContent');
    
    const t = translations[currentLanguage];
    
    container.innerHTML = `
        <p><strong>${t.rebateCalc3Percent}:</strong> ${formatCurrency(rebateDetails.rebate3Percent)}</p>
        <p><strong>${t.rebateCalc15Percent}:</strong> ${formatCurrency(rebateDetails.rebate15Percent)}</p>
        <p><strong>${t.rebateCalcMax}:</strong> ${formatCurrency(rebateDetails.maxRebate)}</p>
        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid rgba(6, 182, 212, 0.3);">
            <strong>${t.rebateSelected}:</strong> ${formatCurrency(rebateDetails.selectedRebate)}
        </p>
    `;
}

// Handle Reset
function handleReset() {
    elements.form.reset();
    elements.resultsSection.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Language Toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    saveLanguagePreference();
    applyTranslations();
    
    // Recalculate if results are visible
    if (!elements.resultsSection.classList.contains('hidden')) {
        const grossIncome = parseFormattedNumber(elements.grossIncome.value);
        if (grossIncome > 0) {
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
    const placeholderValue = '0';
    elements.grossIncome.placeholder = placeholderValue;
    elements.investmentAmount.placeholder = placeholderValue;
    elements.employerDeposit.placeholder = placeholderValue;
}

// Save Language Preference
function saveLanguagePreference() {
    localStorage.setItem('taxCalcLanguage', currentLanguage);
}

// Load Language Preference
function loadLanguagePreference() {
    const saved = localStorage.getItem('taxCalcLanguage');
    if (saved && (saved === 'en' || saved === 'bn')) {
        currentLanguage = saved;
    }
}

// Initialize on DOM Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
