import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
const navItems = [
  { number: "00", label: "HOME", path: "/" },
  { number: "01", label: "DESTINATION", path: "/destination" },
  { number: "02", label: "CREW", path: "/crew" },
  { number: "03", label: "TECHNOLOGY", path: "/technology" },
];


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
        document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
    <div className="flex flex-row-reverse p-5">
    <button className="md:hidden  z-50" onClick={() => setIsOpen(!isOpen)}>
      <img src={isOpen ? "/icon-close.svg" : "/icon-hamburger.svg"} alt="Menu" />

    </button>
    </div>
    {isOpen && (
  <div ref={navRef}
  className={`fixed top-0 right-0 bg-grey/80 backdrop-blur-lg md:hidden border-l-lg transition-transform duration-300 ease ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
    <ul className="flex flex-col gap-8 p-8 text-white uppercase tracking-widest">
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end={item.path === "/"}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-300"
            }
          >
            <p>
            <span className="font-bold me-2">{item.number}</span>
            <span className="font-playful">{item.label}</span>
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)}
    <nav className="hidden md:flex items-center justify-between p-4 ms-4 text-white font-playful uppercase tracking-widest">
      <img src="/logo.svg" alt="Logo" className="w-10 h-10" />

      <ul className="flex gap-15 w-[800px] p-7 rounded-lg backdrop-blur-2xl">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `border-b-2 pb-7 transition-colors ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-gray-400"
                }`
              }
            >
              <span className="font-bold me-2">{item.number}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}