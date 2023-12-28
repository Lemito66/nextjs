import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

// Como e
export const metadata = {
  title: "Tienda Lemito",
  description: "Primera aplicación con Next.js",
  keywords: "nextjs, react, javascript, ecommerce, tienda",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
