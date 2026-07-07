export default function NavBar() {
return (
    <nav className=" text-white p-4 flex items-center justify-between mt-5 ms-4 ">
        <div className="flex items-center justify-between mb-4">
            <img src="logo.svg" alt="Logo" className="h-10 w-10" />
        </div>
        
      <ul className="flex space-x-4 gap-5 bg-opacity-90 backdrop-blur-2xl rounded-lg p-7 w-[800px] -me-4">
        <li><a href="/" className=" border-b-2 p-7 border-transparent hover:border-white">00 HOME</a></li>
        <li><a href="/about" className=" border-b-2 p-7 border-transparent hover:border-white">01 DESTINATION</a></li>
        <li><a href="/contact" className=" border-b-2 p-7 border-transparent hover:border-white">02 CREW</a></li>
        <li><a href="/contact" className=" border-b-2 p-7 border-transparent hover:border-white">03 TECHNOLOGY</a></li>
      </ul>
    </nav>
)
}