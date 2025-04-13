import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar"; // Adjust the path based on your project structure

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}