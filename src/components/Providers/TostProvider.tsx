"use client";

import { useTheme } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";

const TostProvider = () => {
	const { theme } = useTheme();
	return (
		<ToastContainer
			position="top-center"
			autoClose={1500}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			transition={Bounce}
			theme={theme === "dark" ? "dark" : "light"}
		/>
	);
};

export default TostProvider;
