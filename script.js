// Translation Data
const translations = {
    en: {
        mainTitle: "Finsource Income Tax Calculator",
        fiscalYear: "Fiscal Year 2025-26",
        incomeTitle: "Income Information",
        labelGender: "Gender",
        genderMaleBtn: "Male",
        genderFemaleBtn: "Female",
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
        labelNetPayable: "You Need to Pay",
        labelEffectiveRate: "Effective Tax Rate",
        labelMinInvestmentNeeded: "Min Investment for Max Rebate",
        labelYourInvestment: "Your Investment",
        labelPotentialSavings: "Extra Savings If You Invest",
        labelTotalTaxToGov: "Total Tax to Government",
        labelEmployerPaid: "Employer Paid",
        helperTotalTax: "After rebate deduction",
        helperEmployer: "Already deposited",
        helperMinInvest: "Recommended amount",
        helperSavings: "By investing shortfall",
        alertTitle: "Investment Opportunity",
        alertMessagePart1: "If you invested",
        alertMessagePart2: "more, you could save an additional",
        alertMessagePart3: "in taxes!",
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
        footerCopyright: "© 2025 Finsource Income Tax Calculator | FY 2025-26",
        langText: "বাংলা",
        slabRange: "Range",
        slabRate: "Rate",
        slabTax: "Tax",
        rebateCalc3Percent: "3% of Taxable Income",
        rebateCalc15Percent: "15% of Investment",
        rebateCalcMax: "Maximum Rebate Limit",
        rebateSelected: "Selected Rebate (Minimum)",
        noTaxDue: "No tax payable - Your income is below the taxable threshold",
        refundScenario: "Refund Due - Employer deposited more than required",
        modalSlabTitle: "Tax Slab Breakdown",
        modalRebateTitle: "Rebate Calculation",
        modalExemptedTitle: "Exempted Income Calculation",
        rebateInfoText: "Want to maximize your rebate in next financial year?",
        rebateInfoLink: "Click Here"
    },
    bn: {
        mainTitle: "ফিনসোর্স আয়কর ক্যালকুলেটর",
        fiscalYear: "অর্থবছর ২০২৫-২৬",
        incomeTitle: "আয়ের তথ্য",
        labelGender: "লিঙ্গ",
        genderMaleBtn: "পুরুষ",
        genderFemaleBtn: "মহিলা",
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
        labelNetPayable: "আপনাকে পরিশোধ করতে হবে",
        labelEffectiveRate: "কার্যকর কর হার",
        labelMinInvestmentNeeded: "সর্বোচ্চ রেয়াতের জন্য ন্যূনতম বিনিয়োগ",
        labelYourInvestment: "আপনার বিনিয়োগ",
        labelPotentialSavings: "বিনিয়োগ করলে অতিরিক্ত সাশ্রয়",
        labelTotalTaxToGov: "সরকারকে মোট কর",
        labelEmployerPaid: "নিয়োগকর্তা পরিশোধিত",
        helperTotalTax: "রেয়াত বাদে",
        helperEmployer: "ইতিমধ্যে জমাকৃত",
        helperMinInvest: "প্রস্তাবিত পরিমাণ",
        helperSavings: "ঘাটতি বিনিয়োগ করে",
        alertTitle: "বিনিয়োগের সুযোগ",
        alertMessagePart1: "আপনি যদি ",
        alertMessagePart2: "বিনিয়োগ করতেন তাহলে অতিরিক্ত ",
        alertMessagePart3: "টাকা সাশ্রয় করতে পারতেন!",
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
        infoSlabTitle: "২. কর স্ল্যাব",
        infoSlabText: "করযোগ্য আয়ের উপর ০% থেকে ৩০% পর্যন্ত ক্রমান্বয়ে কর হিসাব করা হয়",
        infoRebateTitle: "৩. কর রেয়াত",
        infoRebateText: "এই তিনটির মধ্যে যেটি কম: করযোগ্য আয়ের ৩%, প্রকৃত বিনিয়োগের ১৫%, অথবা ১০,০০,০০০ টাকা",
        infoFinalTitle: "৪. নিট প্রদেয়",
        infoFinalText: "চূড়ান্ত কর বিয়োগ নিয়োগকর্তা জমাকৃত = আপনার অবশিষ্ট কর দায়",
        footerDisclaimer: "ডিসক্লেইমার: এই ক্যালকুলেটরটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে। সঠিক কর দাখিলের জন্য একজন কর পেশাদারের সাথে পরামর্শ করুন।",
        footerCopyright: "© ২০২৫ ফিনসোর্স আয়কর ক্যালকুলেটর | অর্থবছর ২০২৫-২৬",
        langText: "English",
        slabRange: "সীমা",
        slabRate: "হার",
        slabTax: "কর",
        rebateCalc3Percent: "করযোগ্য আয়ের ৩%",
        rebateCalc15Percent: "বিনিয়োগের ১৫%",
        rebateCalcMax: "সর্বোচ্চ রেয়াত সীমা",
        rebateSelected: "নির্বাচিত রেয়াত (ন্যূনতম)",
        noTaxDue: "কোন কর প্রদেয় নয় - আপনার আয় করযোগ্য সীমার নিচে",
        refundScenario: "ফেরত প্রদেয় - নিয়োগকর্তা প্রয়োজনের চেয়ে বেশি জমা করেছেন",
        modalSlabTitle: "কর স্ল্যাব বিবরণ",
        modalRebateTitle: "রেয়াত গণনা",
        modalExemptedTitle: "করমুক্ত আয় গণনা",
        rebateInfoText: "পরবর্তী অর্থবছরে আপনার রেয়াত সর্বোচ্চ করতে চান?",
        rebateInfoLink: "এখানে ক্লিক করুন"
    }
};

