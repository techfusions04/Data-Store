import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerClose,
	DrawerFooter,
} from "../shadcnui/drawer";
import { Button } from "../shadcnui/button";
import ThemeToggleButton from "../customui/ThemeToggleButton";

const MobileMenu = () => {
	return (
		<nav className="flex sm:hidden">
			<Drawer direction="left">
				<DrawerTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						aria-label="Open menu">
						<Menu />
					</Button>
				</DrawerTrigger>

				<DrawerContent className="h-full p-0">
					{/* Full-height flex column container */}

					<div className="flex h-full w-full max-w-sm flex-col">
						{/* Header with Close Button */}

						<DrawerHeader className="grid grid-cols-2 items-center px-4 py-3">
							<DrawerTitle>Mobile Menu</DrawerTitle>

							<DrawerClose asChild>
								<div className="flex justify-end">
									<Button
										variant="ghost"
										size="icon"
										aria-label="Close menu">
										<X
											size={25}
											color="#ff0000"
											strokeWidth={2.25}
										/>
									</Button>
								</div>
							</DrawerClose>
						</DrawerHeader>

						{/* Main content  */}
						<div className="flex-1 space-y-4 px-4 py-2">
							<Link
								href="/"
								className="block rounded-md px-4 py-2 text-lg transition-colors hover:bg-green-600 hover:text-white">
								Home
							</Link>

							<Link
								href="/"
								className="block rounded-md px-4 py-2 text-lg transition-colors hover:bg-green-600 hover:text-white">
								Home
							</Link>
							{/* Add more mobile nav links here */}
						</div>

						{/* Footer pinned to bottom */}
						<DrawerFooter className="border-t p-4">
							<div className="flex justify-between">
								<ThemeToggleButton />

								<DrawerClose asChild>
									<Button
										variant="destructive"
										className="w-20">
										Cancel
									</Button>
								</DrawerClose>
							</div>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>
		</nav>
	);
};

export default MobileMenu;
