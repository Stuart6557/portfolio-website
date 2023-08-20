import Link from "next/link"

export default function Navbar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/experience">Experience</Link>
			<Link href="/projects">Projects</Link>
			<Link href="resume.pdf">Resume</Link>
		</nav>
	)
}