// State Management
let currentLanguage = 'en';
let TAX_CONFIG = null;

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

// Load Tax Configuration
async function loadTaxConfig() {
    try {
        const response = await fetch('tax-config-fy-2025-26.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const config = await response.json();

        // Convert "Infinity" string back to Infinity value for both male and female slabs
        config.TAX_SLABS_MALE = config.TAX_SLABS_MALE.map(slab => ({
            ...slab,
            max: slab.max === "Infinity" ? Infinity : slab.max
        }));
        
        config.TAX_SLABS_FEMALE = config.TAX_SLABS_FEMALE.map(slab => ({
            ...slab,
            max: slab.max === "Infinity" ? Infinity : slab.max
        }));

        TAX_CONFIG = config;
        return true;
    } catch (error) {
        console.error('Failed to load tax configuration:', error);
        alert('Failed to load tax configuration. Please check your internet connection and try again.');
        return false;
    }
}

// Initialize Application
async function init() {
    const configLoaded = await loadTaxConfig();
    if (!configLoaded) {
        return; // Stop initialization if config failed to load
    }

    setupEventListeners();
    loadLanguagePreference();
    // Apply translations after loading language preference
    applyTranslations();
}

// Event Listeners
function setupEventListeners() {
    elements.form.addEventListener('submit', handleCalculate);
    elements.resetBtn.addEventListener('click', handleReset);
    elements.langToggle.addEventListener('click', toggleLanguage);
    
    // Gender button listeners
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', handleGenderChange);
    });
    
    // Format input as user types
    [elements.grossIncome, elements.investmentAmount, elements.employerDeposit].forEach(input => {
        input.addEventListener('input', handleInputFormat);
        input.addEventListener('blur', handleInputBlur);
    });
}

// Handle Gender Change
function handleGenderChange(e) {
    // Remove active class from all buttons
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // If results are already displayed, recalculate with new gender
    if (!elements.resultsSection.classList.contains('hidden')) {
        handleCalculate(new Event('submit'));
    }
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
    const gender = document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'male';
    
    // Validate
    if (grossIncome <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please enter a valid gross income' 
            : 'দয়া করে একটি বৈধ মোট আয় লিখুন');
        return;
    }
    
    // Calculate
    const results = calculateTax(grossIncome, investmentAmount, employerDeposit, gender);
    
    // Display results
    displayResults(results);
    
    // Scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Tax Calculation Engine
