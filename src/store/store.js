// store.js
import {create }from 'zustand';

const useStore = create((set) => ({
  currencies: [
    { code: 'USD', rate: 400.0 },
    { code: 'EUR', rate: 0.85 },
    { code: 'NGN', rate: 1.0 }, // Example exchange rate
    { code: 'XOF', rate: 550.0 }, // Example exchange rate
    { code: 'GHS', rate: 10.0 }, // Example exchange rate
    // Add more currencies and rates here
  ],
    selectedCurrency: 'NGN',
    setCurrency: (currencyCode) => set({ selectedCurrency: currencyCode }),
    // Add action to update a currency's exchange rate
  updateCurrencyRate: (currencyCode, newRate) => {
    set((state) => ({
      currencies: state.currencies.map((currency) =>
        currency.code === currencyCode ? { ...currency, rate: newRate } : currency
      ),
    }));
  },
}));

export default useStore;
