import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Background from './components/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Vivian Liu',
	description: 'Hi! Welcome to my portfolio website :)',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Background />
				<Navbar />
				{children}
			</body>
		</html>
	);
};