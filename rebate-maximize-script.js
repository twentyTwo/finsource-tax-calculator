// Translation Data
const translations = {
    en: {
    mainTitle: "Finsource Rebate Maximize Calculator",
        fiscalYear: "Plan Your Investments for Maximum Tax Rebate",
        privacyNote: "Your privacy is protected. This calculator runs 100% locally in your browser and no data is ever sent to a server. The code is open-source for full transparency.",
        backToMain: "Back to Main Calculator",
        descriptionText1: "Use this calculator to plan your investments for the next financial year to maximize your tax rebate. Enter your current monthly salary to see how much you need to invest.",
        approximateDisclaimer: "Why approximate? Because salary increment typically occurs in August, and July's salary is received at the old rate.",
        incomeTitle: "Income Information",
        labelMonthlySalary: "Current Monthly Gross Salary (BDT)",
        helpMonthlySalary: "Enter your current monthly gross salary",
        labelMonthsWorked: "Months Worked This Financial Year",
        helpMonthsWorked: "Default 12. New joiners enter actual months worked.",
        settingsTitle: "⚙️ Calculation Settings",
        labelPerfBonusCount: "Performance Bonuses",
        helpPerfBonusCount: "Each bonus = 20% of monthly gross",
        labelFestivalBonusCount: "Festival Bonuses",
        helpFestivalBonusCount: "Each bonus = 60% of monthly gross",
        labelExtraDays: "Extra Salary Days",
        helpExtraDays: "Extra days of salary paid per year",
        labelJulySalary: "Previous Year's July Gross Salary (BDT)",
        helpJulySalary: "Your July salary before the August increment. Defaults to current monthly salary if left blank.",
        badgeOptionalJuly: "Optional",
        btnCalculate: "Calculate Investment Needed",
        btnReset: "Reset",
        resultsTitle: "Investment Planning Results",
        tableComponent: "Component",
        tableCalculation: "Calculation",
        tableAmount: "Amount (BDT)",
        yearlySalaryLabel: "Yearly Salary",
        yearlySalaryCalc: "Monthly Salary × 11 + July Salary",
        thirteenthSalaryLabel: "Performance Bonus",
        thirteenthSalaryCalc: "Monthly Salary × 0.4",
        festivalBonusLabel: "Festival Bonus",
        festivalBonusCalc: "Monthly Salary × 1.2",
        extraSalaryLabel: "Extra Salary (16 Days)",
        extraSalaryCalc: "Monthly Salary × 16/30",
        employerPFLabel: "Employer PF Contribution",
        employerPFCalc: "Yearly Salary × 6%",
        grossSalaryLabel: "Total Yearly Income",
        grossSalaryCalc1: "Sum of above",
        exemptedIncomeLabel: "Exempted Income",
        exemptedIncomeCalc: "Minimum of one-third of Gross or ৳ 5,00,000, whichever is lower",
        taxableIncomeLabel: "Taxable Income",
        taxableIncomeCalc: "Gross - Exempted Income",
        maxInvestLimitLabel: "Max Investment Limit",
        maxInvestLimitCalc: "(Taxable Income × 0.03) ÷ 0.1",
        providentFundLabel: "Provident Fund",
        providentFundCalc: "(Monthly × 11 + July) × 12%",
        additionalInvestmentLabel: "",
        additionalInvestmentCalc: "More Investment Needed",
        alreadyInvestedBadge: "Already Invested",
        otherInvestmentsLabel: "Other Investments",
        otherInvestmentsCalc: "",
        otherInvestedBadge: "Already Invested",
        investmentTrackerTitle: "Your Existing Investments",
        investmentTrackerDesc: "Add investments you have already made this year. These will be subtracted from what you still need to invest.",
        btnAddInvestment: "+ Add Investment",
        totalInvestmentsLabel: "Total Existing Investments",
        formulaExplanation: "",
        footerDisclaimer: "Disclaimer: This calculator is for informational purposes only. Please consult with a tax professional for accurate tax planning.",
        footerCopyright: "© 2025 | FY 2025-26",
        langText: "বাংলা"
    },
    bn: {
    mainTitle: "ফিনসোর্স কর রেয়াত বিনিয়োগ পরিকল্পনা",
        fiscalYear: "সর্বোচ্চ কর রেয়াতের জন্য আপনার বিনিয়োগ পরিকল্পনা করুন",
        privacyNote: "আপনার গোপনীয়তা সুরক্ষিত। এই ক্যালকুলেটরটি ১০০% স্থানীয়ভাবে আপনার ব্রাউজারে চলে এবং কোনো ডেটা সার্ভারে পাঠানো হয় না। সম্পূর্ণ স্বচ্ছতার জন্য কোডটি ওপেন-সোর্স করা আছে।",
        backToMain: "প্রধান আয়কর ক্যালকুলেটরে ফিরে যান",
        descriptionText1: "সর্বোচ্চ কর রেয়াতের জন্য আপনার বিনিয়োগ পরিকল্পনা করুন",
        approximateDisclaimer: "কিছু হিসাব আনুমানিক, কারণ বেতন বৃদ্ধি সাধারণত আগস্ট মাসে হয় এবং জুলাই মাসের বেতন পুরনো হারে পাওয়া যায়।",
        incomeTitle: "আয়ের তথ্য",
        labelMonthlySalary: "বর্তমান গ্রস মাসিক বেতন (টাকা)",
        helpMonthlySalary: "আপনার বর্তমান গ্রস মাসিক বেতন লিখুন",
        labelMonthsWorked: "এই অর্থবছরে কাজের মাস",
        helpMonthsWorked: "ডিফল্ট ১২। নতুন কর্মীরা প্রকৃত মাস লিখুন।",
        settingsTitle: "⚙️ গণনার সেটিংস",
        labelPerfBonusCount: "পারফরম্যান্স বোনাস",
        helpPerfBonusCount: "প্রতিটি বোনাস = মাসিক বেতনের ২০%",
        labelFestivalBonusCount: "উৎসব বোনাস",
        helpFestivalBonusCount: "প্রতিটি বোনাস = মাসিক বেতনের ৬০%",
        labelExtraDays: "অতিরিক্ত বেতনের দিন",
        helpExtraDays: "বছরে অতিরিক্ত বেতন দিনের সংখ্যা",
        labelJulySalary: "গত বছরের জুলাই মাসের গ্রস বেতন (টাকা)",
        helpJulySalary: "আগস্টের বৃদ্ধির আগে আপনার জুলাই মাসের বেতন। খালি রাখলে বর্তমান মাসিক বেতন ব্যবহার করা হবে।",
        badgeOptionalJuly: "ঐচ্ছিক",
        btnCalculate: "প্রয়োজনীয় বিনিয়োগ গণনা করুন",
        btnReset: "রিসেট",
        resultsTitle: "বিনিয়োগ পরিকল্পনার ফলাফল",
        tableComponent: "উপাদান",
        tableCalculation: "গণনা",
        tableAmount: "পরিমাণ (টাকা)",
        yearlySalaryLabel: "বার্ষিক বেতন",
        yearlySalaryCalc: "মাসিক বেতন × ১১ + জুলাই বেতন",
        thirteenthSalaryLabel: "পারফরম্যান্স বোনাস",
        thirteenthSalaryCalc: "মাসিক বেতন × 0.৪",
        festivalBonusLabel: "উৎসব বোনাস",
        festivalBonusCalc: "মাসিক বেতন × ১.২",
        extraSalaryLabel: "অতিরিক্ত বেতন (১৬ দিন)",
        extraSalaryCalc: "মাসিক বেতন × ১৬/৩০",
        employerPFLabel: "নিয়োগকর্তার পিএফ যোগদান",
        employerPFCalc: "বার্ষিক বেতন × ৬%",
        grossSalaryLabel: "মোট বার্ষিক আয়",
        grossSalaryCalc1: "",
        exemptedIncomeLabel: "করমুক্ত আয়",
        exemptedIncomeCalc: "মোট বেতন এর এক-তৃতীয়াংশ অথবা ৫০০০০০ এর মধ্যে যেইটা ছোট",
        taxableIncomeLabel: "করযোগ্য আয়",
        taxableIncomeCalc: "মোট বেতন - করমুক্ত আয়",
        maxInvestLimitLabel: "সর্বোচ্চ বিনিয়োগ সীমা",
        maxInvestLimitCalc: "(করযোগ্য আয় × ০.০৩) ÷ ০.১",
        providentFundLabel: "ভবিষ্য তহবিল (প্রভিডেন্ট ফান্ড)",
        providentFundCalc: "(মাসিক × ১১ + জুলাই) × ১২%",
        additionalInvestmentLabel: "",
        additionalInvestmentCalc: "আরও বিনিয়োগ প্রয়োজন",
        alreadyInvestedBadge: "ইতিমধ্যে বিনিয়োগ হয়েছে",
        otherInvestmentsLabel: "অন্য বিনিয়োগ",
        otherInvestmentsCalc: "",
        otherInvestedBadge: "ইতিমধ্যে বিনিয়োগ হয়েছে",
        investmentTrackerTitle: "আপনার বর্তমান বিনিয়োগ",
        investmentTrackerDesc: "এই বছর আপনি ইতিমধ্যে যে বিনিয়োগ করেছেন তা যোগ করুন। এগুলো আপনার আরো কতটা বিনিয়োগ প্রয়োজন তা থেকে বিয়োগ করা হবে।",
        btnAddInvestment: "+ বিনিয়োগ যোগ করুন",
        totalInvestmentsLabel: "মোট বিনিয়োগ",
        formulaExplanation: "",
        footerDisclaimer: "ডিসক্লেইমার: এই ক্যালকুলেটরটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে। সঠিক কর পরিকল্পনার জন্য একজন কর পেশাদারের সাথে পরামর্শ করুন।",
        footerCopyright: "© ২০২৫ ফিনসোর্স আয়কর ক্যালকুলেটর | অর্থবছর ২০২৫-২৬",
        langText: "English"
    }
};

