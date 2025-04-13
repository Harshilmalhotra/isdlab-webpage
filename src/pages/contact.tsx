import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for contacting us! Someone will get back to you soon.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-[200px]">
        {/* <img
          src="/wave.svg" // Replace with the path to your wave image
          alt="Wave Background"
          className="w-full h-full object-cover"
        /> */}
      </div>
<div>
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-10 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-300 text-white font-medium py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Additional Contact Information */}
      <div className="mt-12 text-center">
        <p className="text-lg">
          You can also reach us at:{" "}
          <a href="mailto:contact@isdlab.com" className="text-blue-500 hover:underline">
            contact@isdlab.com
          </a>
        </p>
        <p className="text-lg mt-4">
          Call us:{" "}
          <a href="tel:+1234567890" className="text-blue-500 hover:underline">
            +1 234 567 890
          </a>
        </p>
      </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
}