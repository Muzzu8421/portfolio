import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shaikh Muzakkir — Full Stack Developer",
  description:
    "Portfolio of Shaikh Muzakkir — product-minded full-stack developer building production-ready web and mobile experiences from Hyderabad, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-coal font-[family-name:var(--font-body)] text-muted antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
