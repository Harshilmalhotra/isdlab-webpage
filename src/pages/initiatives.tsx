import { useRef, useState, useEffect } from "react";
import Image from "next/image"; // Keep the import as we will use it
import DarkVeil from '@/components/DarkVeil';
export default function IndustryCoursesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [offsetY, setOffsetY] = useState(0);

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
        "/initiatives/hero.jpg",
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

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen scroll-smooth">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/initiatives/ini2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY * 0.5}px`, // Parallax effect
        }}
      />

      {/* Main Content */}
<section className="relative w-screen h-[90vh] sm:h-[95vh] flex flex-col justify-center items-center text-center p-0 m-0 overflow-x-hidden">
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100%', minHeight: '100%', zIndex: 0 }}>
    <div style={{ width: '100%', height: '100%' }}>
      <DarkVeil
        hueShift={5}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1}
        scanlineFrequency={0}
        warpAmount={2}
        resolutionScale={1}
      />
    </div>
  </div>
  {/* Overlayed Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
    <div className="w-full text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-md text-center">
        Initiatives
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 w-10/12 mx-auto text-center">
        Explore our industry-collaborative programs bridging academia with real-world innovation.
        From embedded systems and PCB design to cloud-native development—equip yourself with in-demand skills.
      </p>
    </div>
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
        html, body {
          scroll-padding-top: 80px;
          overflow-x: hidden;
          max-width: 100vw;
        }
      `}</style>

      {
        courses.map((course) => {
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
                  className={`flex gap-4 flex-wrap ${showArrows ? "overflow-x-auto" : "overflow-x-visible"
                    } no-scrollbar scroll-smooth px-2`}
                >
                  {course.images.map((imgSrc, i) => (
                    <div key={i} className="relative w-40 h-40 sm:w-60 sm:h-60">
                      <Image
                        src={imgSrc}
                        alt={`${course.title} image ${i + 1}`}
                        fill
                        className="rounded-lg object-cover shadow-md cursor-zoom-in transition-transform duration-200 hover:scale-105"
                        onClick={() => setSelectedImage(imgSrc)}
                      />
                    </div>
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
        })
      }

      {/* Image Modal */}
      {
        selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Zoomed"
              width={1000}
              height={1000}
              className="max-w-[90%] max-h-[90%] object-contain cursor-zoom-out"
            />
          </div>
        )
      }
    </div >
  );
}