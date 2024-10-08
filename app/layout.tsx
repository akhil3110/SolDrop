import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import WalletConnectionProvider from "@/providers/wallet-connection-provider";
import  { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolDrop",
  description: "Get Faucet, Check Balance, Transfer Sol and Sign Messagecit ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <WalletConnectionProvider>
            <div className="h-full w-full">
              {children}
            </div>
          </WalletConnectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
