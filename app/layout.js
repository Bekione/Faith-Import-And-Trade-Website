import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faith Import And Trade",
  description: "Welcome to Faith Import & Trade, your trusted source for importing high-quality computer accessories and stationery supplies. We provide reliable maintenance services to ensure your equipment operates at its best. Discover our commitment to trust, excellence, and global reach.",
  metadataBase: new URL('https://faithimporttrade.com'),
  generator: "Next.js",
  category: 'Trade',
  applicationName: "Faith Import & Trade",
  referrer: "origin-when-cross-origin",
  keywords: ["Faith", "Import", "Trade", "Computer", "Stationery", "Maintenance", "Service", "Trust", "Excellence", "Global Reach"],
  authors: [{ name: "Bereket", url: "https://faithimporttrade.com" }],
  colorScheme: "light",
  creator: "Bereket Kinfe",
  publisher: "Direct Admin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
