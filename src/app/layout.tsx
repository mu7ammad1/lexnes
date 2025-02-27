import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { SafeThemeProvider } from "@/components/theme-provider"

const geistSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Rubik_Mono_One({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Lexnes ai",
  description: "Your gateway to the world of artificial intelligence. Discover, compare, and use the best AI models in one place with ease and speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[var(--font-geist-sans)] flex flex-col  justify-center items-center w-full`}
      >
        <SafeThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <main className="w-full max-w-screen-xl sticky left-0 right-0 top-0 z-10 px-2 max-md:bg-primary-foreground max-md:backdrop-blur-md">
            <Nav />
          </main>
          <main className="w-full max-w-screen-xl p-2">
            {children}
          </main>
        </SafeThemeProvider>
      </body>
    </html>
  );
}
