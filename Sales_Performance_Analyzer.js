//Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) 
{  
    if (sales.length === 0) return 0;
    const totalSales = sales.reduce((acc,sale) => acc + sale, 0);
    return totalSales/ sales.length
}

//Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) 
{   
    if (averageSales > 10000)
    {
        return "Excellent";
    } 
    else if (averageSales >= 7000) 
    {
        return "Good";
    }
    else if (averageSales >= 4000)
    {   
        return "Satisfactory";

    }
    else 
    {   
        return "needs Improvement";
    }

}

//Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesData)
{   
    if (salesData.length === 0) return { topPerformer: null, bottomPerformer: null};

    const topPerformer = salesData.reduce((top, salesperson) => (calculateAverageSales(salesperson.sales) > calculateAverageSales(top.sales) ? salesperson : top), salesData[0]);

    const bottomPerformer = salesData.reduce((bottom, salesperson) => (calculateAverageSales(salesperson.sales) < calculateAverageSales(bottom.sales) ? salesperson : bottom), salesData[0]);

    return {topPerformer, bottomPerformer};

}

//Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
    if (salesData.length === 0) return "No sales data available";

    const report = salesData.map(salesperson => {
        const averageSales = calculateAverageSales(salesperson.sales);
        const performanceRating = determinePerformanceRating(averageSales);

        return {
            name: salesperson.name,
            averageSales: averageSales.toFixed(2),
            performanceRating: performanceRating
        };
    });

    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);

    return {
        report,
        topPerformer: topPerformer.name,
        bottomPerformer: bottomPerformer.name
    };
}

//Task 5: Test data

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
];

console.log(generatePerformanceReport(salesData));

