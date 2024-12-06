function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Your Name</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar