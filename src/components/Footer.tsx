// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#18164f] to-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-6">
              {/* ISD Lab Logo */}
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="ISD Lab Logo"
                  width={120}
                  height={48}
                  className="max-h-20 w-auto"
                />
              </div>

              <div className="mb-4">
                <Image
                  src="/ctech_logo.png"
                  alt="CTECH LOGO"
                  width={140}
                  height={80}
                  className="max-h-20 w-auto"
                />
              </div>


              {/* SRM Logo */}
              <div>
                <Image
                  src="/srmlogowhite.png"
                  alt="SRM University Logo"
                  width={500}
                  height={120}
                  className="max-h-20 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/initiatives" className="hover:text-blue-400 transition">Initiatives</Link></li>
              <li><Link href="/team" className="hover:text-blue-400 transition">Team</Link></li>
              <li><Link href="/publications" className="hover:text-blue-400 transition">Publications</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition">Events</Link></li>
              <li><Link href="/latest-news" className="hover:text-blue-400 transition">Latest News</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Research Areas</h3>
            <ul className="space-y-1">
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
              <li>Robotics & Automation</li>
              <li>Embedded Systems</li>
              <li>Internet of Things (IoT)</li>
              <li>Human-Robot Interaction</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <address className="not-italic">
              <div className="mb-3">
                <p className="font-extrabold">Intelligent Systems Design Lab</p>
                <p>Tech Park Annexure 1 Room1509</p>
                <p>Department of Computer Technologies</p>
                <p>SRM Institute of Science and Technology</p>
                <p>Kattankulathur, Chennai - 603203</p>
              </div>
              <div className="space-y-1">
                <p><span className="font-medium">Email:</span> <a href="mailto:info@isdlabsrm.in" className="hover:text-blue-400 transition">info@isdlabsrm.in</a></p>
                <p><span className="font-medium">Phone:</span> +91 90033 22060</p>
              </div>
            </address>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-6 py-6 border-t border-b border-gray-800 mb-6">
          <a href="https://twitter.com/isdlab" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://github.com/isdlab" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/isdlab" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.youtube.com/isdlab" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Copyright and credits section */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} ISD Lab, SRM Institute of Science and Technology, Kattankulathur. All rights reserved.</p>
          <p className="mt-4 pt-3 border-t border-gray-800 text-s text-gray-500">
            {/* <a
              href="https://www.linkedin.com/in/harshilmalhotra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            > */}
              Created with ❤️ by Harshil Malhotra
            {/* </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
}