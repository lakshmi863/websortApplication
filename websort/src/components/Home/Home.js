  import './index.css';
//import Footer from '../Footer/footer';

  const Home = () => {
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
                At Websort, we turn digital visions into reality with expert web and app development, UI?UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO. PPC, and social media strategies.
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
    At Websort, we turn digital visions into reality with expert web and app development, UI?UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO. PPC, and social media strategies.
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

            {/* About Section */}
            <div
            className="imgdesktop20"
            style={{
              backgroundImage: "url('/images/imgboxdesktop20.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          >
            <div className=" flex flex-row  bg-[#99A1D7]/[0.32] bg-opacity-50 text-white">
              <div className="flex flex-col flex-1 font-montserrat">
      <h1 className="text-2xl font-inter p-4 ">About Us</h1>
      <h2 className="text-xl mt-2 font-inter p-4">Where Innovation Meets Execution</h2>
    </div>
      <div className="flex flex-col flex-1">
              <p className="mt-4 font-fustat">
              Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results, UI/UX design, and digital marketing -- delivering responsive websites, high-performance Android/iOS apps, and visually engaging marketing and content creation,  helping businesses grow and connect with their ideal audience.
              </p>
              <button className="mb-4 mt-4 font-montserrat border border-white px-4 py-2 rounded">
                Know More
              </button>
              </div>
              </div>
              </div>
            </div>
          </div>

          {/*our Project */}
  <div className="flex flex-wrap gap-6 p-8 justify-center">
    {/* Small Height Box */}
    <div className="border-2 border-white h-64 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
      <img
        src="/images/app development.jpg"
        alt="App Development"
        className="w-full w-full object-contain rounded-[15px]"
      />
      <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
        App Development
      </button>
    </div>

    {/* Extra Large Height Box */}
    <div className="border-4 border-pink-500 h-80 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
      <img
        src="/images/uiux design.jpg"
        alt="UI/UX Design"
        className="w-full h-full object-contain rounded-[15px]"
      />
      <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
        UI/UX Design
      </button>
    </div>

    {/* Medium Height Box */}
    <div className="border-[3px] border-white h-72 w-64 flex flex-col items-center justify-center rounded-[15px] p-4">
      <img
        src="/images/web development.jpg"
        alt="Web Development"
        className="w-full w-full object-contain rounded-[15px]"
      />
      <button className="mt-4 font-montserrat text-white border border-white px-4 py-2 rounded">
        Web Development
      </button>
    </div>
  </div>


        
        {/* */}

        <div
    className="imgdesktop20 flex flex-col items-center justify-center text-center"
    style={{
      backgroundImage: "url('/images/iot.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  
    }}
  >
            <h1 className="text-white text-3xl font-montserrat">
      Fueling the Future with Innovation
    </h1>
            <img
        src="/images/iot.png"
        alt="iot"
        className=" h-72 w-84 flex flex-row items-center justify-center"
      />
          
      <div class="flex gap-4 p-6 ">
    <div class="arrow-container w-16 h-16 bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg"></div>
    <div class="arrow-container w-16 h-16 bg-white hover:scale-105 transition-all duration-300 shadow-lg"></div>
    <div class="arrow-container w-16 h-16 bg-white hover:scale-105 transition-all duration-300 shadow-lg"></div>
  </div>
        <button className="text-white m-4 p-5 border border-white rounded">
        Know More
        </button>

        </div>


        <div
          style={{
      backgroundImage: "url('/images/explore.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    }}>
  <div className="flex flex-col desktop20:flex-row items-center justify-between max-w-7xl mx-auto p-8 gap-8">
    {/* Text Section */}
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

    {/* Image Section */}
    <img src="/images/explorep.png" alt="explore" className="w-[500px] h-auto object-contain" />
  </div>
    </div>

    <div
  style={{
    backgroundColor: '#150C11',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-16 text-white"
>
  {/* Text Content */}
  <div className="max-w-2xl flex flex-col gap-4">
    <h1 className="text-[24px] font-montserrat font-semibold leading-tight">
      Why We Stand Out
    </h1>
    <p className="text-[18px] font-montserrat font-normal leading-snug">
      At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
    </p>
  </div>

  {/* Image */}
  <img
    src="/images/bulbe.png"
    alt="explore"
    className="w-[300px] h-auto object-contain"
  />
</div>
      
  <div
  style={{
    backgroundImage: "url('/images/achive.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="py-16 px-8"
>
  <div className="text-center max-w-4xl mx-auto mb-12">
    <h1 className="text-white text-3xl font-semibold mb-4">One of our proudest achievements.</h1>
    <p className="text-white text-lg px-4">
      A standout from our portfolio, this project exemplifies the quality, creativity, and performance
      we bring to every solution. It's a true reflection of our commitment to excellence.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Web Development */}
    <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
      <img
        src="/images/web.jpg"
        alt="Web Development"
        className="w-[280px] h-[180px] object-cover rounded-md mb-4"
      />
      <h2 className="text-white text-xl font-medium mb-2">Web Development</h2>
      <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
        Explore More
      </button>
    </div>

    {/* App Development */}
    <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
      <img
        src="/images/app.jpg"
        alt="App Development"
        className="w-[280px] h-[180px] object-cover rounded-md mb-4"
      />
      <h2 className="text-white text-xl font-medium mb-2">App Development</h2>
      <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
        Explore More
      </button>
    </div>

    {/* Digital Marketing */}
    <div className="flex flex-col items-center bg-black/20 p-6 rounded-xl shadow-md w-[320px]">
      <img
        src="/images/digital.jpg"
        alt="Digital Marketing"
        className="w-[280px] h-[180px] object-cover rounded-md mb-4"
      />
      <h2 className="text-white text-xl font-medium mb-2">Digital Marketing</h2>
      <button className="text-white bg-white/25 px-4 py-2 rounded-lg hover:bg-black/40 transition">
        Explore More
      </button>
    </div>
  </div>
</div>

  <div
  style={{
    backgroundImage: "url('/images/question.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="py-16 px-8"
>
<div className='flex flex-row'> 
  <div className='flex flex-col item-center mt-7 pt-5'>
 <h1 className='text-3xl font-semibold text-white'>Questions? We're here to answer them!</h1>
  </div>
 
<form action="#" class="max-w-xl mx-auto p-8 bg-[#D9D4EF]/[0.24] rounded-xl shadow-md font-[Montserrat]">


  <div class="mb-4">
    <label for="name" className="block  text-1xl font-semibold text-white">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name"
      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
  </div>

  <div class="mb-4">
    <label for="email" className="block  text-1xl font-semibold text-white">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
  </div>

  <div class="mb-4">
    <label for="number" className="block  text-1xl font-semibold text-white">Phone Number</label>
    <input type="tel" id="number" name="number" placeholder="Enter your phone number"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
  </div>

  <div class="mb-6">
    <label for="message" className="block  text-1xl font-semibold text-white">Message</label>
    <textarea id="message" name="message" rows="4" placeholder="Write your message here..."
      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
  </div>

  <button type="submit"
    className="w-full bg-[#2575DC] text-white py-3 rounded-lg hover:bg-[#2F3A6B] transition font-semibold">
    Submit
  </button>
</form>
</div>
</div>


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
    <h1 className="text-white text-2xl font-semibold">
      See what opportunities await you
    </h1>
    <button className="bg-[#9037C3] text-white w-40 py-2 rounded-lg hover:bg-[#7d2cb0] transition">
      Explore More
    </button>
  </div>
</div>
</div>


      </>
    );
  };

  export default Home;
