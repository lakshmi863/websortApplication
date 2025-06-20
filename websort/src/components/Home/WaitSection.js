const WaitSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/wait.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-16 px-8"
    >
      <div className="flex items-center justify-center font-[Montserrat]">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-white text-2xl font-semibold">See what opportunities await you</h1>
          <button className="bg-[#9037C3] text-white w-40 py-2 rounded-lg hover:bg-[#7d2cb0] transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitSection;