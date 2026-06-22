// Shared utility functions for Finsource Tax Calculators

// Format Number with Commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Parse Formatted Number (handles commas)
function parseFormattedNumber(str) {
    return parseInt(str.replace(/,/g, '') || '0');
}

// Format Currency
function formatCurrency(num) {
    return `৳ ${formatNumber(Math.round(num))}`;
}

// Strip non-numeric characters while user types
function handleInputFormat(e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
}

// Format number with commas on blur
function handleInputBlur(e) {
    if (e.target.value) {
        e.target.value = formatNumber(parseFormattedNumber(e.target.value));
    }
}

// Get persisted language preference (defaults to 'en')
function getLanguagePreference() {
    const saved = localStorage.getItem('sharedLanguage');
    return (saved === 'en' || saved === 'bn') ? saved : 'en';
}

// Save language preference shared across both calculators
function saveLanguagePreference(lang) {
    localStorage.setItem('sharedLanguage', lang);
}

// Save language and navigate (currentLanguage must be a global in the calling script)
function saveLanguageAndNavigate(event, url) {
    event.preventDefault();
    saveLanguagePreference(currentLanguage);
    window.location.href = url;
}
