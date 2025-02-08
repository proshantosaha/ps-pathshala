import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ps edu",
  description: "implement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`
        )}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
