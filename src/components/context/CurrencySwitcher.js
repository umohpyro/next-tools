// CurrencySwitcher.js
import React from 'react';
import useStore from '@/store/store';

// import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons';

// import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const CurrencySwitcher = () => {
	const { currencies, selectedCurrency, setCurrency } = useStore();

	const handleCurrencyChange = (currencyCode) => {
		setCurrency(currencyCode);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<select
					variant='outline'
					size='icon'
					className='h-[2rem] w-fit mx-auto rotate-0 scale-100 transition-all dark:rotate-180 dark:text-slate-700 '>
					{/* <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' /> */}
					<option>{selectedCurrency}</option>
					<span className='sr-only'>Toggle theme</span>
				</select>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{currencies.map((currency) => (
					<DropdownMenuItem
						key={currency.code}
						onClick={() => handleCurrencyChange(currency.code)}
						className={
							selectedCurrency === currency.code
								? 'font-bold text-green-900'
								: ''
						}>
						{currency.code}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CurrencySwitcher;

/*
'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

*/
