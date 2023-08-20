import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
				<nav>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/experience">Experience</Link>
					<Link href="/projects">Projects</Link>
					<Link href="resume.pdf">Resume</Link>
				</nav>
				{children}
			</body>
		</html>
	)
}
