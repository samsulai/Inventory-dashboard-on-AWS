export type IDashboardMetrics = {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
  };

  export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
  }
  
  export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number;
    date: string; // Assuming date is in ISO 8601 format
  }
  
  export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage?: number;
    date: string; // Assuming date is in ISO 8601 format
  }
  
  export interface ExpenseSummary {
    expenseSummaryId: string;
    totalExpenses: number;
    date: string; // Assuming date is in ISO 8601 format
  }
  export interface User  {
    userId: string;
    name: string;
    email: string;
  };
  export interface ExpenseByCategorySummary {
    expenseByCategoryId: string;
    expenseSummaryId: string;
    category: string;
    amount: number;
    date: string; // Assuming date is in ISO 8601 format
  }
  
  