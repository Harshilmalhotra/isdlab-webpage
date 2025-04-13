import Image from "next/image";

export default function Team() {
  const labCoordinators = [
    { name: "Dr. E Poovammal", role: "Lab Coordinator", image: "/people/Poovammal.jpg" },
  ];

  const labIncharges = [
    { name: "Dr. B Sowmiya", role: "Lab Incharge", image: "/people/Sowmiya.jpg" },
    { name: "Dr. Emily Davis", role: "Lab Incharge", image: "/incharge2.jpg" },
  ];

  const labTechnicians = [
    { name: "Mr. Mark Lee", role: "Lab Technician", image: "/technician1.jpg" },
    { name: "Ms. Sarah Brown", role: "Lab Technician", image: "/technician2.jpg" },
  ];

  const studentTeam = [
    { name: "Shivam Bansal", role: "Student Member", image: "/student2.jpg" },
    { name: "Harshil Malhotra", role: "Student Member", image: "/people/Harshil.jpg" },
    { name: "Bob Williams", role: "Student Member", image: "/student2.jpg" },
    { name: "Charlie Wilson", role: "Student Member", image: "/student3.jpg" },
    { name: "Diana Miller", role: "Student Member", image: "/student4.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

      {/* Lab Coordinator */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Coordinator</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labCoordinators.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
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
            </div>
          ))}
        </div>
      </section>

      {/* Lab Incharge */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Incharge</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labIncharges.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
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
            </div>
          ))}
        </div>
      </section>

      {/* Lab Technician */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Lab Technician</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {labTechnicians.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
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
            </div>
          ))}
        </div>
      </section>

      {/* Student Team */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Student Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {studentTeam.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}