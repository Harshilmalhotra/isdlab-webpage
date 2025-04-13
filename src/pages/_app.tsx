import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
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


//MOBILE RESTRICTIONS


// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState, useEffect } from "react";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const [isMobile, setIsMobile] = useState(false);
//   const [allowMobileView, setAllowMobileView] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Detect mobile devices (width <= 768px)
//     };

//     handleResize(); // Check on initial load
//     window.addEventListener("resize", handleResize); // Add resize listener
//     return () => window.removeEventListener("resize", handleResize); // Cleanup listener
//   }, []);

//   if (isMobile && !allowMobileView) {
//     return (
//       <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center p-6 z-50">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Please open this site on a desktop, laptop, or tablet for the best experience.
//         </h1>
//         <p className="text-gray-400 text-center mb-6">
//           Some features may not work properly on mobile devices.
//         </p>
//         <button
//           onClick={() => setAllowMobileView(true)}
//           className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded-full text-xs transition duration-300"
//         >
//           Continue
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={router.route}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//           className="min-h-screen"
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//       <Footer />
//     </>
//   );
// }