import NavBar from "./Navbar.jsx";
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-around text-white">
      <div className="flex flex-col gap-5 w-[500px]">
        <p className="text-2xl font-bold uppercase font-playful font-medium">
          So you want to travel to
        </p>
        <p className="text-9xl font-bold uppercase font-playful font-light">
          Space
        </p>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div className="p-10 w-50 h-50 bg-white text-black rounded-full flex items-center justify-center uppercase">
        <p className="text-2xl font-medium font-playful">EXPLORE</p>
      </div>
    </div>
  );
}
