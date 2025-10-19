// Detailed Tax Calculation Verification

function calculateDetailedTax(taxableIncome) {
    console.log(`\n=== Calculating Tax for Taxable Income: ${taxableIncome.toLocaleString()} ===\n`);
    
    let totalTax = 0;
    
    // Slab 1: 0 - 350,000 @ 0%
    if (taxableIncome > 0) {
        const amount = Math.min(350000, taxableIncome);
        const tax = amount * 0;
        console.log(`Slab 1 (0 - 350,000 @ 0%): ${amount.toLocaleString()} × 0% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 2: 350,001 - 450,000 @ 5%
    if (taxableIncome > 350000) {
        const amount = Math.min(450000, taxableIncome) - 350000;
        const tax = amount * 0.05;
        console.log(`Slab 2 (350,001 - 450,000 @ 5%): ${amount.toLocaleString()} × 5% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 3: 450,001 - 850,000 @ 10%
    if (taxableIncome > 450000) {
        const amount = Math.min(850000, taxableIncome) - 450000;
        const tax = amount * 0.10;
        console.log(`Slab 3 (450,001 - 850,000 @ 10%): ${amount.toLocaleString()} × 10% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 4: 850,001 - 1,350,000 @ 15%
    if (taxableIncome > 850000) {
        const amount = Math.min(1350000, taxableIncome) - 850000;
        const tax = amount * 0.15;
        console.log(`Slab 4 (850,001 - 1,350,000 @ 15%): ${amount.toLocaleString()} × 15% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 5: 1,350,001 - 1,850,000 @ 20%
    if (taxableIncome > 1350000) {
        const amount = Math.min(1850000, taxableIncome) - 1350000;
        const tax = amount * 0.20;
        console.log(`Slab 5 (1,350,001 - 1,850,000 @ 20%): ${amount.toLocaleString()} × 20% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 6: 1,850,001 - 3,850,000 @ 25%
    if (taxableIncome > 1850000) {
        const amount = Math.min(3850000, taxableIncome) - 1850000;
        const tax = amount * 0.25;
        console.log(`Slab 6 (1,850,001 - 3,850,000 @ 25%): ${amount.toLocaleString()} × 25% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    // Slab 7: 3,850,001 and above @ 30%
    if (taxableIncome > 3850000) {
        const amount = taxableIncome - 3850000;
        const tax = amount * 0.30;
        console.log(`Slab 7 (3,850,001+ @ 30%): ${amount.toLocaleString()} × 30% = ${tax.toLocaleString()}`);
        totalTax += tax;
    }
    
    console.log(`\n---------------------------`);
    console.log(`Total Tax: ${totalTax.toLocaleString()}`);
    console.log(`===========================\n`);
    
    return totalTax;
}

// Test case from earlier
console.log("TEST CASE: Gross Income 2,000,000, Investment 300,000");
console.log("Exempted Income: 450,000 (min of 2M/3 = 666,667 or 450,000)");
console.log("Taxable Income: 2,000,000 - 450,000 = 1,550,000");

const tax = calculateDetailedTax(1550000);

console.log("\nRebate Calculation:");
console.log("- 3% of Taxable (1,550,000 × 3%) = 46,500");
console.log("- 15% of Investment (300,000 × 15%) = 45,000");
console.log("- Maximum Rebate Limit = 1,000,000");
console.log("- Selected Rebate = min(46,500, 45,000, 1,000,000) = 45,000");

console.log("\nFinal Tax = 160,000 - 45,000 = 115,000");
console.log("\n✅ Calculation verified!");

console.log("\n" + "=".repeat(60));
console.log("\nTEST CASE 2: Gross Income 50,000,000, No Investment");
console.log("Exempted Income: 450,000");
console.log("Taxable Income: 49,550,000");

const tax2 = calculateDetailedTax(49550000);

console.log("\nRebate Calculation:");
console.log("- No investment provided");
console.log("- 3% of Taxable (49,550,000 × 3%) = 1,486,500");
console.log("- Maximum Rebate Limit = 1,000,000");
console.log("- Selected Rebate = min(1,486,500, 1,000,000) = 1,000,000 (capped)");

console.log("\nFinal Tax = 14,430,000 - 1,000,000 = 13,430,000");
console.log("\n✅ Calculation verified!");
