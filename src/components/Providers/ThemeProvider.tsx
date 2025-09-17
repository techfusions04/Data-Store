"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import TostProvider from "./TostProvider";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider {...props}>
			{children}
			<TostProvider />
		</NextThemesProvider>
	);
};

export default ThemeProvider;
