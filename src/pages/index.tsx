export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
        <main className="flex flex-col items-center justify-center text-center px-6 py-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            ISD LAB
          </h1>
          <p className="max-w-xl mt-4 text-gray-300">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed
            AI-based data security. Proof of Stake, its consensus algorithm enables
            unlimited speeds.
          </p>
          <div className="mt-10 w-full flex justify-center relative">
            {/* Wave Graphic */}
            <img
              src="/wave.svg"
              alt="Wave Graphic"
              className="absolute top-0 left-0 w-screen h-auto"
            />
            {/* Robot Graphic */}
            <img
              src="/robot.svg"
              alt="Robot Graphic"
              className="absolute right-0 bottom-0 w-1/3 sm:w-1/4 md:w-1/5"
            />
          </div>
        </main>
      </div>
    </>
  );
}