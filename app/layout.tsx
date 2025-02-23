import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import RootProviders from "@/components/providers/RootProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PennyPal - Your Friendly Budget Tracker",
  description:
    "Easily manage your expenses, set savings goals, and take control of your finances with PennyPal. Fun, simple, and effective budgeting made for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{ baseTheme: [dark] }}
    >
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className={`${inter.className} antialiased`}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
