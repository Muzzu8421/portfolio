import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shaikh Muzakkir Shaikh Ajam — Full Stack Developer",
  description:
    "Portfolio of Shaikh Muzakkir, Full Stack Developer from Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} min-h-screen bg-[#0a0f1e] font-[family-name:var(--font-dm-sans)] text-slate-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
