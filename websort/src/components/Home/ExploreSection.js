const ExploreSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/explore.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col desktop20:flex-row items-center justify-between max-w-7xl mx-auto p-8 gap-8">
        <div className="flex flex-col max-w-3xl text-left">
          <h1 className="font-montserrat text-[50px] font-normal leading-[100%] tracking-[0%] text-white">
            See Our Work in Web Design & Development
          </h1>
          <p className="font-montserrat text-[35px] font-normal leading-[100%] tracking-[0%] mt-4 text-white">
            We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
          </p>
          <button className="mt-6 font-montserrat text-white border border-white px-6 py-2 rounded w-fit">
            Explore More
          </button>
        </div>
        <img src="/images/explorep.png" alt="explore" className="w-[500px] h-auto object-contain" />
      </div>
    </div>
  );
};

export default ExploreSection;
