import { FcGoogle } from "react-icons/fc";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-[Montserrat]">
      {/* Main Footer Section */}
      <div
        style={{
          backgroundImage: "url('/images/botam.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-10 px-8 flex flex-col md:flex-row justify-between items-start text-white"
      >
        {/* Company Info */}
        <div className="space-y-4 max-w-md">
          <img
            src="/images/complanylogo.png"
            alt="Company Logo"
            className="bg-[#DAE5FF] p-2 rounded"
          />
          <p>
            Web Development | App Development | UI/UX Design | Digital Marketing
          </p>
          <p>
            Based in Bangalore | ✉️ contact@websort.com | 📞 +91-XXXXXXXXXX
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 text-2xl mt-8 md:mt-15">
          <FcGoogle />
          <FaInstagram className="text-pink-500" />
          <FaFacebookF className="text-[white]" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#DAE5FF] text-center py-4">
        <h1 className="text-black font-large">
          © 2025 Websort. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
