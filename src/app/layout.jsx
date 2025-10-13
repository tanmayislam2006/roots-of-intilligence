import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Use CSS variable
});

export const metadata = {
  title: "Roots Of Intelligence",
  description: "A machine learning course about the roots of intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        <header>
          <Navbar />
        </header>
        <main className="w-full min-h-[calc(100vh-100px)]">{children}</main>
      </body>
    </html>
  );
}
