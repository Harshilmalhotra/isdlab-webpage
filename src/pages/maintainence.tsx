import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiSettings, FiCamera, FiCalendar } from "react-icons/fi";

export default function Maintenance() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const pinInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && pinInputRef.current) {
      pinInputRef.current.focus();
    }
  }, [isAuthenticated]);

  const handlePinSubmit = () => {
  const correctPin = process.env.NEXT_PUBLIC_PIN_CODE;
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
    return (
      <div className="flex justify-center mb-4">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`w-4 h-4 mx-2 rounded-full border-2 transition-colors ${
              pin[i] ? "bg-blue-500 border-blue-500" : "border-gray-400"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl text-center w-full max-w-sm border border-white/20 ${
              shake ? "animate-shake" : ""
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-3xl font-extrabold mb-2 text-blue-400">🔒 Enter PIN</h2>
            <p className="text-gray-300 mb-6 text-sm">
              This page contains tools to edit how the website looks and behaves.
            </p>

            {renderPinCircles()}

            <input
              ref={pinInputRef}
              type="password"
              value={pin}
              maxLength={4}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
              className="w-full p-3 rounded-lg bg-gray-800/70 text-white text-center tracking-widest mb-4 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              placeholder="••••"
            />

            <button
              onClick={handlePinSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full shadow-md hover:shadow-blue-500/40 transition-all"
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

  const tools = [
    { label: "Open CMS", icon: <FiSettings size={24} />, action: () => alert("This tool is under development.") },
    { label: "Attendance", icon: <FiCheckCircle size={24} />, action: () => router.push("/attendance") },
    {
      label: "Gallery Update",
      icon: <FiCamera size={24} />,
      action: () => window.open("https://drive.google.com/drive/folders/1fVUVF6IpyuZG70v9gIrmizPtRikSKNWP", "_blank"),
    },
    { label: "Events Update", icon: <FiCalendar size={24} />, action: () => window.open("https://docs.google.com/spreadsheets/d/1rPo6Vi4m9S1AECWMWfDDv80ypSHSYS7JydJUW7XTGBw", "_blank"), },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-400">🛠 Maintenance Tools</h1>
      <p className="text-gray-400 mb-8 text-center max-w-xl mx-auto">
        Manage and update your website quickly and securely. Only authorized users can access these tools.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {tools.map((tool, i) => (
          <motion.button
            key={i}
            onClick={tool.action}
            className="bg-white/10 hover:bg-white/20 border border-white/10 p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-3 transition-all hover:shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tool.icon}
            <span className="text-lg font-medium">{tool.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <p className="mt-12 text-center text-gray-400 text-sm">
        For issues or suggestions, contact{" "}
        <a
          href="https://www.linkedin.com/in/harshilmalhotra/"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harshil Malhotra
        </a>
      </p>
    </motion.div>
  );
}
