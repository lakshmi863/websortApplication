const ContactForm = () => {
  return (
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
        <form action="#" className="max-w-xl mx-auto p-8 bg-[#D9D4EF]/[0.24] rounded-xl shadow-md font-[Montserrat]">
          <div className="mb-4">
            <label htmlFor="name" className="block text-1xl font-semibold text-white">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-1xl font-semibold text-white">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-1xl font-semibold text-white">Phone Number</label>
            <input type="tel" id="number" name="number" placeholder="Enter your phone number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-1xl font-semibold text-white">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Write your message here..." className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#2575DC] text-white py-3 rounded-lg hover:bg-[#2F3A6B] transition font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;