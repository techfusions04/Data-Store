"use client";

import { InputFromType, inputSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Frominput = () => {
	const inputFrom = useForm({
		resolver: zodResolver(inputSchema),

		defaultValues: {
			name: "",
			email: "",
			ph: undefined,
		},
		mode: "all",
	});

	const inputHandeler = async (idata: InputFromType) => {
		toast.success("Added Successfully👍 ");
		console.log(idata);
	};

	return (
		<div className="">
			<Form {...inputFrom}>
				<form
					onSubmit={inputFrom.handleSubmit(inputHandeler)}
					className="space-y-8"
					noValidate>
					{/* Name */}

					<FormField
						control={inputFrom.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input
										placeholder="shadcn"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={inputFrom.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="example@gmail.com"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={inputFrom.control}
						name="ph"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										placeholder="0123456789"
										value={field.value?.toString() || ""}
										onChange={(e) => {
											// If the input is empty, send undefined (or "")
											const val = e.target.value;
											field.onChange(
												val === ""
													? undefined
													: Number(val),
											);
										}}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
};

export default Frominput;
