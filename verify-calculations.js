// Quick verification script for tax calculations
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

function calculateProgressiveTax(taxableIncome) {
    let totalTax = 0;
    
    for (let i = 0; i < TAX_CONFIG.TAX_SLABS.length; i++) {
        const slab = TAX_CONFIG.TAX_SLABS[i];
        
        if (taxableIncome < slab.min) {
            continue;
        }
        
        let taxableInSlab;
        if (slab.min === 0) {
            taxableInSlab = Math.min(slab.max, taxableIncome);
        } else {
            const previousSlabMax = TAX_CONFIG.TAX_SLABS[i - 1].max;
            taxableInSlab = Math.min(slab.max, taxableIncome) - previousSlabMax;
        }
        
        const taxInSlab = taxableInSlab * slab.rate;
        totalTax += taxInSlab;
        
        if (taxableIncome <= slab.max) {
            break;
        }
    }
    
    return totalTax;
}

function calculateTax(grossIncome, investmentAmount, employerDeposit) {
    const exemptedIncome = Math.min(
        grossIncome / TAX_CONFIG.EXEMPTION_DIVISOR,
        TAX_CONFIG.MAX_EXEMPTION
    );
    
    const taxableIncome = Math.max(0, grossIncome - exemptedIncome);
    const totalTax = calculateProgressiveTax(taxableIncome);
    
    const rebate3Percent = taxableIncome * TAX_CONFIG.REBATE_RATE_TAXABLE;
    const rebate15Percent = investmentAmount * TAX_CONFIG.REBATE_RATE_INVESTMENT;
    
    let rebate;
    if (investmentAmount === 0) {
        rebate = Math.min(rebate3Percent, TAX_CONFIG.MAX_REBATE);
    } else {
        rebate = Math.min(rebate3Percent, rebate15Percent, TAX_CONFIG.MAX_REBATE);
    }
    
    const finalTax = Math.max(0, totalTax - rebate);
    const netPayable = Math.max(0, finalTax - employerDeposit);
    
    return {
        grossIncome,
        exemptedIncome: Math.round(exemptedIncome),
        taxableIncome: Math.round(taxableIncome),
        totalTax: Math.round(totalTax),
        rebate: Math.round(rebate),
        finalTax: Math.round(finalTax),
        netPayable: Math.round(netPayable)
    };
}

// Test Cases
console.log("\n=== BANGLADESH INCOME TAX CALCULATOR FY 2025-26 ===\n");

console.log("Test 1: Income 1,200,000 BDT, No Investment, No Employer Deposit");
console.log(calculateTax(1200000, 0, 0));
console.log("\nExpected:");
console.log("- Exempted: 400,000");
console.log("- Taxable: 800,000");
console.log("- Tax: 40,000 (5,000 + 35,000)");
console.log("- Rebate: 24,000 (3% of 800k since no investment)");
console.log("- Final Tax: 16,000");
console.log("- Net Due: 16,000");

console.log("\n" + "=".repeat(60) + "\n");

console.log("Test 2: Income 2,000,000 BDT, Investment 300,000, No Employer Deposit");
const result2 = calculateTax(2000000, 300000, 0);
console.log(result2);
console.log("\nExpected:");
console.log("- Exempted: 450,000");
console.log("- Taxable: 1,550,000");
console.log("- Tax: 150,000");
console.log("- Rebate: 45,000 (min of 46,500, 45,000, 1M)");
console.log("- Final Tax: 105,000");
console.log("- Net Due: 105,000");

console.log("\n" + "=".repeat(60) + "\n");

console.log("Test 3: Income 1,000,000 BDT, Investment 100,000, Employer Paid 10,000");
const result3 = calculateTax(1000000, 100000, 10000);
console.log(result3);
console.log("\nExpected:");
console.log("- Exempted: 333,333");
console.log("- Taxable: 666,667");
console.log("- Tax: ~26,667");
console.log("- Rebate: 15,000 (min of 20,000, 15,000, 1M)");
console.log("- Final Tax: ~11,667");
console.log("- Net Due: ~1,667");

console.log("\n" + "=".repeat(60) + "\n");

console.log("Test 4: Very High Income 50,000,000 BDT, No Investment");
const result4 = calculateTax(50000000, 0, 0);
console.log(result4);
console.log("\nExpected:");
console.log("- Exempted: 450,000");
console.log("- Taxable: 49,550,000");
console.log("- Tax: 14,775,000");
console.log("- Rebate: 1,000,000 (capped at max, even though 3% = 1,486,500)");
console.log("- Final Tax: 13,775,000");
console.log("- Net Due: 13,775,000");

console.log("\n" + "=".repeat(60) + "\n");
console.log("✅ Tax calculation corrected: When investment = 0, rebate defaults to 3% of taxable income (capped at 1M)");