// State Management
let currentLanguage = 'en';
let lastResults = null;

// Investment category options per language
const investmentCategories = {
    en: [
        { value: 'sanchaypatra',  label: 'Sanchaypatra' },
        { value: 'securities',    label: 'Securities' },
        { value: 'dps',           label: 'DPS (Deposit Pension Scheme)' },
        { value: 'lip',           label: 'Life Insurance Premium (LIP)' },
        { value: 'shareMarket',   label: 'Share Market Investment' },
        { value: 'other',         label: 'Other' }
    ],
    bn: [
        { value: 'sanchaypatra',  label: 'সঞ্চয়পত্র' },
        { value: 'securities',    label: 'সিকিউরিটিজ' },
        { value: 'dps',           label: 'ডিপিএস (ডিপোজিট পেনশন স্কিম)' },
        { value: 'lip',           label: 'জীবন বীমা প্রিমিয়াম (এলআইপি)' },
        { value: 'shareMarket',   label: 'শেয়ার বাজারে বিনিয়োগ' },
        { value: 'other',         label: 'অন্যান্য' }
    ]
};

// Investment limit rules (null = unlimited / informational only)
const INVESTMENT_LIMITS = {
    sanchaypatra: 500000,
    securities:   500000,
    dps:          120000,
    lip:          null,   // 1/10 of policy value — informational, no hard validation
    shareMarket:  null,   // unlimited
    other:        null
};

