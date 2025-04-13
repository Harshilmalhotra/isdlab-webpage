import RollingGallery from '@/components/RollingGallery'
  
import Carousel from '@/components/Carousel'

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
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            ISD LAB
          </h1>
          <p className="max-w-xl mt-4 text-gray-300">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed
            AI-based data security. Proof of Stake, its consensus algorithm enables
            unlimited speeds.
          </p>
        </main>

        {/* Wave Graphic Floating into Next Section */}
        <img
          src="/wave.svg"
          alt="Wave Graphic"
          className="absolute -bottom-120 left-0 w-full h-auto z-10 pointer-events-none opacity-70"
        />

        {/* Robot Graphic */}
        <img
          src="/robot.svg"
          alt="Robot Graphic"
          className="absolute right-0 bottom-0 w-1/3 sm:w-1/4 md:w-1/5 z-20"
        />
      </div>

      {/* Stats + What We Do Section */}
      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden">
        {/* Stats Section */}
        <div className="relative z-40 my-10 top-20 h-auto bg-black/10 rounded-3xl shadow-[0_0_50px_20px_rgba(173,216,230,0.5)] px-16 py-10 lg:py-10 flex flex-wrap justify-around gap-12 max-w-6xl w-full mx-auto border border-gray-600">
          {[
            { label: "Students Benefited", value: "2000+" },
            { label: "Labs", value: "20" },
            { label: "Colleges Benefited", value: "40" },
            { label: "Internships Offered", value: "500+" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center min-w-[140px] p-6 sm:p-8 lg:py-10 gap-y-10"
            >
              <h4 className="text-xl text-white font-semibold mb-2">{item.label}</h4>
              <p className="text-3xl text-blue-500 font-extrabold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="relative z-40 mt-30 max-w-3xl px-6">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-black to-blue-500 h-2 w-40 inline-block align-middle mr-8 pr-8"></span>
            What We do
            <span className="bg-gradient-to-r from-blue-500 to-black h-2 w-40 inline-block align-middle ml-3"></span>
          </h2>
          <p className="text-gray-300 text-xl sm:text-xl mt-4">
            We complement the existing higher education system Project Based Learning – i.e. “Learn by Doing”. We train students, teachers and institutions by establishing an innovation culture tasked with solving real problems using technology. We build e-Yantra labs in colleges to facilitate training and to connect students and teachers to a wider innovation community served by e-Yantra.
          </p>
        </div>

        <img
          src="/cube1.svg"
          alt="cube1"
          className="absolute bottom-0 left-0 w-3/4 sm:w-1/3 md:w-1/4 z-20"
        />
      </section>

      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden">
        <img
          src="/cube2.svg"
          alt="cube1"
          className="absolute top-0 left-0 w-3/4 sm:w-1/3 md:w-1/4 z-20"
        />
        <div className="position absolute z-20 top-20 flex justify-between items-center w-[80%] h-[70vh] mx-auto">
          {/* Box 1 */}
          <div className="bg-black h-full w-[30%] rounded-lg shadow-[0_0_20px_10px_rgba(173,216,230,0.5)] flex items-center justify-center">
            <p className="text-white text-xl font-bold">Box 1</p>
          </div>
          {/* Box 2 */}
          <div className="bg-black h-full w-[30%] rounded-lg shadow-[0_0_20px_10px_rgba(173,216,230,0.5)] flex items-center justify-center">
            <p className="text-white text-xl font-bold">Box 2</p>
          </div>
          {/* Box 3 */}
          <div className="bg-black h-full w-[30%] rounded-lg shadow-[0_0_20px_10px_rgba(173,216,230,0.5)] flex items-center justify-center">
            <p className="text-white text-xl font-bold">Box 3</p>
          </div>
        </div>

        <img
          src="/shell4.svg"
          alt="shell4"
          className="absolute bottom-0 w-1/4 sm:w-1/5 md:w-1/6 z-10"
        />

      </section>

      <section className="relative flex flex-col items-center text-center bg-black min-h-screen overflow-hidden">
        {/* Decorative Shells */}
        <img
          src="/shell3.svg"
          alt="shell3"
          className="absolute top-0 w-1/4 sm:w-1/5 md:w-1/6 z-30"
        />
        <img
          src="/shell1.svg"
          alt="shell1"
          className="absolute left-0 top-40 w-1/8 sm:w-1/10 md:w-1/12 z-10"
        />
        <img
          src="/shell2.svg"
          alt="shell2"
          className="absolute right-0 top-20 w-1/8 sm:w-1/10 md:w-1/12 z-10"
        />

        {/* Section Title */}

        <div className="relative z-40 mt-30 max-w-3xl px-6">
        <h1 className="text-white text-4xl font-bold mt-16 mb-20">
          What Makes Us Unique
        </h1>

        {/* Content Box */}
        <div className="relative flex items-center justify-between bg-black rounded-lg shadow-[0_0_20px_10px_rgba(173,216,230,0.5)] p-6 w-[90%] mx-auto">
          {/* Left Section: Image */}
          <div className="w-1/2">
            <img
              src="/path-to-image.jpg"
              alt="NFT Artwork"
              className="rounded-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-1/2 pl-6 text-left">
            <h2 className="text-white text-2xl font-bold mb-2">ANYBODIES</h2>
            <p className="text-gray-300 mb-4">
              It’s time to bridge the digital and physical. Anybodies helps established brands like Toys'R'Us connect real-life places and products with NFTs.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline font-semibold"
            >
              Learn more about NFTs on Solana
            </a>
          </div>
        </div>

        </div>
      </section>

      <section className="bg-black text-white py-16">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">
      <span className="bg-gradient-to-r  from-black to-blue-500 h-1 w-16 inline-block align-middle mr-3"></span>
      Our Success Stories
      <span className="bg-gradient-to-rh-1  from-blue-500 to-black  w-16 inline-block align-middle ml-3"></span>
    </h1>
    <p className="text-gray-300 max-w-3xl mx-auto text-lg">
      At e-Yantra, we believe in empowering innovators and dreamers to turn their ideas into reality. Over the years, participants of our various initiatives have gone on to create impactful startups across diverse domains. These stories of success are a testament to the power of perseverance, innovation, and the unique opportunities provided by our competitions. Be inspired by the journeys of these changemakers who started with us and are now shaping the future.
    </p>
  </div>

  <RollingGallery autoplay={true} pauseOnHover={true} className="w-full" />
</section>

{/* <div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div> */}


    
    </div>
  );
}