import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function Maintainence() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const pinInputRef = useRef<HTMLInputElement>(null); // Explicitly define the type
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && pinInputRef.current) {
      pinInputRef.current.focus();
    }
  }, [isAuthenticated]);

  const handlePinSubmit = () => {
    const correctPin = "1234";
    if (pin === correctPin) {
      setShowSuccess(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        setShowSuccess(false);
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const renderPinCircles = () => {
    const circles = [];
    for (let i = 0; i < 4; i++) {
      circles.push(
        <motion.div
          key={i}
          className={`w-4 h-4 mx-2 rounded-full border-2 ${
            pin[i] ? "bg-blue-500 border-blue-500" : "border-gray-500"
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      );
    }
    return <div className="flex justify-center mb-4">{circles}</div>;
  };

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-gray-900 p-8 rounded-xl shadow-2xl text-center w-full max-w-sm relative ${
              shake ? "animate-shake" : ""
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-500">Enter PIN</h2>
            <p className="text-gray-400 mb-6 text-sm">
              This page contains tools to edit how the website looks and behaves. Make changes carefully.
            </p>

            {renderPinCircles()}

            <input
              ref={pinInputRef}
              type="password"
              value={pin}
              maxLength={4}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
              className="w-full p-2 rounded bg-gray-800 text-white text-center tracking-widest mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handlePinSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Submit
            </button>

            <AnimatePresence>
              {shake && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-red-400 flex items-center justify-center gap-2"
                >
                  <FiXCircle className="text-lg" /> Incorrect PIN
                </motion.div>
              )}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-green-400 flex items-center justify-center gap-2"
                >
                  <FiCheckCircle className="text-lg" /> Access Granted
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">Maintainence Tools</h1>
      <p className="text-gray-400 mb-8 text-center">
        This page contains tools to edit how the website looks and behaves. Make changes carefully.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {[
          { label: "Open CMS", action: () => router.push("/cms") },
          { label: "Attendance", action: () => router.push("/attendance") },
          {
            label: "Know the Developer",
            action: () => window.open("https://www.linkedin.com/in/harshilmalhotra/", "_blank")
          },
          {
            label: "Know the Designer",
            action: () => window.open("https://www.linkedin.com/in/ayushk277/", "_blank")
          },
          {
            label: "Additional Tool 1",
            action: () => alert("This tool is under development.")
          },
          {
            label: "Additional Tool 2",
            action: () => alert("This tool is under development.")
          }
        ].map((tool, i) => (
          <motion.button
            key={i}
            onClick={tool.action}
            className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tool.label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
