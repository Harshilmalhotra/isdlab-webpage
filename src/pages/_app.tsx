import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@/styles/globals.css";
import "../styles/MasonryAnimation.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../components/ProfileCard.css";
import { Analytics } from "@vercel/analytics/next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config"; 
import Head from "next/head"; // ✅ Import Head

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.code === "KeyM") {
        e.preventDefault();
        router.push("/maintainence");
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [router]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Analytics />
      <Head>
        <title>Intelligent Systems Design Lab SRM</title>
      </Head>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