const INVESTMENT_LIMIT_LABELS = {
    en: {
        sanchaypatra: 'Max: ৳ 5,00,000',
        securities:   'Max: ৳ 5,00,000',
        dps:          'Max: ৳ 1,20,000',
        lip:          'Note: max = 1/10 of policy value (not validated here)',
        shareMarket:  'Unlimited',
        other:        ''
    },
    bn: {
        sanchaypatra: 'সর্বোচ্চ: ৳ ৫,০০,০০০',
        securities:   'সর্বোচ্চ: ৳ ৫,০০,০০০',
        dps:          'সর্বোচ্চ: ৳ ১,২০,০০০',
        lip:          'নোট: সর্বোচ্চ = পলিসি মূল্যের ১/১০ (এখানে যাচাই হবে না)',
        shareMarket:  'সীমাহীন',
        other:        ''
    }
};

// Constants (loaded from config; PROVIDENT_FUND_RATE is not in config)
let MAX_EXEMPTION = 500000;
let EXEMPTION_DIVISOR = 3;
let REBATE_RATE_TAXABLE = 0.03;
let REBATE_RATE_INVESTMENT = 0.10;
const PROVIDENT_FUND_RATE = 0.12;

// DOM Elements
const elements = {
    form: document.getElementById('rebateForm'),
    monthlySalary: document.getElementById('monthlySalary'),
    monthsWorked: document.getElementById('monthsWorked'),
    perfBonusCount: document.getElementById('perfBonusCount'),
    festivalBonusCount: document.getElementById('festivalBonusCount'),
    extraDays: document.getElementById('extraDays'),
    julySalary: document.getElementById('julySalary'),
    julySalaryGroup: document.getElementById('julySalaryGroup'),
    calculateBtn: document.getElementById('calculateBtn'),
    resetBtn: document.getElementById('resetBtn'),
    resultsSection: document.getElementById('resultsSection'),
    langToggle: document.getElementById('langToggle')
};

