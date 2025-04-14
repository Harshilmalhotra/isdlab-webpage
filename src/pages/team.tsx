import Image from "next/image";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Team() {
  const labCoordinators = [
    {
      name: "Dr. E Poovammal",
      role: "Lab Coordinator",
      image: "/people/Poovammal.jpg",
      linkedin: "https://www.linkedin.com/in/poovammal",
      website: "https://poovammal.com",
    },
  ];

  const labIncharges = [
    {
      name: "Dr. B Sowmiya",
      role: "Lab Incharge",
      image: "/people/Sowmiya.jpg",
      linkedin: "https://www.linkedin.com/in/sowmiya",
      website: "https://sowmiya.com",
    },
  ];

  const labTechnicians = [
    {
      name: "Mrs. Sangeeta",
      role: "Lab Technician",
      image: "/technician1.jpg",
      linkedin: "https://www.linkedin.com/in/sangeeta",
      website: "https://sangeeta.com",
    },
  ];

  const studentTeam = [
    {
      name: "Shivam Bansal",
      role: "Student Member",
      image: "/student2.jpg",
      linkedin: "https://www.linkedin.com/in/shivam-bansal",
      website: "https://shivambansal.com",
    },
    {
      name: "Harshil Malhotra",
      role: "Student Member",
      image: "/people/Harshil.jpg",
      linkedin: "https://www.linkedin.com/in/harshil-malhotra",
      website: "https://harshilmalhotra.com",
    },
  ];

  const renderCard = (person: any, index: number) => (
    <div
      key={index}
      className="flex flex-col items-center bg-black border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-blue-500/40 transition-shadow"
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
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href={person.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative z-30 bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
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

      {/* Student Team */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Student Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {studentTeam.map(renderCard)}
        </div>
      </section>
    </div>
  );
}
