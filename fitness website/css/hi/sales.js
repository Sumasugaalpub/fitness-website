// Constants
const monthlySalesTarget = 435;
const workingDaysPerWeek = 6; // Saturday to Thursday
const daysInYear = 365; // Assuming a non-leap year

// Calculate the daily target sales
const dailyTargetSales = (monthlySalesTarget / workingDaysPerWeek) * (daysInYear / 12);

// Calculate the total target sales for the year
const totalTargetSales = monthlySalesTarget * 12;

// Display the results
console.log(`Daily Target Sales: $${dailyTargetSales.toFixed(2)}`);
console.log(`Total Target Sales for the Year: $${totalTargetSales.toFixed(2)}`);