function calculateTax(grossIncome, investmentAmount, employerDeposit, gender = 'male') {
    // 1. Calculate Exempted Income
    const exemptedIncome = Math.min(
        grossIncome / TAX_CONFIG.EXEMPTION_DIVISOR,
        TAX_CONFIG.MAX_EXEMPTION
    );
    
    // 2. Calculate Taxable Income
    const taxableIncome = Math.max(0, grossIncome - exemptedIncome);
    
    // 3. Calculate Tax Before Rebate (Progressive Slabs)
    const { totalTax, slabBreakdown } = calculateProgressiveTax(taxableIncome, gender);
    
    // 4. Calculate Rebate
    const rebateDetails = calculateRebate(taxableIncome, investmentAmount);
    const rebate = rebateDetails.selectedRebate;
    
    // 5. Calculate Final Tax
    let finalTax = Math.max(0, totalTax - rebate);
    
    // Apply minimum tax requirement: final tax should be at least 5000 taka if tax before rebate > 0
    if (totalTax > 0 && finalTax < 5000) {
        finalTax = 5000;
    }
    
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
function calculateProgressiveTax(taxableIncome, gender = 'male') {
    const taxSlabs = gender === 'female' ? TAX_CONFIG.TAX_SLABS_FEMALE : TAX_CONFIG.TAX_SLABS_MALE;
    
    let totalTax = 0;
    const slabBreakdown = [];
    
    for (let i = 0; i < taxSlabs.length; i++) {
        const slab = taxSlabs[i];
        
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
            for (let j = i + 1; j < taxSlabs.length; j++) {
                const remainingSlab = taxSlabs[j];
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
    
    const inv = results.investmentAnalysis;
    
    // Update main summary cards - Numbers first approach
    document.getElementById('netPayable').textContent = formatCurrency(results.netPayable);
    document.getElementById('finalTaxDisplay').textContent = formatCurrency(results.finalTax);
    document.getElementById('employerPaidDisplay').textContent = formatCurrency(results.employerDeposit);
    document.getElementById('minInvestmentDisplay').textContent = formatCurrency(inv.minInvestmentForMaxRebate);
    
    // Show investment alert if there's a shortfall and potential savings
    const alertBox = document.getElementById('investmentGapAlert');
    if (inv.investmentShortfall > 0 && inv.potentialExtraSavings > 0) {
        alertBox.classList.remove('hidden');
        document.getElementById('investmentShortfall').textContent = formatCurrency(inv.investmentShortfall);
        document.getElementById('additionalSavings').textContent = formatCurrency(inv.potentialExtraSavings);
        
        // Update alert message with translation
        const t = translations[currentLanguage];
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.innerHTML = `${t.alertMessagePart1} <span id="investmentShortfall">${formatCurrency(inv.investmentShortfall)}</span> ${t.alertMessagePart2} <span id="additionalSavings">${formatCurrency(inv.potentialExtraSavings)}</span> ${t.alertMessagePart3}`;
    } else {
        alertBox.classList.add('hidden');
    }
    
    // Update breakdown
    document.getElementById('grossIncomeBreakdown').textContent = formatCurrency(results.grossIncome);
    document.getElementById('exemptedIncome').textContent = formatCurrency(results.exemptedIncome);
    document.getElementById('taxableIncome').textContent = formatCurrency(results.taxableIncome);
    document.getElementById('taxBeforeRebate').textContent = formatCurrency(results.totalTax);
    document.getElementById('rebateAmount').textContent = formatCurrency(results.rebate);
    document.getElementById('finalTax').textContent = formatCurrency(results.finalTax);
    document.getElementById('employerPaid').textContent = formatCurrency(results.employerDeposit);
    document.getElementById('remainingDue').textContent = formatCurrency(results.netPayable);
    
    // Handle special cases
    if (results.isRefund && results.employerDeposit > results.finalTax) {
        const remainingDueElement = document.getElementById('remainingDue');
        const refundAmount = results.employerDeposit - results.finalTax;
        remainingDueElement.textContent = formatCurrency(refundAmount);
        remainingDueElement.parentElement.querySelector('span:first-child').textContent = 
            translations[currentLanguage].refundScenario;
    }
    
    if (results.totalTax === 0) {
        const netPayableElement = document.getElementById('netPayable');
        netPayableElement.textContent = '৳ 0';
    }
}

// Modal Functions for Slab Breakdown
function showSlabBreakdown() {
    const modal = document.getElementById('slabModal');
    const modalContent = document.getElementById('modalSlabBreakdown');
    
    // Get current results to display slab breakdown
    const grossIncome = parseFormattedNumber(elements.grossIncome.value);
    if (grossIncome <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please calculate tax first to view slab breakdown' 
            : 'স্ল্যাব বিবরণ দেখার জন্য প্রথমে কর গণনা করুন');
        return;
    }
    
    const results = calculateTax(grossIncome, 
        parseFormattedNumber(elements.investmentAmount.value), 
        parseFormattedNumber(elements.employerDeposit.value),
        document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'male');
    
    // Populate modal with slab breakdown
    modalContent.innerHTML = '';
    
    let totalTax = 0;
    
    // Create table structure
    const table = document.createElement('table');
    table.className = 'slab-table';
    
    // Table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>${currentLanguage === 'en' ? 'Range' : 'সীমা'}</th>
        <th>${currentLanguage === 'en' ? 'Rate' : 'হার'}</th>
        <th>${currentLanguage === 'en' ? 'Calculated Tax' : 'গণনাকৃত কর'}</th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Table body
    const tbody = document.createElement('tbody');
    
    results.slabBreakdown.forEach(slab => {
        const row = document.createElement('tr');
        row.className = slab.applied ? 'applied' : '';
        
        const rangeText = slab.max === Infinity 
            ? `${formatNumber(slab.min)}+`
            : `${formatNumber(slab.min)} - ${formatNumber(slab.max)}`;
        
        row.innerHTML = `
            <td class="slab-range">${rangeText}</td>
            <td class="slab-rate">${(slab.rate * 100).toFixed(0)}%</td>
            <td class="slab-tax">${formatCurrency(slab.taxAmount)}</td>
        `;
        
        tbody.appendChild(row);
        totalTax += slab.taxAmount;
    });
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    totalRow.innerHTML = `
        <td colspan="2" class="total-label">${currentLanguage === 'en' ? 'Total Tax' : 'মোট কর'}</td>
        <td class="total-amount">${formatCurrency(totalTax)}</td>
    `;
    tbody.appendChild(totalRow);
    
    table.appendChild(tbody);
    modalContent.appendChild(table);
    
    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeSlabModal() {
    const modal = document.getElementById('slabModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal Functions for Rebate Details
function showRebateDetails() {
    const modal = document.getElementById('rebateModal');
    const modalContent = document.getElementById('modalRebateDetails');
    
    // Get current results to display rebate details
    const grossIncome = parseFormattedNumber(elements.grossIncome.value);
    if (grossIncome <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please calculate tax first to view rebate details' 
            : 'রেয়াত বিবরণ দেখার জন্য প্রথমে কর গণনা করুন');
        return;
    }
    
    const results = calculateTax(grossIncome, 
        parseFormattedNumber(elements.investmentAmount.value), 
        parseFormattedNumber(elements.employerDeposit.value),
        document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'male');
    
    // Populate modal with rebate details
    const t = translations[currentLanguage];
    
    modalContent.innerHTML = `
        <p><strong>${t.rebateCalc3Percent}:</strong> ${formatCurrency(results.rebateDetails.rebate3Percent)}</p>
        <p><strong>${t.rebateCalc15Percent}:</strong> ${formatCurrency(results.rebateDetails.rebate15Percent)}</p>
        <p><strong>${t.rebateCalcMax}:</strong> ${formatCurrency(results.rebateDetails.maxRebate)}</p>
        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid rgba(6, 182, 212, 0.3);">
            <strong>${t.rebateSelected}:</strong> ${formatCurrency(results.rebateDetails.selectedRebate)}
        </p>
    `;
    
    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeRebateModal() {
    const modal = document.getElementById('rebateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal Functions for Exempted Income
function showExemptedIncome() {
    const modal = document.getElementById('exemptedModal');
    const modalContent = document.getElementById('modalExemptedDetails');
    
    // Get current results to display exempted income calculation
    const grossIncome = parseFormattedNumber(elements.grossIncome.value);
    if (grossIncome <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please calculate tax first to view exempted income details' 
            : 'করমুক্ত আয়ের বিবরণ দেখার জন্য প্রথমে কর গণনা করুন');
        return;
    }
    
    const results = calculateTax(grossIncome, 
        parseFormattedNumber(elements.investmentAmount.value), 
        parseFormattedNumber(elements.employerDeposit.value),
        document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'male');
    
    // Calculate the two options
    const option1 = grossIncome / TAX_CONFIG.EXEMPTION_DIVISOR;
    const option2 = TAX_CONFIG.MAX_EXEMPTION;
    const exemptedIncome = Math.min(option1, option2);
    
    // Populate modal with exempted income calculation
    const t = translations[currentLanguage];
    
    modalContent.innerHTML = `
        <div class="calculation-step">
            <h4>${currentLanguage === 'en' ? 'Option 1: Gross Income ÷ 3' : 'বিকল্প ১: মোট আয় ÷ ৩'}</h4>
            <p>${formatCurrency(grossIncome)} ÷ 3 = ${formatCurrency(option1)}</p>
        </div>
        
        <div class="calculation-step">
            <h4>${currentLanguage === 'en' ? 'Option 2: Maximum Exemption Limit' : 'বিকল্প ২: সর্বোচ্চ করমুক্ত সীমা'}</h4>
            <p>${formatCurrency(TAX_CONFIG.MAX_EXEMPTION)}</p>
        </div>
        
        <div class="final-result">
            <p>${currentLanguage === 'en' ? 'Exempted Income (Minimum of above)' : 'করমুক্ত আয় (উপরের মধ্যে সর্বনিম্ন)'}</p>
            <div class="amount">${formatCurrency(exemptedIncome)}</div>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeExemptedModal() {
    const modal = document.getElementById('exemptedModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside (update to handle all modals)
window.onclick = function(event) {
    const slabModal = document.getElementById('slabModal');
    const rebateModal = document.getElementById('rebateModal');
    const exemptedModal = document.getElementById('exemptedModal');
    
    if (event.target === slabModal) {
        closeSlabModal();
    }
    if (event.target === rebateModal) {
        closeRebateModal();
    }
    if (event.target === exemptedModal) {
        closeExemptedModal();
    }
}

// Close modal on Escape key (update to handle all modals)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const slabModal = document.getElementById('slabModal');
        const rebateModal = document.getElementById('rebateModal');
        const exemptedModal = document.getElementById('exemptedModal');
        
        if (slabModal.style.display === 'block') {
            closeSlabModal();
        }
        if (rebateModal.style.display === 'block') {
            closeRebateModal();
        }
        if (exemptedModal.style.display === 'block') {
            closeExemptedModal();
        }
    }
});

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
    
    // Update language toggle button text
    document.getElementById('langText').textContent = t.langText;
}

// Save Language Preference
function saveLanguagePreference() {
    localStorage.setItem('taxCalcLanguage', currentLanguage);
    // Also save to shared storage for rebate calculator
    localStorage.setItem('sharedLanguage', currentLanguage);
}

// Load Language Preference
function loadLanguagePreference() {
    // Try to load from shared storage first (from rebate calculator)
    let saved = localStorage.getItem('sharedLanguage');
    console.log('Loading shared language:', saved);
    if (!saved) {
        // Fallback to own storage
        saved = localStorage.getItem('taxCalcLanguage');
        console.log('Fallback to own language:', saved);
    }
    if (saved && (saved === 'en' || saved === 'bn')) {
        currentLanguage = saved;
        console.log('Set current language to:', currentLanguage);
    }
}

// Initialize on DOM Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
} else {
    init();
}
