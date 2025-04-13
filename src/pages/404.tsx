import Link from "next/link";
import Orb from "@/components/Orb";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Orb with 404 Text */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          
        />
      </div>
     
      {/* Error Text */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 absolute top-80">404</h1>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 absolute top-95">Page Not Found</h1>
        <p className="text-gray-400 mb-6 text-lg">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Sitemap Links */}
        <div className="flex flex-wrap justify-center gap-4 text-blue-500 font-medium">
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
    </div>
  );
}