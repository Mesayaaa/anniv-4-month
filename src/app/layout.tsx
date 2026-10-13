import type { Metadata } from "next";
import { Dancing_Script, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Anniversary of Mesaya & Cinthya",
  description: "The anniversary of mesaya & cinthya at October, 14 2026",
  icons: {
    icon: "/ring.svg",
  },
  openGraph: {
    images:
      "https://ik.imagekit.io/ils26chuk/PWP%20KioChristine%2017r%20copy.jpg?updatedAt=1722333775655",
    type: "website",
    locale: "ID-id",
    siteName: "",
    title: "Anniversary of Mesaya & Christine",
    description: "The anniversary of mesaya & cinthyat October, 14 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ring.svg" sizes="any" />
      </head>
      <body className={`${dancing_script.variable} ${roboto_slab.variable}`}>
        {children}
        <Toaster duration={2000} />
      </body>
    </html>
  );
}
