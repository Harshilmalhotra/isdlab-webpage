import { useRef, useState } from "react";
import Image from "next/image";

export default function IndustryCoursesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const courses = [
    {
      id: "PCB",
      title: "PCB Design – Industry Elective by Radio Studio, Chennai",
      description:
        "In collaboration with Radio Studio, Chennai, our lab offers a specialized elective in PCB (Printed Circuit Board) Design, aimed at bridging academic learning with real-world electronics design practices. This course guides students through the complete PCB development lifecycle — from schematic capture to layout, fabrication, and testing. Participants gain hands-on experience with industry-grade tools and workflows, enabling them to design compact, efficient, and production-ready circuit boards. The course is ideal for students interested in embedded systems, hardware prototyping, and IoT product development.",
      images: [
        "/initiatives/pcb1.jpg",
        "/initiatives/pcb2.jpg",
        "/initiatives/pcb3.jpg",
      ],
    },
    {
      id: "Cloud",
      title: "Cloud Computing – An Industry Essential (4th Semester CSE)",
      description:
        "This industry-backed course in Cloud Computing is tailored for 4th semester Computer Science students to equip them with critical cloud skills in today’s digital-first world. Developed with input from cloud service providers, the curriculum covers infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS), containerization, DevOps practices, and cloud security. Students engage in practical labs using platforms like AWS, Azure, and Google Cloud, giving them real-time exposure to deploying scalable applications and managing cloud-native environments.",
      images: [
        "/initiatives/cl1.jpg",
        "/initiatives/cl2.jpg",
      ],
    },
  ];

  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollImages = (id: string, direction: "left" | "right") => {
    const container = scrollContainerRefs.current[id];
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">


      
      <section className="relative h-[90vh] sm:h-[95vh] flex flex-col justify-center items-center text-center px-6 sm:px-12">
  {/* Background Image */}
 
  <div className="absolute inset-0 -z-10">
  <Image
    src="/initiatives/hero.jpg"
    alt="Initiatives Background"
    fill
    style={{ objectFit: "cover" }}
    priority
  />
</div>



  {/* Overlay */}
  <div className="absolute inset-0 bg-black  bg-opacity-60 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-md">
      Initiatives
    </h1>
    <p className="text-lg sm:text-xl text-gray-300">
      Explore our industry-collaborative programs bridging academia with real-world innovation.
      From embedded systems and PCB design to cloud-native development—equip yourself with in-demand skills.
    </p>
  </div>
</section>

<nav className="sticky top-15 bg-black z-50 shadow-md border-b border-gray-700">
        <ul className="flex justify-center space-x-6 py-4 mt-2">
          {courses.map((course) => (
            <li key={course.id}>
              <a
                href={`#${course.id}`}
                className="text-gray-300 hover:text-white transition duration-200 text-sm sm:text-base"
              >
                {course.title.split("–")[0].trim()}
              </a>
            </li>
          ))}
        </ul>
      </nav>


      <style jsx global>{`
        html {
          scroll-padding-top: 80px;
        }
      `}</style>

      {courses.map((course) => {
        const showArrows = course.images.length > 4;

        return (
          <section
            key={course.id}
            id={course.id}
            className="py-16 px-6 sm:px-12 max-w-6xl mx-auto border-b border-gray-800"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{course.title}</h2>
            <p className="text-gray-300 text-md sm:text-lg mb-6">{course.description}</p>

            <div className="relative">
              {showArrows && (
                <button
                  onClick={() => scrollImages(course.id, "left")}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full z-10"
                >
                  ◀
                </button>
              )}

<div
  ref={(el) => {
    scrollContainerRefs.current[course.id] = el;
  }}
  className={`flex gap-4 flex-wrap ${
    showArrows ? "overflow-x-auto" : "overflow-x-visible"
  } no-scrollbar scroll-smooth px-2`}
>
                {course.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`${course.title} image ${i + 1}`}
                    className="rounded-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] h-40 object-cover shadow-md cursor-zoom-in transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedImage(imgSrc)}
                  />
                ))}
              </div>

              {showArrows && (
                <button
                  onClick={() => scrollImages(course.id, "right")}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full z-10"
                >
                  ▶
                </button>
              )}
            </div>
          </section>
        );
      })}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] object-contain cursor-zoom-out"
          />
        </div>
      )}

<div className="absolute inset-0 -z-10 bg-gray-900">
  <Image
    src="/initiatives/hero.jpg"
    alt="Initiatives Background"
    layout="fill"
    objectFit="cover"
    priority
  />
</div>
    
    </div>
  );
}
