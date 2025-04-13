export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden bg-cyan-800">
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

        {/* Wave Graphic Floating at Bottom */}
        <img
  src="/wave.svg"
  alt="Wave Graphic"
  className="absolute -bottom-76 left-0 w-full h-auto z-10" // Adjusted bottom value
/>

        {/* Robot Graphic */}
        <img
          src="/robot.svg"
          alt="Robot Graphic"
          className="absolute right-0 bottom-0 w-1/3 sm:w-1/4 md:w-1/5 z-20"
        />
      </div>

      {/* Stats + What We Do Section */}
      <section className="relative z-0 flex flex-col items-center text-center bg-black min-h-screen overflow-hidden pt-32">
        {/* Stats Section */}
        <div className="bg-black rounded-xl shadow-lg border border-gray-700 px-8 py-6 flex flex-wrap justify-center gap-10 max-w-4xl relative z-20">
          <div className="text-center">
            <h4 className="text-sm text-gray-400 font-semibold">Students Benefited</h4>
            <p className="text-2xl text-blue-500 font-bold glow">2000+</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-400 font-semibold">Labs</h4>
            <p className="text-2xl text-blue-500 font-bold glow">20</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-400 font-semibold">Colleges Benefited</h4>
            <p className="text-2xl text-blue-500 font-bold glow">40</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm text-gray-400 font-semibold">Internships Offered</h4>
            <p className="text-2xl text-blue-500 font-bold glow">500+</p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-16 max-w-3xl relative z-20 px-6">
          <h2 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 w-16 inline-block align-middle mr-3"></span>
            What We do
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 w-16 inline-block align-middle ml-3"></span>
          </h2>
          <p className="text-gray-300">
            We complement the existing higher education system Project Based Learning – i.e. “Learn by Doing”. We train students, teachers and institutions by establishing an innovation culture tasked with solving real problems using technology. We build e-Yantra labs in colleges to facilitate training and to connect students and teachers to a wider innovation community served by e-Yantra.
          </p>
        </div>

        {/* Background Glow */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-30 z-0" />
      </section>
    </div>
  );
}
