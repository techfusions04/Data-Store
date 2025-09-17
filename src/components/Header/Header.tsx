import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import Mobile from "../Mobile/Mobile";

const Header = () => {
	return (
		<>
			<header
				className="border-b shadow"
				aria-label="app-header">
				<div className="container mx-auto flex items-center justify-between px-6 py-3">
					<Link href={"/"}>
						<h1
							className="text-2xl font-semibold"
							aria-label="App Name">
							NST App
						</h1>
					</Link>

					<nav className="hidden items-center gap-4 sm:flex">
						<Link href={"/"}>Home</Link>

						<ThemeToggleButton />
					</nav>
					<Mobile />
				</div>
			</header>
		</>
	);
};

export default Header;
