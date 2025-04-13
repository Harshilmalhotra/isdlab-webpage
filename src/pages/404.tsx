import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Robotics Animation */}
        <div className="w-full max-w-sm mb-6">
          <Image
            src="/robot-404.gif" // 👈 place a cool robot gif in public/ as "robot-404.gif"
            alt="404 Robot"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>

        {/* Error Text */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6 text-lg">Oops! The page you’re looking for doesn’t exist.</p>

        {/* Sitemap Links */}
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/initiatives">Initiatives</Link>
          <Link href="/team">Team</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/events">Events</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-500 py-4 text-center">
        &copy; {new Date().getFullYear()} ISD Lab @ SRM Institute of Science and Technology
      </footer>
    </div>
  );
}
