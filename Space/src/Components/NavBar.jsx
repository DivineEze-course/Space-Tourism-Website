import { NavLink } from "react-router-dom";

const navItems = [
  { number: "00", label: "HOME", path: "/" },
  { number: "01", label: "DESTINATION", path: "/destination" },
  { number: "02", label: "CREW", path: "/crew" },
  { number: "03", label: "TECHNOLOGY", path: "/technology" },
];

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 ms-4 text-white">
      <img src="/logo.svg" alt="Logo" className="w-10 h-10" />

      <ul className="flex gap-5 w-[800px] p-7 rounded-lg backdrop-blur-2xl">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `border-b-2 p-7 transition-colors ${
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
  );
}