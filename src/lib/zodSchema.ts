import z from "zod";

export const inputSchema = z.object({
	name: z.string().min(2, { error: "Enter you Vaild Name " }),
	email: z.email({ error: "Valid Email" }),
	ph: z.coerce.number().min(10, { error: "Enter you Vaild Number " }),
	// ph: z.coerce.number({}),
});

export type InputFromType = z.infer<typeof inputSchema>;
