import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Intelligent Systems Design Lab SRM",
    alternateName: "ISD Lab SRM",
    url: "https://isdlabsrm.in/",
    logo: "https://isdlabsrm.in/logo.png",
    description:
      "Welcome to the Intelligent Systems Design Lab (ISD Lab) – a hub for cutting-edge research and student-driven innovation in robotics, AI, and embedded systems.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tech Park Annexure 1 Room 1509, Department of Computer Technologies",
      addressLocality: "Kattankulathur",
      addressRegion: "Tamil Nadu",
      postalCode: "603203",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-90033-22060",
      contactType: "customer service",
      email: "info@isdlabsrm.in",
    },
    sameAs: [
      "https://www.linkedin.com/company/isd-lab-srm",
      "https://www.instagram.com/isdlabsrm/",
      "https://www.instagram.com/robofest.srm/",
      "https://maps.app.goo.gl/6Lzg572KA3eG47XBA",
    ],
  };

  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <meta
          name="description"
          content="Intelligent Systems Design Lab (ISD Lab) – cutting-edge research and student-driven innovation in robotics, AI, IoT, and embedded systems at SRM University."
        />
        <meta
          name="keywords"
          content="ISD Lab SRM, Intelligent Systems Design Lab, Robotics, AI, Embedded Systems, IoT, Machine Learning, Computer Vision, Research, Innovation, SRM University"
        />
        <meta name="author" content="Intelligent Systems Design Lab SRM" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="application-name" content="Intelligent Systems Design Lab SRM" />

        {/* Open Graph */}
        <meta property="og:title" content="Intelligent Systems Design Lab SRM" />
        <meta
          property="og:description"
          content="Welcome to the Intelligent Systems Design Lab (ISD Lab) – a hub for research and innovation in robotics, AI, IoT, and embedded systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isdlabsrm.in/" />
        <meta property="og:image" content="https://isdlabsrm.in/logo.png" />
        <meta property="og:site_name" content="Intelligent Systems Design Lab SRM" />
        <meta property="og:see_also" content="https://www.linkedin.com/company/isd-lab-srm" />
        <meta property="og:see_also" content="https://www.instagram.com/isdlabsrm/" />
        <meta property="og:see_also" content="https://www.instagram.com/robofest.srm/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intelligent Systems Design Lab SRM" />
        <meta
          name="twitter:description"
          content="Research and innovation in robotics, AI, IoT, and embedded systems at SRM University."
        />
        <meta name="twitter:image" content="https://isdlabsrm.in/logo.png" />

        {/* Geo / Location */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Kattankulathur, Chennai" />
        <meta name="geo.position" content="12.8233;80.0440" />
        <meta name="ICBM" content="12.8233, 80.0440" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
