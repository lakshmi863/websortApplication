const Services =()=>{
return(

   <div
  style={{
    backgroundImage: "url('/images/service.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
  }}
>
  <h1 className="text-white text-center text-3xl font-semibold m-5 p-5">Our Services</h1>

  {/* UI/UX Design */}
  <div className="flex flex-col desktop19:flex-row items-center gap-8 p-6">
    <img
      src="/images/uiux design.jpg"
      alt="UI/UX Design"
      className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
    />
    <div className="max-w-xl text-center desktop19:text-left">
      <h2 className="font-mukta text-white font-extrabold text-[40px] leading-[1] tracking-[0] text-[#1E2755] mb-3">UI/UX Design</h2>
      <p className="text-white text-base leading-relaxed">
        We design clean, intuitive, and engaging user interfaces that enhance the overall user experience.
        From wireframes to final designs, our focus is on usability, consistency, and creating visually
        appealing digital products that users love.
      </p>
    </div>
  </div>

  {/* Web Development */}
  <div className="flex flex-col-reverse desktop19:flex-row items-center gap-8 p-6">
    <div className="max-w-xl text-center desktop19:text-left">
      <h2 className="font-mukta text-white font-extrabold text-[40px] leading-[1] tracking-[0] text-[#1E2755] mb-3">Web Development</h2>
      <p className="text-white text-base leading-relaxed">
        Planned and executed a digital marketing strategy including SEO, social media marketing, and content
        creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.
      </p>
    </div>
    <img
      src="/images/web development.jpg"
      alt="Web Development"
      className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
    />
  </div>

  {/* App Development */}
  <div className="flex flex-col desktop19:flex-row items-center gap-8 p-6">
    <img
      src="/images/app development.jpg"
      alt="App Development"
      className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
    />
    <div className="max-w-xl text-center desktop19:text-left">
      <h2 className="font-mukta text-white font-extrabold text-[40px] leading-[1] tracking-[0] text-[#1E2755] mb-3">App Development</h2>
      <p className="text-white text-base leading-relaxed">
        Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive
        real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.
      </p>
    </div>
  </div>

  {/* Digital Marketing */}
  <div className="flex flex-col-reverse desktop19:flex-row items-center gap-8 p-6">
    <div className="max-w-xl text-center desktop19:text-left">
      <h2 className="font-mukta text-white font-extrabold text-[40px] leading-[1] tracking-[0] text-[#1E2755] mb-3">Digital Marketing</h2>
      <p className="text-white text-base leading-relaxed">
        Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI,
        fast loading speed, and full mobile compatibility. Key features include service pages, contact form,
        and an easy-to-manage content structure to support client updates and user engagement.
      </p>
    </div>
    <img
      src="/images/web.jpg"
      alt="Digital Marketing"
      className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
    />
  </div>
</div>


)
}
export default Services