// Load tax config from JSON
async function loadConfig() {
    try {
        const response = await fetch('tax-config-fy-2025-26.json');
        const config = await response.json();
        MAX_EXEMPTION = config.MAX_EXEMPTION ?? MAX_EXEMPTION;
        EXEMPTION_DIVISOR = config.EXEMPTION_DIVISOR ?? EXEMPTION_DIVISOR;
        REBATE_RATE_TAXABLE = config.REBATE_RATE_TAXABLE ?? REBATE_RATE_TAXABLE;
        REBATE_RATE_INVESTMENT = config.REBATE_RATE_INVESTMENT ?? REBATE_RATE_INVESTMENT;
    } catch (e) {
        console.warn('Could not load tax config, using defaults.', e);
    }
}

// Initialize Application
async function init() {
    await loadConfig();
    setupEventListeners();
    currentLanguage = getLanguagePreference();
    saveLanguagePreference(currentLanguage);
    applyTranslations();
    updateSettingsSummary();
}

// Event Listeners
function setupEventListeners() {
    elements.form.addEventListener('submit', handleCalculate);
    elements.resetBtn.addEventListener('click', handleReset);
    elements.langToggle.addEventListener('click', toggleLanguage);

    // Event delegation — button lives inside the initially-hidden results section
    document.addEventListener('click', e => {
        if (e.target.closest('#addInvestmentBtn')) showAddInvestmentForm();
    });

    // Format input as user types
    elements.monthlySalary.addEventListener('input', handleInputFormat);
    elements.monthlySalary.addEventListener('blur', handleInputBlur);
    elements.julySalary.addEventListener('input', handleInputFormat);
    elements.julySalary.addEventListener('blur', handleInputBlur);

    // Toggle July salary visibility based on months worked
    elements.monthsWorked.addEventListener('change', toggleJulySalaryVisibility);
    elements.monthsWorked.addEventListener('input', toggleJulySalaryVisibility);

    // Collapsible settings toggle
    document.getElementById('settingsToggle').addEventListener('click', toggleSettings);
    document.getElementById('settingsToggle').addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSettings(); }
    });

    // Keep summary in sync when any setting changes
    ['monthsWorked', 'perfBonusCount', 'festivalBonusCount', 'extraDays'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateSettingsSummary);
        document.getElementById(id).addEventListener('change', updateSettingsSummary);
    });
}

