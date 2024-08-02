import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Tailus UI React - Ecommerce example",
  description: "Ecommerce block examples including built with Tailus UI React",
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
      },
      {
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
        url: "/darkfavicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-shade="950" data-rounded="medium">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <Toaster position="bottom-left" />
            <main id="detail">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
