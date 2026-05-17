import type { Metadata } from "next";

import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.msitcomputer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MSIT Systems Pvt. Ltd. | Premium IT & AI Solutions",
    template: "%s | MSIT Systems Pvt. Ltd.",
  },
  description:
    "MSIT Systems Pvt. Ltd. builds scalable web platforms, enterprise software, AI-powered systems, and cloud-native digital solutions.",
  keywords: [
    "MSIT Systems",
    "IT Company",
    "AI Solutions",
    "Enterprise Software",
    "Web Development",
    "Cloud Solutions",
    "Digital Transformation",
  ],
  openGraph: {
    title: "MSIT Systems Pvt. Ltd.",
    description: "Transforming Businesses Through Technology",
    url: siteUrl,
    siteName: "MSIT Systems Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSIT Systems Pvt. Ltd.",
    description: "Transforming Businesses Through Technology",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
