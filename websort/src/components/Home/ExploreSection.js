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

        {/* Text & Image */}
        <div
          className="
            flex flex-col max-w-3xl
            iphone56:items-center iphone57:items-center iphone58:items-center iphone61:items-center iphone62:items-center
            iphone56:text-center iphone57:text-center iphone58:text-center iphone61:text-center iphone62:text-center
          "
        >
          {/* Heading */}
          <h1
            className="
              font-montserrat text-[40px] font-bold leading-[100%] text-white
              iphone56:order-1 iphone57:order-1 iphone58:order-1 iphone61:order-1 iphone62:order-1
              desktop20:order-1
            "
          >
            See Our Work in Web Design & Development
          </h1>

          {/* Image (Second in iPhones) */}
          <img
            src="/images/explorep.png"
            alt="explore"
            className="
              w-[500px] h-auto object-contain mt-6
              iphone56:order-2 iphone57:order-2 iphone58:order-2 iphone61:order-2 iphone62:order-2
              desktop20:hidden
            "
          />

          {/* Paragraph */}
          <p
            className="
              font-montserrat text-[22px] font-medium leading-[150%] text-white mt-4
              iphone56:order-3 iphone57:order-3 iphone58:order-3 iphone61:order-3 iphone62:order-3
              desktop20:order-2
            "
          >
            We specialize in building responsive, user-friendly websites tailored to client needs.
            Take a look at our recent projects to see how design and functionality come together.
          </p>

          <button className="mt-6 font-montserrat text-white border border-white px-6 py-2 rounded w-fit">
            Explore More
          </button>
        </div>

        {/* Desktop-only image (normal right-side image) */}
        <img
          src="/images/explorep.png"
          alt="explore"
          className="w-[500px] h-auto object-contain hidden desktop20:block"
        />
      </div>
    </div>
  );
};

export default ExploreSection;
