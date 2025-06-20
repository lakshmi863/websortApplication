const Achievements = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/achive.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-16 px-8"
    >
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-white text-3xl font-semibold mb-4">One of our proudest achievements.</h1>
        <p className="text-white text-lg px-4">
          A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. It's a true reflection of our commitment to excellence.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
          <img src="/images/web.jpg" alt="Web Development" className="w-[280px] h-[180px] object-cover rounded-md mb-4" />
          <h2 className="text-white text-xl font-medium mb-2">Web Development</h2>
          <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
            Explore More
          </button>
        </div>
        <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
          <img src="/images/app.jpg" alt="App Development" className="w-[280px] h-[180px] object-cover rounded-md mb-4" />
          <h2 className="text-white text-xl font-medium mb-2">App Development</h2>
          <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
            Explore More
          </button>
        </div>
        <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
          <img src="/images/digital.jpg" alt="Digital Marketing" className="w-[280px] h-[180px] object-cover rounded-md mb-4" />
          <h2 className="text-white text-xl font-medium mb-2">Digital Marketing</h2>
          <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;