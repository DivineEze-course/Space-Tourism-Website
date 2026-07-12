import NavBar from "./Navbar.jsx";
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-white text-center lg:text-left gap-20 lg:gap-50 p-10 lg:mt-30">
      <div className="flex flex-col gap-6 lg:w-[500px] ">
        <p className="md:text-2xl font-bold uppercase font-playful text-lg text-gray-400 font-light">
          So you want to travel to
        </p>
        <p className="text-7xl md:text-9xl font-bold uppercase font-playful font-light">
          Space
        </p>
        <p className="text-lg text-sm/6 md:text-xl text-gray-400 font-light ">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div className="p-10 w-40 h-40 md:w-70 md:h-70 lg:w-50 lg:h-50 bg-white text-black rounded-full flex items-center justify-center uppercase ">
        <p className="text-2xl md:text-3xl font-medium font-playful">EXPLORE</p>
      </div>
    </div>
  );
}
