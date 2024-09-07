//Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) 
{  
    if (sales.length === 0) return 0;
    const totalSales = sales.reduce((acc,sale) => acc + sale, 0);
    return totalSales/ sales.length
}