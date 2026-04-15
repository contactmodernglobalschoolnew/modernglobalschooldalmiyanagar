import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Modern Global School | Best School in Dalmianagar Dehri, Rohtas 821305",
  description: "Modern Global School – Top-ranked school following CBSE curriculum in Dalmianagar, Rohtas, Bihar 821305. Admissions open 2026–27. Nursery to Class VIII. Excellence in education, sports & co-curriculars.",
  keywords: "school in dalmianagar, best school rohtas, CBSE curriculum school dalmianagar, Modern Global School, school rohtas 821305, admission dalmianagar school, rohtas bihar school, best school dehri on sone, top school dalmianagar, quality education rohtas, cbse curriculum school dehri, primary school rohtas district, best school in dehri, top cbse school bihar, school near dehri on sone",
  robots: "index, follow",
  openGraph: {
    title: "Modern Global School | Best School in Dalmianagar, Rohtas",
    description: "Admissions Open 2026-27 | CBSE Curriculum | Nursery to Class VIII | Dalmianagar, Rohtas 821305",
    type: "website",
    locale: "en_IN",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Dalmianagar, Rohtas, Bihar",
    "geo.position": "24.6;83.9",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.modernglobalschool.in/" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Modern Global School",
            "alternateName": "Best CBSE School in Dalmianagar",
            "description": "Leading school following CBSE curriculum in Dalmianagar, Rohtas providing quality education from Nursery to Class VIII. Best school in Dehri Dalmianagar area.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dalmianagar",
              "addressLocality": "Rohtas",
              "addressRegion": "Bihar",
              "postalCode": "821305",
              "addressCountry": "IN"
            },
            "telephone": "+91-09798560695",
            "email": "info@modernglobalschool.in",
            "url": "https://www.modernglobalschool.in",
            "areaServed": ["Dalmianagar", "Dehri on Sone", "Rohtas", "Bihar"],
            "educationalCredentialAwarded": "CBSE Curriculum",
            "priceRange": "Affordable",
            "sameAs": [
              "https://www.facebook.com/modernglobalschool",
              "https://www.instagram.com/modernglobalschool"
            ]
          })
        }} />
      </head>
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} antialiased bg-white text-gray-800 overflow-x-hidden`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
