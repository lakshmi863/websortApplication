import ProjectsGrid from './ProjectsGrid';
const AboutSection = () => {
  return (
    <div
      className="imgdesktop20"
      style={{
        backgroundImage: "url('/images/imgboxdesktop20.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="flex flex-row bg-[#99A1D7]/[0.32] text-white">
        <div className="flex flex-col flex-1 font-montserrat">
          <h1 className="text-2xl font-inter p-4">About Us</h1>
          <h2 className="text-xl mt-2 font-inter p-4">Where Innovation Meets Execution</h2>
        </div>
        <div className="flex flex-col flex-1">
          <p className="mt-4 font-fustat">
            Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results, UI/UX design, and digital marketing -- delivering responsive websites, high-performance Android/iOS apps, and visually engaging marketing and content creation, helping businesses grow and connect with their ideal audience.
          </p>
          <button className="mb-4 mt-4 font-montserrat border border-white px-4 py-2 rounded">
            Know More
          </button>
        </div>
       
      </div>
     <h1 className="text-white text-center text-3xl font-semibold m-5 p-5">Our Project</h1>
       <ProjectsGrid/>
    </div>
  );
};

export default AboutSection;
