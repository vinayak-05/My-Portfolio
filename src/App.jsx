import { useEffect } from "react";
import "./App.css";
import Project from "./Project";
import Skills from "./Skills";
import Vinayak from './image/Vinayak-web.png'
import resume from './assets/Vinayak_Resume (2).pdf'
import instagram from './image/instagramIcon-removebg-preview (1).png'
import linkedin from './image/linkedinImage-removebg-preview.png'
import mail from './image/mailImage-removebg-preview.png'
function App() {
 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20", "-translate-x-20", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-x-0");
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));
  }, []);


  return (
    <>
     <div style={{ zoom: "99%" }}>
      {/* Navbar */}
      <div
        style={{ backgroundColor: "#F1A638" }}
        className="navbar text-2xl font-semibold font-serif inline-flex gap-40 pt-9 pl-9 items-baseline sticky top-0 z-50 w-screen shadow-2xs"
      >
        <h1 className="text-6xl">Vinayak</h1>
        <a
          href="#Header"
          className="text-black hover:text-blue-700 hover:underline transition duration-300 font-medium text-3xl"
        >
          Home
        </a>
        <a
          href="#About"
          className="text-black hover:text-blue-700 hover:underline transition duration-300 font-medium text-3xl"
        >
          About
        </a>
        <a
          href="#Project"
          className="text-black hover:text-blue-700 hover:underline transition duration-300 font-medium text-3xl"
        >
          Project
        </a>
        <a
          href="#Skills"
          className="text-black hover:text-blue-700 hover:underline transition duration-300 font-medium text-3xl"
        >
          Skills
        </a>
      </div>

      {/* Header Section */}
      <div
        id="Header"
        style={{ backgroundColor: "#F1A638" }}
        className="h-[1600px] w-screen flex items-center justify-center relative"
      >
        <div className="circle bg-orange-500 rounded-full w-[900px] h-[900px] ml-90 absolute mb-[600px]"></div>


    <a
  href={resume}
  download
  className="bg-[#C41A5F] hover:bg-[#3C929F] text-white text-xl py-3 px-6 rounded-lg shadow-md transition duration-500 absolute ml-[500px] mb-[300px] h-[80px] w-[250px] flex justify-center items-center font-semibold"
>
  Download CV
</a>
<div className="absolute mb-[600px] ml-[500px] flex gap-10 items-center">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/_vinayak_.gupta/"
    target="_blank"
    rel="noopener noreferrer"
    className="h-[80px] w-[80px] inline-block transition-transform duration-300 hover:scale-110"
  >
    <img src={instagram} alt="Instagram" className="w-full h-full object-contain" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vinayak-gupta-4a61982ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    target="_blank"
    rel="noopener noreferrer"
    className="h-[80px] w-[80px] inline-block transition-transform duration-300 hover:scale-110"
  >
    <img src={linkedin} alt="LinkedIn" className="w-full h-full object-contain" />
  </a>

  {/* Mail */}
  <a
    href="mailto:vgupta9_be23@thapar.edu"
    className="h-[80px] w-[80px] inline-block transition-transform duration-300 hover:scale-110"
  >
    <img src={mail} alt="Mail" className="w-full h-full object-contain" />
  </a>
</div>


<div className="absolute w-[600px] h-[600px]  overflow-hidden rounded-full mb-[450px] mr-[600px]">
          <img src={Vinayak} alt="Myself" />
        </div>



        <div className="text-8xl mb-[600px] text-amber-50 ">
          <p className="text-8xl font-bold mb-[500px] animate-bounce">
            Hi!👋 I'm{" "}
            <span className="relative inline-block">
              Vinayak
              <svg
                className="absolute left-0 bottom-0 w-full h-4"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 C50,25 150,0 200,15"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="200"
                    to="0"
                    dur="2s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="stroke-dasharray"
                    from="0,200"
                    to="200,0"
                    dur="2s"
                    fill="freeze"
                  />
                </path>
              </svg>
            </span>
          </p>
        </div>
        
        <div className="divide bg-white w-[1200px] h-[2px] absolute mt-[200px]"></div>

        {/* About Section */}
         {/* Squid Game Symbols */}
<div className="absolute left-[300px] mt-[900px] space-y-10 z-0 scroll-animate opacity-0 -translate-x-10 transition-all duration-1000 ease-in-out">
  {/* Triangle */}
  <svg viewBox="0 0 100 100" className="w-[200px] h-[200px] text-white hover:scale-130 transition-transform duration-700">
    <polygon points="50,15 90,85 10,85" fill="#C41A5F" />
  </svg>

  {/* Circle */}
  <svg viewBox="0 0 100 100" className="w-[200px] h-[200px] text-white hover:scale-130 transition-transform duration-700">
    <circle cx="50" cy="50" r="40" fill="#3C929F" />
  </svg>

  {/* Square */}
  <svg viewBox="0 0 100 100" className="w-[200px] h-[200px] text-white hover:scale-130 transition-transform duration-700">
    <rect x="20" y="20" width="60" height="60" fill="#C41A5F" />
  </svg>
</div>

        <div
          id="About"
          style={{ backgroundColor: "#C41A5F" }}
          className="absolute mt-[400px] ml-[480px] text-amber-50 h-[60px] flex items-center 
          text-5xl font-serif font-semibold opacity-0 translate-y-10 transition-all duration-1000 ease-in-out scroll-animate"
        >
          <p>Who is this guy? 🤷</p>
        </div>

        <div className="text-4xl absolute mt-[950px] ml-[600px] text-amber-50 font-semibold opacity-0 translate-y-10 transition-all duration-1000 ease-in-out scroll-animate  w-[600px]">
          <p>
            Hi! I'm Vinayak Gupta😊 — a passionate developer and tech enthusiast
            currently pursuing my Bachelor's in Computer Science📝. I love
            building user-centric web and mobile applications, and I'm always
            exploring new technologies to turn creative ideas into impactful
            solutions. Let's build something amazing together!🥳
          </p>
        </div>
      </div>

      
      <Project />
      <Skills/>
</div>
    </>
  );
}

export default App;
