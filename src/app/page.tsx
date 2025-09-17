import Frominput from "@/components/FromInput/Frominput";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-[350px]">
					<CardHeader>
						<CardTitle></CardTitle>
					</CardHeader>

					<CardContent>
						<Frominput />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
