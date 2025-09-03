import Footer from "./components/Footer/Footer";
import "./globals.css";
import { Poppins, Permanent_Marker, Rock_Salt } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	style: ["normal", "italic"],
	variable: "--font-poppins",
	display: "swap",
});

const permanentMarker = Permanent_Marker({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-permanent-marker",
	display: "swap",
});

const rockSalt = Rock_Salt({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-rock-salt",
	display: "swap",
});

export const metadata = {
	title: "Free Next.js Music band starter template | by Panino Panini",
	description: "Free Next.js rock'n'roll band starter template to clone/fork from my Github page.",
	verification: {
		google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} ${permanentMarker.variable} ${rockSalt.variable}`}>
			<body className={`${poppins.className} font-rendering text-2xl xl:text-3xl`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
