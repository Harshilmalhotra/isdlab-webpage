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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // const hasSeenPopup = localStorage.getItem("maintenancePopupShown");
    // if (!hasSeenPopup) {
    //   setShowPopup(true);
    // }

    const handleShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.code === "KeyM") {
        e.preventDefault();
        router.push("/maintainence");
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [router]);

  // const handleClosePopup = () => {
  //   localStorage.setItem("maintenancePopupShown", "true");
  //   setShowPopup(false);
  // };

  return (
    <>
      {/* {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0f0f0f] border border-blue-500 max-w-md mx-auto p-6 rounded-2xl shadow-2xl text-center space-y-4 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-blue-500">Scheduled Maintenance</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are currently in the process of upgrading our infrastructure and transitioning servers to enhance your experience. Temporary downtimes may occur. Your patience is truly appreciated as we strive for a smoother, faster future.
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 shadow-md"
            >
              Continue
            </button>
          </div>
        </div>
      )} */}


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