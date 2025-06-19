import { useState } from "react";
import { TbMenu4 } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative p-4 bg-[#DAE5FF] bg-desktop19">
      {/* Top Row */}
      <div className="flex items-center justify-between w-full">
        <img
          src="https://i.imghippo.com/files/PYN7968As.png"
          alt="Company Logo"
          className="h-20 w-52 object-contain"
        />

        <button className="hidden desktop20:inline-block rounded-xl bg-[#212062] text-white w-48 h-12">
          Contact us
        </button>

        {/* Mobile Menu Icon */}
        <div className="desktop20:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <TbMenu4 size={30} />
          </button>
        </div>
      </div>

      {/* Desktop Nav Items */}
      <ul className="hidden desktop20:flex justify-center flex-wrap space-x-6 text-lg font-medium text-gray-800 mt-4">
        {["About us", "Services", "Projects", "Careers"].map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <img
              src="https://i.imghippo.com/files/Jpzc4376Q.png"
              alt="icon"
              className="h-5 w-5 show-icon"
            />
            <a href="#" className="hover:text-blue-600">{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu - Dropdown */}
      {menuOpen && (
        <div
          className={`
            absolute right-4 z-50 mt-4
            w-52 rounded-xl bg-[#1E2755] text-white p-4
            font-['Jacques_Francois']
            iphone56:mt-[5px] iphone57:-mt-[10px] iphone58:mt-[15px]
            iphone61:hidden iphone62:hidden
          `}
        >
          <ul className="space-y-4">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}


      {/* Bottom Nav - Only on iPhone 61 & 62 */}
  
  <div className="hidden iphone61:flex iphone62:flex fixed bottom-0 left-0 w-full z-50 bg-white text-[#1E2755] font-['Jacques_Francois'] py-3 px-6 rounded-t-2xl shadow-md justify-around items-center text-sm">
  <div className="flex flex-col items-center">
    <AiOutlineHome className="w-6 h-6" />
    <span>Home</span>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://i.imghippo.com/files/uf2810vrs.png" alt="services" className="w-6 h-6" />
    <span>Services</span>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://i.imghippo.com/files/KkXO8020Nk.png" alt="Projects" className="w-6 h-6" />
    <span>Projects</span>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://i.imghippo.com/files/vNiR2597XDk.png" alt="Careers" className="w-6 h-6" />
    <span>Careers</span>
  </div>
</div>
      
    </nav>
  );
};

export default Navbar;
