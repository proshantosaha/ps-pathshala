import { Inter, Poppins } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Pathshala - It's a Learning Platform",
  description: "Learn your best way",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}

        <Toaster
          richColors
          position="top-center"
        />
      </body>
    </html>
  );
}
=======
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";
const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "EduConnect - Wold's Best Learning Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({ children }) {
  const conn  = await dbConnect();
  return (
    <html lang="en">
      <body
        className={cn(inter.className, poppins.className)}>
          {children}
          <Toaster richColors position="top-center"/>
      </body>
    </html>
  );
}
>>>>>>> e91ba32ab3eff57e67522236bc9ef6997d91c97e
