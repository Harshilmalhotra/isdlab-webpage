import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^\+\d{6,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must include country code (e.g. +91XXXXXXXXXX)");
      return;
    }

    try {
      const response = await fetch("https://formcarry.com/s/AJJQQuVCJBl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thanks for contacting us!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-white shadow-md shadow-blue-500/30 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-white shadow-md shadow-blue-500/30 focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (e.g. +91XXXXXXXXXX)"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-white shadow-md shadow-blue-500/30 focus:outline-none"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-white shadow-md shadow-blue-500/30 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-opacity-80 transition"
        >
          Send Message
        </button>
      </form>

      {/* Map + Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Map Section */}
        <div className="h-96 w-full rounded-xl overflow-hidden shadow-md shadow-blue-500/30">
        <iframe
  title="ISD Lab Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1324191350123!2d80.04216491482096!3d12.823517021646501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70ffce1e7cf%3A0xe9cc06efb9d08b55!2sTech%20Park%20Annexure%20I%2C%20SRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1714981419571!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

        </div>

        {/* Textual Address */}
        <div className="space-y-4 text-sm text-white/90 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">Lab Address</h2>
          <p>
            <strong>Intelligent Systems Design Lab</strong><br />
            Tech Park Annexure 1 Room 1509<br />
            Department of Computer Technologies<br />
            SRM Institute of Science and Technology<br />
            Kattankulathur, Chennai - 603203
          </p>
          <p className="mt-4">
            <strong>Contact Person:</strong> Dr. B Sowmiya<br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+919003322060" className="underline hover:text-blue-400">
              +91 90033 22060
            </a><br/>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@isdlabsrm.in" className="underline hover:text-blue-400">
              info@isdlabsrm.in
            </a>
          </p>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </div>
  );
}