// Toggle July salary field — only relevant for full-year employees
function toggleJulySalaryVisibility() {
    const months = parseInt(elements.monthsWorked.value, 10);
    elements.julySalaryGroup.style.display = (months === 12) ? '' : 'none';
}

// Toggle collapsible settings panel
function toggleSettings() {
    const section = document.getElementById('settingsSection');
    const toggle = document.getElementById('settingsToggle');
    const isOpen = section.classList.contains('open');
    section.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(!isOpen));
}

// Build one-line summary shown when settings are collapsed
function updateSettingsSummary() {
    const months = elements.monthsWorked.value || 12;
    const perf = elements.perfBonusCount.value || 0;
    const festival = elements.festivalBonusCount.value || 0;
    const days = elements.extraDays.value || 16;
    const isEN = currentLanguage === 'en';
    const text = isEN
        ? `${months} months · ${perf} perf · ${festival} festival · ${days} extra days`
        : `${months} মাস · ${perf} পারফ · ${festival} উৎসব · ${days} দিন`;
    document.getElementById('settingsSummary').textContent = text;
}

// Handle Calculate
function handleCalculate(e) {
    e.preventDefault();
    
    // Parse inputs
    const monthlySalary = parseFormattedNumber(elements.monthlySalary.value);
    const julySalary = parseFormattedNumber(elements.julySalary.value);
    const monthsWorked = Math.min(12, Math.max(1, parseInt(elements.monthsWorked.value, 10) || 12));
    const perfBonusCount = parseInt(elements.perfBonusCount.value, 10) || 0;
    const festivalBonusCount = parseInt(elements.festivalBonusCount.value, 10) || 0;
    const extraDays = Math.max(0, parseFloat(elements.extraDays.value) || 0);
    
    // Validate
    if (monthlySalary <= 0) {
        alert(currentLanguage === 'en' 
            ? 'Please enter a valid monthly salary' 
            : 'দয়া করে একটি বৈধ মাসিক বেতন লিখুন');
        return;
    }
    
    // Calculate
    const results = calculateInvestment(monthlySalary, julySalary, monthsWorked, perfBonusCount, festivalBonusCount, extraDays);
    
    // Display results
    displayResults(results);
    
    // Scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Investment Calculation Engine
function calculateInvestment(monthlySalary, julySalary = 0, monthsWorked = 12, perfBonusCount = 2, festivalBonusCount = 2, extraDays = 16) {
    let yearlySalary, thirteenthSalaryBonus, festivalBonus, extraSalary;

    if (monthsWorked === 12) {
        // Full year: 11 months at current rate + July at previous rate
        const effectiveJulySalary = julySalary > 0 ? julySalary : monthlySalary;
        yearlySalary = monthlySalary * 11 + effectiveJulySalary;
        thirteenthSalaryBonus = monthlySalary * perfBonusCount * 0.2;
        festivalBonus = monthlySalary * festivalBonusCount * 0.6;
        extraSalary = monthlySalary * (extraDays / 30);
    } else {
        // New joiner: only months worked, no annual bonuses (not yet completed a full cycle)
        yearlySalary = monthlySalary * monthsWorked;
        thirteenthSalaryBonus = 0;
        festivalBonus = 0;
        extraSalary = 0;
    }
    
    // 5. Employer PF contribution (6% of yearly salary, added to gross)
    const employerPF = yearlySalary * (PROVIDENT_FUND_RATE / 2);

    // 6. Calculate Gross Salary (Approximate)
    const grossSalary = yearlySalary + thirteenthSalaryBonus + festivalBonus + extraSalary + employerPF;
    
    // 6. Calculate Exempted Income
    const exemptedIncome = Math.min(grossSalary / EXEMPTION_DIVISOR, MAX_EXEMPTION);
    
    // 7. Calculate Taxable Income
    const taxableIncome = Math.max(0, grossSalary - exemptedIncome);
    
    // 8. Calculate Max Investment Limit
    // Formula: (Taxable Income × REBATE_RATE_TAXABLE) ÷ REBATE_RATE_INVESTMENT
    const maxInvestLimit = taxableIncome * (REBATE_RATE_TAXABLE / REBATE_RATE_INVESTMENT);
    
    // 9. Calculate Provident Fund: 12% of yearly salary (11 × current + 1 × July)
    const providentFund = yearlySalary * PROVIDENT_FUND_RATE;
    
    // 10. Calculate Additional Investment Needed
    const additionalInvestment = Math.max(0, maxInvestLimit - providentFund);
    
    return {
        monthlySalary,
        monthsWorked,
        perfBonusCount,
        festivalBonusCount,
        extraDays,
        yearlySalary,
        employerPF,
        thirteenthSalaryBonus,
        festivalBonus,
        extraSalary,
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
    lastResults = results;
    // Show results section
    elements.resultsSection.classList.remove('hidden');
    
    // Update table with calculated values
    document.getElementById('yearlySalary').textContent = formatCurrency(results.yearlySalary);
    document.getElementById('thirteenthSalary').textContent = formatCurrency(results.thirteenthSalaryBonus);
    document.getElementById('festivalBonus').textContent = formatCurrency(results.festivalBonus);
    document.getElementById('extraSalary').textContent = formatCurrency(results.extraSalary);
    document.getElementById('employerPF').textContent = formatCurrency(results.employerPF);
    document.getElementById('grossSalary').textContent = formatCurrency(results.grossSalary);
    document.getElementById('exemptedIncome').textContent = formatCurrency(results.exemptedIncome);
    document.getElementById('taxableIncome').textContent = formatCurrency(results.taxableIncome);
    document.getElementById('maxInvestLimit').textContent = formatCurrency(results.maxInvestLimit);
    document.getElementById('providentFund').textContent = formatCurrency(results.providentFund);

    // Dynamically update calc column to reflect actual formula used
    const m = results.monthsWorked;
    const pb = results.perfBonusCount;
    const fb = results.festivalBonusCount;
    const ed = results.extraDays;
    const isEN = currentLanguage === 'en';

    if (m === 12) {
        document.getElementById('yearlySalaryCalc').textContent = translations[currentLanguage].yearlySalaryCalc;
    } else {
        document.getElementById('yearlySalaryCalc').textContent =
            isEN ? `Monthly Salary × ${m}` : `মাসিক বেতন × ${m}`;
    }
    document.getElementById('thirteenthSalaryCalc').textContent =
        isEN ? `Monthly × ${pb} × 20%` : `মাসিক × ${pb} × ২০%`;
    document.getElementById('festivalBonusCalc').textContent =
        isEN ? `Monthly × ${fb} × 60%` : `মাসিক × ${fb} × ৬০%`;
    document.getElementById('extraSalaryCalc').textContent =
        isEN ? `Monthly × ${ed} days / 30` : `মাসিক × ${ed} দিন / ৩০`;
    document.getElementById('providentFundCalc').textContent =
        m === 12
            ? (isEN ? `(Monthly × 11 + July) × 12%` : `(মাসিক × ১১ + জুলাই) × ১২%`)
            : (isEN ? `Monthly × ${m} × 12%` : `মাসিক × ${m} × ১২%`);

    // Apply existing investments on top
    updateInvestmentTotal();
}

// Handle Reset
function handleReset() {
    elements.form.reset();
    document.querySelectorAll('.investment-display-row, .investment-add-form-row').forEach(r => r.remove());
    document.getElementById('otherInvestmentsAmount').textContent = formatCurrency(0);
    lastResults = null;
    elements.resultsSection.classList.add('hidden');
    document.getElementById('settingsSection').classList.remove('open');
    document.getElementById('settingsToggle').setAttribute('aria-expanded', 'false');
    updateSettingsSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Investment Tracker ──

function showAddInvestmentForm() {
    // Only one form open at a time
    if (document.querySelector('.investment-add-form-row')) return;

    const cats = investmentCategories[currentLanguage];
    const isEN = currentLanguage === 'en';
    const tr = document.createElement('tr');
    tr.className = 'investment-add-form-row';
    tr.innerHTML = `
        <td colspan="3">
            <div class="investment-add-form-inner">
                <select class="investment-cat-select">
                    ${cats.map(c => `<option value="${c.value}">${c.label}</option>`).join('')}
                </select>
                <div class="investment-amount-wrap">
                    <input type="text" class="investment-amount-input" inputmode="numeric" placeholder="0">
                    <small class="investment-limit-hint"></small>
                </div>
                <button type="button" class="investment-add-confirm-btn">${isEN ? 'Add' : 'যোগ করুন'}</button>
                <button type="button" class="investment-cancel-link">${isEN ? 'Cancel' : 'বাতিল'}</button>
            </div>
        </td>
    `;

    const select = tr.querySelector('.investment-cat-select');
    const amountInput = tr.querySelector('.investment-amount-input');
    const limitHint = tr.querySelector('.investment-limit-hint');

    validateAmount(select, amountInput, limitHint);
    select.addEventListener('change', () => validateAmount(select, amountInput, limitHint));
    amountInput.addEventListener('input', e => { handleInputFormat(e); validateAmount(select, amountInput, limitHint); });
    amountInput.addEventListener('blur', e => { handleInputBlur(e); validateAmount(select, amountInput, limitHint); });

    tr.querySelector('.investment-add-confirm-btn').addEventListener('click', () => {
        const amount = parseFormattedNumber(amountInput.value) || 0;
        if (amount <= 0) { amountInput.focus(); return; }
        const cat = select.value;
        const limit = INVESTMENT_LIMITS[cat];
        if (limit !== null && amount > limit) {
            validateAmount(select, amountInput, limitHint);
            amountInput.focus();
            return;
        }
        const catLabel = investmentCategories[currentLanguage].find(c => c.value === cat)?.label || cat;
        addInvestmentDisplayRow(cat, catLabel, amount, tr);
    });

    tr.querySelector('.investment-cancel-link').addEventListener('click', () => tr.remove());

    const anchorRow = document.querySelector('.investment-needed-row');
    anchorRow.parentNode.insertBefore(tr, anchorRow);
    amountInput.focus();
}

function addInvestmentDisplayRow(catValue, catLabel, amount, formRow) {
    const tr = document.createElement('tr');
    tr.className = 'investment-display-row';
    tr.dataset.catValue = catValue;
    tr.dataset.amount = String(amount);
    tr.innerHTML = `
        <td class="investment-display-cat-td">${catLabel}</td>
        <td></td>
        <td><div class="investment-display-amount-td">
            <span>${formatCurrency(amount)}</span>
            <button type="button" class="remove-investment-btn" aria-label="Remove">✕</button>
        </div></td>
    `;
    tr.querySelector('.remove-investment-btn').addEventListener('click', () => {
        tr.remove();
        updateInvestmentTotal();
    });
    formRow.parentNode.insertBefore(tr, formRow);
    formRow.remove();
    updateInvestmentTotal();
}

function validateAmount(select, amountInput, limitHint) {
    const cat = select.value;
    const limit = INVESTMENT_LIMITS[cat];
    const amount = parseFormattedNumber(amountInput.value) || 0;
    if (limit !== null && amount > limit) {
        amountInput.classList.add('over-limit');
        limitHint.classList.add('over-limit-text');
        limitHint.textContent = currentLanguage === 'en'
            ? `Exceeds limit of ৳ ${limit.toLocaleString('en-IN')}`
            : `সীমা অতিক্রম: ৳ ${limit.toLocaleString('bn-BD')}`;
    } else {
        amountInput.classList.remove('over-limit');
        limitHint.classList.remove('over-limit-text');
        limitHint.textContent = INVESTMENT_LIMIT_LABELS[currentLanguage][cat] || '';
    }
}

function getExistingInvestmentsTotal() {
    let total = 0;
    document.querySelectorAll('.investment-display-row').forEach(row => {
        total += parseFloat(row.dataset.amount) || 0;
    });
    return total;
}

function updateInvestmentTotal() {
    recalculateAdditionalInvestment();
}

function recalculateAdditionalInvestment() {
    if (!lastResults) return;
    const existingTotal = getExistingInvestmentsTotal();
    const additionalInvestment = Math.max(0, lastResults.maxInvestLimit - lastResults.providentFund - existingTotal);
    document.getElementById('otherInvestmentsAmount').textContent = formatCurrency(existingTotal);
    const el = document.getElementById('additionalInvestment');
    el.textContent = formatCurrency(additionalInvestment);
    el.style.color = additionalInvestment > 0 ? 'var(--warning-color)' : 'var(--success-color)';
}

// Input Formatting Functions (handleInputFormat and handleInputBlur are provided by utils.js)

// Format Number with Commas, Parse Formatted Number, Format Currency are provided by utils.js

// Language Toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    saveLanguagePreference(currentLanguage);
    applyTranslations();
    
    // Recalculate if results are visible
    if (!elements.resultsSection.classList.contains('hidden')) {
            const monthlySalary = parseFormattedNumber(elements.monthlySalary.value);
            const julySalary = parseFormattedNumber(elements.julySalary.value);
            const monthsWorked = Math.min(12, Math.max(1, parseInt(elements.monthsWorked.value, 10) || 12));
            const perfBonusCount = parseInt(elements.perfBonusCount.value, 10) || 0;
            const festivalBonusCount = parseInt(elements.festivalBonusCount.value, 10) || 0;
            const extraDays = Math.max(0, parseFloat(elements.extraDays.value) || 0);
            if (monthlySalary > 0) {
                const results = calculateInvestment(monthlySalary, julySalary, monthsWorked, perfBonusCount, festivalBonusCount, extraDays);
                displayResults(results);
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
    
    // Update language toggle button text
    if (document.getElementById('langText')) {
        document.getElementById('langText').textContent = t.langText;
    }

    // Update select options in add form row (if open)
    const cats = investmentCategories[currentLanguage];
    document.querySelectorAll('.investment-cat-select').forEach(select => {
        const currentVal = select.value;
        select.innerHTML = cats.map(c =>
            `<option value="${c.value}"${c.value === currentVal ? ' selected' : ''}>${c.label}</option>`
        ).join('');
    });

    // Refresh limit hints in open add form
    document.querySelectorAll('.investment-add-form-row').forEach(row => {
        const sel = row.querySelector('.investment-cat-select');
        const inp = row.querySelector('.investment-amount-input');
        const hint = row.querySelector('.investment-limit-hint');
        if (sel && inp && hint) validateAmount(sel, inp, hint);
    });

    // Update category labels in display rows
    document.querySelectorAll('.investment-display-row').forEach(row => {
        const cat = row.dataset.catValue;
        const catLabel = cats.find(c => c.value === cat)?.label || cat;
        const catTd = row.querySelector('.investment-display-cat-td');
        if (catTd) catTd.textContent = catLabel;
    });

    // Refresh settings summary for new language
    updateSettingsSummary();
}

// Save Language Preference and Load Language Preference are provided by utils.js

// Initialize on DOM Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
} else {
    init();
}