'use client';

import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ModeToggle} from '@/components/dark-mode';
import CurrencySwitcher from '@/components/context/CurrencySwitcher'
import PriceDisplay from '@/components/context/PriceDisplay'
// import Image from 'next/image'

export default function Home() {
	const notify = () => toast('Wow so easy!');
	return (
		<main className='flex min-h-screen flex-row items-center justify-between p-24'>
			<div className='flex flex-row justify-around space-x-3'>
				<CurrencySwitcher />
				<PriceDisplay price={3000} />
			</div>
			<ModeToggle />
			<Button
				onClick={notify}
				className='primary text-white font-bold py-2 px-4 rounded'>
				Login
			</Button>
			<ToastContainer
				// position='top-right'
				// autoClose={5000}
				// hideProgressBar={false}
				newestOnTop={true}
				// closeOnClick
				// rtl={false}
				// pauseOnFocusLoss
				// draggable
				// pauseOnHover
				// theme='dark'
			/>
		</main>
	);
}
