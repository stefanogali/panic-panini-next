import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
	title: "Free Next.js Music band starter template | by Panino Panini",
	description: "Free Next.js rock'n'roll band starter template to clone/fork from my Github page.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-poppins text-2xl xl:text-3xl">
				{children}
				<Footer />
			</body>
		</html>
	);
}
