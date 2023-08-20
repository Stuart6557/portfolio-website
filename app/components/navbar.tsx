import 'app/globals.css'
import Link from "next/link"

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div>
				<Link href="/" className='nav-link'>Home</Link>
			</div>
			<div>
				<Link href="/about" className='nav-link'>About</Link>
			</div>
			<div>
				<Link href="/experience" className='nav-link'>Experience</Link>
			</div>
			<div>
				<Link href="/projects" className='nav-link'>Projects</Link>
			</div>
			<div>
				<Link href="resume.pdf" className='nav-link'>Resume</Link>
			</div>
		</nav>
	)
}