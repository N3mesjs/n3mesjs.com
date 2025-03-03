import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "N3mesjs",
  description: "This is a personal website of a developer who loves to code and learn new things.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
