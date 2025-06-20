const ProjectsGrid = () => {
  return (
    <div className="flex flex-wrap gap-6 p-8 justify-center">
       
      <div className="border-2 border-white h-64 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
        <img src="/images/app development.jpg" alt="App Development" className="w-full object-contain rounded-[15px]" />
        <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">App Development</button>
      </div>
      <div className="border-4 border-pink-500 h-80 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
        <img src="/images/uiux design.jpg" alt="UI/UX Design" className="w-full h-full object-contain rounded-[15px]" />
        <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">UI/UX Design</button>
      </div>
      <div className="border-[3px] border-white h-72 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
        <img src="/images/web development.jpg" alt="Web Development" className="w-full object-contain rounded-[15px]" />
        <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">Web Development</button>
      </div>
    </div>
  );
};

export default ProjectsGrid;