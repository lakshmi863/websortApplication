const Contactus  = ()=>{
return(

   <div>
  <div
    style={{
      backgroundImage: "url('/images/contact.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      padding: '2rem',
    }}
    className="flex items-center justify-end"
  >
    <div className="text-right mr-10 max-w-xl">
      <h1 className="font-montserrat font-bold text-[20px] leading-[1] tracking-[0] text-[#000000] mb-4">
        Contact Us
      </h1>
      <p className="font-montserrat text-[20px] leading-[1] tracking-[0] text-[#000000]">
        Have a question, idea, or project in mind? We're here to help — get in touch with us today.
      </p>
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
<h1 className="text-white font-montserrat font-bold text-[30px] leading-[1] tracking-[0] mb-2">
  Need support or want to collaborate?
</h1>
<p className="text-white font-montserrat text-[20px] leading-[1] tracking-[0]">
  Fill out the form and our team will get back to you shortly
</p>
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
  
   <div
  style={{
    backgroundColor: '#0B0014',  
    padding: '2rem',
  }}
>
 <h1 className="text-white text-center text-3xl font-semibold m-5 p-5">Address</h1>
<div className="flex flex-col desktop19:flex-row justify-center items-center gap-8 p-6">
  {/* Map Image */}
  <img
    src="/images/googlemap.png"
    alt="map"
    className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
  />

  {/* Transparent Box with Border */}
  <div className="border border-white bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white w-[300px]">
    <p className="mb-2">Based in Bangalore</p>
    <p className="mb-2">contact@websort.com</p>
    <p>+91-XXXXXXXXXX</p>
  </div>
</div>
</div>
</div>

)
}
export default Contactus 