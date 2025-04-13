import Image from 'next/image';  // Import Image component from next/image

import CountUp from '@/components/CountUp'
import Squares from '@/components/Squares';
import AutoScrollCards from '@/components/AutoScrollCards';


export default function Home() {
  return (
    <div
      className="bg-black text-white font-sans"
      style={{
        overflowY: "scroll",
        msOverflowStyle: "none", // IE and Edge
        scrollbarWidth: "none", // Firefox
      }}
    >
      {/* Hero Section */}
      <div className="h-screen relative overflow-visible">
        
        <main className="h-full flex flex-col items-center justify-center text-center px-6 py-12 z-20 relative">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 absolute top-50 z-20">
            Intelligent Systems Design LAB
          </h1>
          <p className="max-w-xl mt-4 text-gray-300 absolute top-70 lg:top-70 z-20">
          Welcome to the Intelligent Systems Design Lab (ISD Lab) – a hub for cutting-edge research and student-driven innovation in robotics, AI, and embedded systems. From autonomous vehicles to smart IoT systems, we build, test, and scale intelligent systems for tomorrow’s world.
          </p>
          <div className="w-full h-full absolute z-10 block lg:hidden">
          <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#056dc2"
          hoverFillColor="#ffffff"
          ></Squares></div>
        </main>

        {/* Wave Graphic Floating into Next Section */}
        <Image
          src="/wave.svg"
          alt="Wave Graphic"
          width={500}  // Set appropriate width
          height={500} // Set appropriate height
          className="absolute -bottom-120 left-0 w-full h-auto z-10 pointer-events-none opacity-70 hidden sm:block"
        />

        {/* Robot Graphic */}
        <Image
          src="/robot.svg"
          alt="Robot Graphic"
          width={500}  // Set appropriate width
          height={500} // Set appropriate height
          className="absolute right-0 bottom-0 w-1/3 sm:w-1/4 md:w-1/5 z-20 hidden sm:block"
        />

        
      </div>

      {/* Stats + What We Do Section */}
      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden">
        {/* Stats Section */}
        <div className="relative z-40 my-10 top-10 h-auto bg-black/40 rounded-3xl shadow-[0_0_20px_10px_rgba(0,0,255,0.5)] px-6 py-8 sm:px-16 lg:px-8 lg:py-6 flex flex-wrap justify-around gap-4 sm:gap-12 lg:gap-6 max-w-6xl w-10/12 sm:w-2/3 mx-auto border border-gray-600">
          {[
            { label: "Industry Collaborations", value: "15",sign:"+" },
            { label: "Projects Completed", value: "23",sign:"+" },
            { label: "Courses Offered", value: "5",sign:"" },
            { label: "Students Benefited", value: "200",sign:"+" },
            { label: "Internships Offered", value: "50" ,sign:"+"},
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center min-w-[100px] sm:min-w-[140px] p-4 sm:p-6 lg:py-6 gap-y-6"
            >
              <h4 className="text-lg sm:text-xl text-white font-semibold mb-2">
                {item.label}
              </h4>
<div>
              <CountUp
                from={0}
                to={Number(item?.value) || 0}

                separator=","
                direction="up"
                duration={4}
                className="count-up-text text-2xl sm:text-3xl text-blue-500 font-extrabold"
              />
              <span className="count-up-text text-2xl sm:text-3xl text-blue-500 font-extrabold">{item.sign}</span>
              </div>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="relative z-40 mt-10 sm:mt-30 max-w-xl sm:max-w-3xl px-4 sm:px-6">
          <div className="relative w-full">
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r lg:-translate-x-130 from-black to-blue-500 h-1 sm:h-2 w-full hidden sm:block"></span>            <h2 className="relative text-3xl sm:text-5xl font-bold mb-4 text-center z-10">
              What We do
            </h2>
            <span className="absolute top-1/2 right-0 transform -translate-y-1/2  lg:translate-x-130 bg-gradient-to-r from-blue-500 to-black h-1 sm:h-2 w-full hidden sm:block"></span>
          </div>
          <p className="text-gray-300 text-base sm:text-xl mt-4 mb-50 text-justify">
          We champion Project-Based Learning by creating environments where students build, test, and deploy real-world systems. Through hands-on labs, institutional training, and partnerships with initiatives like e-Yantra, we foster innovation and technical excellence.
          </p>
        </div>

        {/* Cube Graphic */}
        <Image
          src="/cube1.svg"
          alt="cube1"
          width={300} // Adjusted width for mobile
          height={300} // Adjusted height for mobile
          className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 md:w-1/4 z-20 opacity-80"
        />
      </section>

      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden">
        <Image
          src="/cube2.svg"
          alt="cube1"
          width={300} // Set appropriate width
          height={300} // Set appropriate height
          className="absolute top-0 left-0 w-1/2 sm:w-1/3 md:w-1/4 z-20"
        />
        <div className="relative z-20 mt-26 mb-24 gap-y-15 gap-6 flex flex-col sm:flex-row justify-between items-center w-[90%] sm:w-[80%] h-auto mx-auto gap-6 sm:gap-y-30">
          {/* Box 1 */}
          <div className="bg-black/40  w-full sm:w-[30%] border-2 border-gray-600 rounded-lg shadow-[0_0_20px_10px_rgba(0,0,255,0.5)] flex flex-col items-center justify-center p-6">
            <p className="text-white text-xl font-bold">Robotics & Automation</p>
            <p className="text-gray-300 text-base mt-2 text-justify">
            We build intelligent robots—autonomous vehicles, robotic arms, and sensor-driven systems—for real-world applications. Using Arduino, ROS, and Raspberry Pi, students learn to design, prototype, and program robots that navigate, interact, and perform tasks with precision.
              
               </p>
          </div>
          {/* Box 2 */}
          <div className="bg-black/40  w-full sm:w-[30%] border-2 border-gray-600 rounded-lg shadow-[0_0_20px_10px_rgba(0,0,255,0.5)] flex flex-col items-center justify-center p-6">
            <p className="text-white text-xl font-bold">Embedded Systems & IoT</p>
            <p className="text-gray-300 text-base mt-2">
            Our lab develops smart embedded systems and IoT devices using STM32, ESP32, and custom PCBs. We focus on low-power designs, real-time control, and wireless connectivity for applications in home automation, health tech, and industrial monitoring.  
               </p>
          </div>
          {/* Box 3 */}
          <div className="bg-black/40  w-full sm:w-[30%] border-2 border-gray-600 rounded-lg shadow-[0_0_20px_10px_rgba(0,0,255,0.5)] flex flex-col items-center justify-center p-6">
            <p className="text-white text-xl font-bold">AI for Intelligent Systems</p>
            <p className="text-gray-300 text-base mt-2">
            We integrate AI with embedded platforms to enable real-time vision, speech, and decision-making. From object detection to voice control, our systems use lightweight models on edge devices for fast, intelligent, and adaptive performance.

               </p>
          </div>
        </div>

        <Image
          src="/shell4.svg"
          alt="shell4"
          width={500} // Set appropriate width
          height={500} // Set appropriate height
          className="absolute bottom-0 w-1/4 sm:w-1/5 md:w-1/6 z-10"
        />
      </section>

      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden px-4 py-12">
  {/* Decorative Shells */}
  <Image
    src="/shell3.svg"
    alt="shell3"
    width={500}
    height={500}
    className="absolute top-0 w-1/3 sm:w-1/5 md:w-1/6 z-30"
  />
  <Image
    src="/shell1.svg"
    alt="shell1"
    width={500}
    height={500}
    className="absolute left-0 top-40 w-1/4 sm:w-1/10 md:w-1/12 z-10"
  />
  <Image
    src="/shell2.svg"
    alt="shell2"
    width={500}
    height={500}
    className="absolute right-0 top-20 w-1/4 sm:w-1/10 md:w-1/12 z-10"
  />

  {/* Section Title */}
  <div className="relative top-10 z-40 mt-10 max-w-5xl w-full">
    <h1 className="text-white text-3xl sm:text-4xl font-bold mb-10">
      What Makes Us Unique
    </h1>

    {/* Content Box */}
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-black/50 rounded-lg shadow-[0_0_20px_10px_rgba(173,216,230,0.5)] p-4 sm:p-6 w-full mx-auto gap-6">
      {/* Left Section: Image */}
     {/* Left Section: Image */}
<div className="w-full md:w-1/2">
  <Image
    src="/smorphiportrait.webp"
    alt="NFT Artwork"
    width={500}
    height={500}
    className="rounded-lg w-full h-auto filter brightness-120 saturate-150"
    style={{ mixBlendMode: 'multiply' }} // Adds a bluish tint effect
  />
</div>

{/* Right Section: Content */}
<div className="w-full md:w-1/2 text-left">
  <div className="space-y-6"> {/* Increased spacing between sections */}
    {/* Section 1 */}
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
        Innovation at Every Level
      </h3>
      <p className="text-base sm:text-lg text-gray-300">
        Students lead projects from idea to deployment—solving real-world problems through technology.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold text-green-600">
        Cutting-Edge Tools
      </h3>
      <p className="text-base sm:text-lg text-gray-300">
        We use ROS, Arduino, STM32, Jetson Nano, and TensorFlow Lite for building smart systems.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-600">
        Multidisciplinary Team
      </h3>
      <p className="text-base sm:text-lg text-gray-300">
        Students, engineers, and researchers collaborate to bring robotics and AI ideas to life.
      </p>
    </div>
  </div>
</div>



     
    </div>
  </div>
</section>


<section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden px-4 py-12">
  {/* Section Title */}
  <div className="relative z-40 mt-10 max-w-xl sm:max-w-3xl px-4 sm:px-6">
    <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center text-white">
      Our Success Stories
    </h2>
    <p className="text-gray-300 text-base sm:text-xl mt-4 mb-10 text-justify">
      We complement the existing higher education system Project Based Learning
      – i.e. “Learn by Doing”. We train students, teachers, and institutions by
      establishing an innovation culture tasked with solving real problems
      using technology. We build e-Yantra labs in colleges to facilitate
      training and to connect students and teachers to a wider innovation
      community served by e-Yantra.
    </p>
  </div>

  {/* Gradient Divider */}
  <div className="w-full h-1 bg-gradient-to-r from-black via-white to-black mb-8"></div>

  {/* Carousel */}
  <main >
       <AutoScrollCards />
     </main>

  {/* Gradient Divider */}
  <div className="w-full h-1 bg-gradient-to-r from-black via-blue-500 to-black mt-8"></div>
</section>


    </div>
  );
}
