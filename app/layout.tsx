import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filehugger - Free Unlimited File Coverter",
  description:
    "Unleash your imagination with Filehugger, the greatest online tool for unlimited and free multimedia converting. Freely transform photos, audio, and videos. Begin converting immediately to boost your content like never before!",
  creator: "GEOFFREY PAUL",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
