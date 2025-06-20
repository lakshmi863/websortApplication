const Careers =()=>{
return(
<div>
   
   <div
  style={{
    backgroundImage: "url('/images/career.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
  }}
> <div className="flex flex-col desktop19:flex-row items-center gap-8 p-6">
    
     <div className="max-w-xl text-center desktop19:text-left">
      <h2 className="font-mukta text-white  text-[20px] leading-[1] tracking-[0] text-[#1E2755] mb-3">Talent wins games, but teamwork and intelligence win championships</h2>
      <p className="text-white text-base leading-relaxed">
       At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.
      </p>
    </div>
    <img
      src="/images/career card.png"
      alt="career"
      className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
    />
   
  </div>
    </div>

     <div
  style={{
    backgroundImage: "url('/images/intenship.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
  }}
> 
<h1 className="text-white text-center text-3xl font-semibold m-5 p-5">Internship Opportunities at Websort</h1>
   <div className="flex flex-wrap justify-center items-center gap-8 p-6">
  {/* Marketing */}
  <div className="flex flex-col items-center">
    <img
      src="/images/market.png"
      alt="market_img"
      className="w-[150px] h-auto object-contain rounded-xl shadow-lg"
    />
    <p className="text-white p-2 text-center">Marketing</p>
  </div>

  {/* App Development */}
  <div className="flex flex-col items-center">
    <img
      src="/images/careerApp.png"
      alt="app_img"
      className="w-[150px] h-auto object-contain rounded-xl shadow-lg"
    />
    <p className="text-white p-2 text-center">App Development</p>
  </div>

  {/* Web Development */}
  <div className="flex flex-col items-center">
    <img
      src="/images/career web.png"
      alt="web_img"
      className="w-[150px] h-auto object-contain rounded-xl shadow-lg"
    />
    <p className="text-white p-2 text-center">Web Development</p>
  </div>

  {/* UI/UX */}
  <div className="flex flex-col items-center">
    <img
      src="/images/career ux.png"
      alt="ux_img"
      className="w-[150px] h-auto object-contain rounded-xl shadow-lg"
    />
    <p className="text-white p-2 text-center">UI/UX</p>
  </div>
</div>
</div>

     <div
  style={{
    backgroundImage: "url('/images/career form.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
  }}
> 
<h1>Fill out the form and our team will get back to you shortly</h1>
<div className="p-6">
  <form className="text-white flex flex-col gap-6">
    
    {/* Row 1: First Name, Second Name, Email */}
    <div className="flex flex-col desktop19:flex-row gap-6">
      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="bg-transparent border-b  border-[#E83E40] px-2 py-1 outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">Second Name</label>
        <input
          type="text"
          placeholder="Enter your second name"
          className="bg-transparent border-b  border-[#E83E40] px-2 py-1 outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border-b  border-[#E83E40] px-2 py-1 outline-none focus:border-blue-400"
        />
      </div>
    </div>

    {/* Row 2: Phone, Company, Message */}
    <div className="flex flex-col desktop19:flex-row gap-6">
      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">Phone</label>
        <input
          type="number"
          placeholder="Enter your phone number"
          className="bg-transparent border-b  border-[#E83E40] px-2 py-1 outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">Company</label>
        <input
          type="text"
          placeholder="Enter your company name"
          className="bg-transparent border-b border-[#E83E40] px-2 py-1 outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-full desktop19:w-1/3">
        <label className="mb-1 font-medium">Message</label>
        <input
          type="text"
          placeholder="Enter your message"
          className="bg-transparent border border-[#E83E40] px-2 py-1  focus:border-blue-400"
        />
      </div>
    </div>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="mt-4 bg-[#DD5151] text-[#1E2755] px-6 py-2 rounded-md hover:bg-blue-200 font-semibold"
      >
        Submit
      </button>
    </div>
  </form>
</div>


</div>

</div>

)
}
export default Careers