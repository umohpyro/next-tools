// PriceDisplay.js
import React from 'react';
import useStore from '@/store/store';

const PriceDisplay = ({ price }) => {
	const { currencies, selectedCurrency } = useStore();
	const selectedCurrencyObject = currencies.find(
		(currency) => currency.code === selectedCurrency
	);
	const convertedPrice = (price / selectedCurrencyObject.rate).toFixed(2);

	return <p>{`${selectedCurrency} ${convertedPrice}`}</p>;
};

export default PriceDisplay;
