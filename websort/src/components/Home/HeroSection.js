const HeroSection = () => {
  return (
    <>
      {/* 🖥️ desktop19 only */}
      <div className="show-home-desktop19">
        <div
          className="imgdesktop19"
          style={{
            backgroundImage: "url('/images/imgdesktop19.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className="p-16 m-0 max-w-[600px]">
            <h1 className="text-white font-inter text-3xl">
              Digitizing Ideas with Clean Code & Modern Design
            </h1>
            <p className="text-white font-fustat mt-4">
              At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
            </p>
            <div className="space-x-4 mt-6">
              <button className="font-montserrat bg-transparent text-white border border-white px-4 py-2 rounded">
                Contact Us
              </button>
              <button className="font-montserrat bg-transparent text-white border border-white px-4 py-2 rounded">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🖥️ desktop20 only */}
      <div className="show-home-desktop20">
        <div
          className="imgdesktop20"
          style={{
            backgroundImage: "url('/images/imgdesktop20.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className="p-16 m-0 max-w-[600px]">
            <h1 className="text-white font-inter text-3xl">
              Digitizing Ideas with Clean Code & Modern Design
            </h1>
            <p className="text-white font-fustat mt-4">
              At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
            </p>
            <div className="space-x-4 mt-6">
              <button className="font-montserrat bg-transparent text-white border border-white px-4 py-2 rounded">
                Contact Us
              </button>
              <button className="font-montserrat bg-transparent text-white border border-white px-4 py-2 rounded">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;