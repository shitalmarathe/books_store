import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books_store-Rank books to read",
  description: "prioritize your reading list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${outfit.className} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Header />
        {children}
        </ThemeProvider>
      </body>
  </html>
  );
}
