import { Barlow_Condensed, Manrope, Tajawal } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["500", "700"],
});

export const metadata = {
  title: {
    default: "ASC — Abu Dawood Al Saffar | Industrial Supply, Bahrain",
    template: "%s | ASC Bahrain",
  },
  description:
    "Abu Dawood Al Saffar (ASC) supplies industrial materials, equipment and technical services to projects across the Kingdom of Bahrain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${manrope.variable} ${tajawal.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
