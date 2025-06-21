const ProjectsGrid = () => {
  return (
    <div className="w-full px-4 py-10">
    
      <div className="
        flex gap-6 
        overflow-x-auto 
        desktop19:overflow-visible 
        desktop19:flex-wrap 
        justify-center 
        scrollbar-hide
      ">
        {/* Card 1 */}
        <div className="
          flex-shrink-0 
          w-[90%] 
          max-w-sm 
          desktop19:w-64 
          border-2 border-white 
          rounded-[15px] 
          p-4 
          bg-white/10 
          backdrop-blur-md
        ">
          <img
            src="/images/app development.jpg"
            alt="App Development"
            className="w-full h-40 object-contain rounded-[15px]"
          />
          <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
            App Development
          </button>
        </div>

        {/* Card 2 */}
        <div className="
          flex-shrink-0 
          w-[90%] 
          max-w-sm 
          desktop19:w-64 
          border-4 border-pink-500 
          rounded-[15px] 
          p-4 
          bg-white/10 
          backdrop-blur-md
        ">
          <img
            src="/images/uiux design.jpg"
            alt="UI/UX Design"
            className="w-full h-40 object-contain rounded-[15px]"
          />
          <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
            UI/UX Design
          </button>
        </div>

        {/* Card 3 */}
        <div className="
          flex-shrink-0 
          w-[90%] 
          max-w-sm 
          desktop19:w-64 
          border-[3px] border-white 
          rounded-[15px] 
          p-4 
          bg-white/10 
          backdrop-blur-md
        ">
          <img
            src="/images/web development.jpg"
            alt="Web Development"
            className="w-full h-40 object-contain rounded-[15px]"
          />
          <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
            Web Development
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
