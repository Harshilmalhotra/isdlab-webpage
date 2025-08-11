import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "Intelligent Systems Design Lab SRM",
  description:
    "Welcome to the Intelligent Systems Design Lab (ISD Lab) – a hub for cutting-edge research and student-driven innovation in robotics, AI, and embedded systems. From autonomous vehicles to smart IoT systems, we build, test, and scale intelligent systems for tomorrow’s world.",
  canonical: "https://isdlabsrm.in/",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://isdlabsrm.in/",
    siteName: "Intelligent Systems Design Lab SRM",
    title: "Intelligent Systems Design Lab SRM",
    description:
      "Welcome to the Intelligent Systems Design Lab (ISD Lab) – a hub for cutting-edge research and student-driven innovation in robotics, AI, and embedded systems.",
    images: [
      {
        url: "https://isdlabsrm.in/logo.png",
        width: 800,
        height: 800,
        alt: "ISD Lab Logo",
        type: "image/png",
      },
    ],
    profile: {
      firstName: "Intelligent Systems Design Lab",
      lastName: "SRM",
      username: "isdlabsrm",
    },
  },
  twitter: {
    handle: "@isdlabsrm",
    site: "@isdlabsrm",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "application-name", content: "Intelligent Systems Design Lab SRM" },
    { name: "theme-color", content: "#0f0f0f" },
    { name: "keywords", content: "ISD Lab SRM, Robotics, AI, Embedded Systems, IoT, Machine Learning, Computer Vision, Research, Innovation, SRM University" },
    { name: "author", content: "Intelligent Systems Design Lab SRM" },
    { name: "robots", content: "index, follow" },
    { name: "geo.region", content: "IN-TN" },
    { name: "geo.placename", content: "Kattankulathur, Chennai" },
    { name: "geo.position", content: "12.8233;80.0440" },
    { name: "ICBM", content: "12.8233, 80.0440" },
    { property: "og:see_also", content: "https://www.linkedin.com/company/isd-lab-srm" },
    { property: "og:see_also", content: "https://www.instagram.com/isdlabsrm/" },
    { property: "og:see_also", content: "https://www.instagram.com/robofest.srm/" },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://isdlabsrm.in/logo.png",
    },
    {
      rel: "apple-touch-icon",
      href: "https://isdlabsrm.in/logo.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "me",
      href: "https://www.linkedin.com/company/isd-lab-srm",
    },
    {
      rel: "me",
      href: "https://www.instagram.com/isdlabsrm/",
    },
    {
      rel: "me",
      href: "https://www.instagram.com/robofest.srm/",
    },
    {
      rel: "me",
      href: "https://maps.app.goo.gl/6Lzg572KA3eG47XBA",
    },
  ],
};

export default SEO;
