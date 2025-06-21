import { useState } from "react";
import { Link } from "react-router-dom";
import { TbMenu4 } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative p-4 bg-[#DAE5FF] bg-desktop19 font-['Jacques_Francois']">
      {/* Top Row */}
      <div className="flex items-center justify-between w-full">
        <img
          src="https://i.imghippo.com/files/PYN7968As.png"
          alt="Company Logo"
          className="h-20 w-52 object-contain"
        />

        {/* Desktop Contact Button */}
        <Link to="/contact" className="hidden desktop19:inline-block">
          <button className="rounded-xl bg-[#212062] text-white w-48 h-12">
            Contact us
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="desktop19:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <TbMenu4 size={30} />
          </button>
        </div>
      </div>

      {/* Desktop Nav Items */}
      <ul className="hidden desktop19:flex justify-center flex-wrap space-x-6 text-lg font-medium text-gray-800 mt-4">
        {[
          { name: "About us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Careers", path: "/careers" },
        ].map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <img
              src="https://i.imghippo.com/files/Jpzc4376Q.png"
              alt="icon"
              className="h-5 w-5 show-icon"
            />
            <Link to={item.path} className="hover:text-blue-600">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 z-50 mt-4 w-52 rounded-xl bg-[#1E2755] text-white p-4 font-['Jacques_Francois'] menu-box">
          <ul className="space-y-4">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      {/* Bottom Nav for iPhone 61/62 */}
      <div className="hidden iphone61:flex iphone62:flex fixed bottom-0 left-0 w-full z-50 bg-white text-[#1E2755] py-3 px-6 rounded-t-2xl shadow-md justify-around items-center text-sm">
        <Link to="/" className="flex flex-col items-center">
          <AiOutlineHome className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center">
          <img src="https://i.imghippo.com/files/uf2810vrs.png" alt="services" className="w-6 h-6" />
          <span>Services</span>
        </Link>
        <Link to="/projects" className="flex flex-col items-center">
          <img src="https://i.imghippo.com/files/KkXO8020Nk.png" alt="Projects" className="w-6 h-6" />
          <span>Projects</span>
        </Link>
        <Link to="/careers" className="flex flex-col items-center">
          <img src="https://i.imghippo.com/files/vNiR2597XDk.png" alt="Careers" className="w-6 h-6" />
          <span>Careers</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
