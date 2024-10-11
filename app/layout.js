import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techprogress",
  description: "Ваш надійний партнер на ринку техніки!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Preloader />
        <Header />
        <main className="max-w-screen-xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
