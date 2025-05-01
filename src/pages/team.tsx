import Image from "next/image";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Squares from '@/components/Squares';
import { motion } from "framer-motion";

type TeamMember = {
  id?: number;
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  otherLinks?: string[];
  image?: string;
};

export default function Team() {
  const labCoordinators: TeamMember[] = [
    {
      name: "Dr. E Poovammal",
      role: "Lab Coordinator",
      image: "/people/Poovammal.jpg",
      email: "poovamme@srmist.edu.in",
      // linkedin: "https://www.linkedin.com/in/poovammal",
      website: "https://www.srmist.edu.in/faculty/e-poovammal/",
    },
  ];

  const labIncharges: TeamMember[] = [
    {
      name: "Dr. B Sowmiya",
      role: "Lab Incharge",
      email: "sowmiyab@srmist.edu.in",
      image: "/people/Sowmiya.jpg",
      linkedin: "https://www.linkedin.com/in/sowmiya-b-40a0aa1a9/",
      website: "https://www.srmist.edu.in/faculty/b-sowmiya/",
    },
  ];

  const labTechnicians: TeamMember[] = [
    {
      name: "Mrs. Sangeeta",
      role: "Lab Technician",
      // image: "/technician1.jpg",
      // linkedin: "https://www.linkedin.com/in/sangeeta",
      // website: "https://sangeeta.com",

    },
  ];

  const presidentTeam: TeamMember[] = [
    {
      id: 100,
      name: "Shivam Bansal",
      role: "President",
      email: "sb2368@srmist.edu.in",
      image: "/people/100.jpg",
      linkedin: "https://www.linkedin.com/in/shivam-bansal",
      website: "https://shivambansal.com",
    },
  ];

  const studentTeam: TeamMember[] = [
    {
      id: 1,
      name: "Harshil Malhotra",
      role: "Student Member",
      email: "hm3673@srmist.edu.in",
      image: "/people/1.jpg",
      linkedin: "https://www.linkedin.com/in/harshilmalhotra/",
      website: "https://harshil-malhotra.vercel.app/",
      github: "https://github.com/Harshilmalhotra",
    },
    {
      id: 2,
      name: "Ashwinkumar A",
      role: "Student Member",
      image: "/people/2.jpg",
      email: "aa3106@srmist.edu.in",
      linkedin: "https://www.linkedin.com/in/ashwin-kumar-597341298",
      github: "https://github.com/Azhwin05",
    },
    {
      id: 3,
      name: "Keshav Gupta",
      role: "Student Member",
      image: "/people/3.jpg",
      email: "kg9687@srmist.edu.in",
      linkedin: "https://www.linkedin.com/in/keshav-gupta-6b4b8b228",
      website: "https://chic-kataifi-6bb675.netlify.app/",
      otherLinks: ["https://orcid.org/0009-0002-7433-2617"],
    },
    {
      id: 4,
      name: "Shan Neeraj",
      role: "Student Member",
      image: "/people/4.jpg",
      email: "sn0760@srmist.edu.in",
      linkedin:
        "https://www.linkedin.com/in/shan-neeraj-3683792b9",
      website: "https://areojoeshan2005.wixsite.com/my-site-3",
      github: "https://github.com/Shan-2005?tab=stars",
    },
    {
      id: 5,
      name: "Harsh Arora",
      role: "Student Member",
      image: "/people/5.jpeg",
      email: "ha9661@srmist.edu.in",
      linkedin: "https://www.linkedin.com/in/harsh-arora-4980b8165",
      github: "https://github.com/Harsh4r0ra",
    },
  ];

  

const renderCard = (person: TeamMember, index: number) => (
  <motion.div
    key={index}
    className="flex flex-col items-center bg-black border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-blue-500/40 transition-shadow"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative h-40 w-40 mb-4">
      <Image
        src={person.image}
        alt={person.name}
        layout="fill"
        objectFit="cover"
        className="rounded-full border-4 border-gray-700"
      />
    </div>

    <h3 className="text-xl font-medium">{person.name}</h3>
    <p className="text-gray-400">{person.role}</p>

    <div className="flex gap-4 mt-4 text-xl">
      {person.email && (
        <a
          href={`mailto:${person.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
          title={person.email}
        >
          <FaEnvelope />
        </a>
      )}
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
      )}
      {person.website && (
        <a
          href={person.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaGlobe />
        </a>
      )}
      {person.github && (
        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="..." />
          </svg>
        </a>
      )}
    </div>

    {person.otherLinks && person.otherLinks.length > 0 && (
      <div className="flex flex-col items-center mt-3 text-sm space-y-1">
        {person.otherLinks.map((link, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline break-all"
          >
            Other Link {i + 1}
          </a>
        ))}
      </div>
    )}
  </motion.div>
);



return (
  <div className="relative w-full min-h-screen overflow-hidden">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 -z-10 animate-gradient bg-[linear-gradient(270deg,_#0f0c29,_#302b63,_#24243e)] bg-[length:400%_400%]" />

    {/* Main Content */}
    <div className="relative z-30 text-white min-h-screen p-8 w-full">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4 text-center">
        Our Team
      </h1>
      <p className="text-lg text-gray-400 mb-12 text-center">
        An incredible team of amazing individuals
      </p>

      {/* Lab Coordinator */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Coordinator</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labCoordinators.map(renderCard)}
        </div>
      </section>

      {/* Lab Incharge */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Incharge</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labIncharges.map(renderCard)}
        </div>
      </section>

      {/* Lab Technician */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Technician</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labTechnicians.map(renderCard)}
        </div>
      </section>

      {/* President Team */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">President</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {presidentTeam.map(renderCard)}
        </div>
      </section>

      {/* Student Team */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Student Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {studentTeam.map(renderCard)}
        </div>
      </section>
    </div>
  </div>
);
