import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { Maintenance } from "../components/Maintenance";

export const metadata: Metadata = {
  title: "Bluebird Jazz Bar | Live Jazz & Vinyl Art Lounge in Thonglor, Bangkok",
  description: "An intimate 3rd-floor live-jazz sanctuary and vinyl listening lounge hidden in Thonglor, Bangkok. Experience authentic jazz standards, curated records, and signature cocktails.",
  openGraph: {
    title: "Bluebird Jazz Bar Thonglor",
    description: "An intimate live-jazz bar, vinyl listening club, and art gallery in Thonglor, Bangkok.",
    url: "https://bluebirdjazzbar.com",
    type: "website",
    images: [
      {
        url: "https://bluebirdjazzbar.com/hero-real.jpg",
        width: 1200,
        height: 675,
        alt: "Bluebird Jazz Bar Thonglor",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebird Jazz Bar Thonglor",
    description: "An intimate live-jazz bar, vinyl listening club, and art gallery in Thonglor, Bangkok.",
    images: ["https://bluebirdjazzbar.com/hero-real.jpg"],
  }
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "Bluebird Jazz Bar",
  "description": "Intimate live jazz bar with vinyl records and an art gallery on the 3rd floor in Thonglor, Bangkok.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "355/3 Soi Sukhumvit 55 (Thong Lo)",
    "addressLocality": "Khlong Tan Nuea, Watthana",
    "addressRegion": "Bangkok",
    "postalCode": "10110",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.735485,
    "longitude": 100.580804
  },
  "telephone": "+66897779248",
  "email": "bluebirdjazzbar@gmail.com",
  "servesCuisine": "Cocktails, Craft Beer, Wine, Bar Snacks",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
      "opens": "17:00",
      "closes": "24:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/bluebirdjazzbar/",
    "https://www.facebook.com/bluebirdjazzbar/",
    "https://www.tiktok.com/@bluebirdjazzbar"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full">
      <head>
        {/* Font Awesome Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Structured SEO Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-deep text-ink selection:bg-accent selection:text-bg-deep antialiased">
        <LanguageProvider>
          {/* Nostalgic Texture Film-grain overlay */}
          <div className="film-grain" />

          {/* Global Maintenance View */}
          <Maintenance />
        </LanguageProvider>
      </body>
    </html>
  );
}
