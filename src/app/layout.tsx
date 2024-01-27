import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Recruitini",
    template: "%s | Recruitini"
  },
  description: "Find your dream developer job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-w-[350px]`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
         <Navbar />
        {children}  
        <Footer />  
        </ThemeProvider>
      </body>
    </html>
  );
}
