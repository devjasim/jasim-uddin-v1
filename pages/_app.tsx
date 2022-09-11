import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>Portfolio of Jasim Uddin</title>
			</Head>
			<div className="container mx-auto">
				<div className="grid grid-cols-12 gap-6 my-14">
					<div
						style={{ maxHeight: "850px" }}
						className="col-span-12 px-5 py-4 bg-white dark:bg-dark-100 lg:col-span-3 rounded-2xl"
					>
						<Sidebar />
					</div>
					<div
						style={{
							minHeight: "850px",
							maxHeight: "850px",
						}}
						className="flex flex-col col-span-12 px-5 py-4 overflow-hidden bg-white dark:bg-dark-100 lg:col-span-9 rounded-2xl"
					>
						<Navbar />
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}
export default MyApp;
