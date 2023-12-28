import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Roboto } from "next/font/google"; // Importa la fuente Roboto de Google Fonts

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
  
});

// Como e
export const metadata = {
  title: "Tienda Lemito",
  description: "Primera aplicación con Next.js",
  keywords: "nextjs, react, javascript, ecommerce, tienda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
