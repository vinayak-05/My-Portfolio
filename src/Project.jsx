import React from 'react'
import github from './image/pngimg.com - github_PNG40.png'
const Project = () => {
  return (
    <>
        <div id="Project" style={{backgroundColor:"#3C929F"}}className='w-screen h-[2000px] '>
            <div  style={{ backgroundColor: "#F1A638" }} className='w-[400px] h-[300px] mt-[100px]  ml-[300px] absolute'>
                
            </div>
            <div  style={{ backgroundColor: "#C41A5F" }} className='text-4xl ml-[600px] h-[50px] w-[350px] mt-[110px] flex items-center absolute rounded-r-full'>
                    <p className='text-amber-50 font-semibold'>Made With Code🧑‍💻,</p>
                </div>
                 <div  style={{ backgroundColor: "#C41A5F" }} className='text-4xl ml-[500px] h-[50px] w-[150px] mt-[180px] flex items-center absolute rounded-r-full'>
                    <p className='text-amber-50 font-semibold'>caffeine,</p>
                </div>
                 <div  style={{ backgroundColor: "#C41A5F" }} className='text-4xl ml-[650px] h-[50px] w-[300px] mt-[250px] flex items-center absolute rounded-r-full'>
                    <p className='text-amber-50 font-semibold'>and confusion😵‍💫.</p>
                </div>

                <div className='scroll-animate opacity-0 -translate-x-20 transition-all duration-4000 ease-in-out'>
                <div style={{ backgroundColor: "#C41A5F" }} className='h-[500px] w-[700px] absolute mt-[620px] ml-[400px] rounded-2xl'>
  <div className='text-4xl font-serif font-semibold text-amber-50'>
                    <p className='mt-[150px] text-center'>
                        A full-stack web application designed to streamline communication and management within a college environment. The portal provides a centralized platform for students and faculty to interact efficiently.
                    </p>
                </div>
               <div className="flex justify-center mt-[10px]">
    <a
      href="https://github.com/vinayak-05/College-Portal"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src={github}
        alt="github"
        className="h-[100px] w-[100px]"
      />
    </a>
  </div>
                </div>
                <div style={{ backgroundColor: "#F1A638" }} className='w-[200px] h-[200px]  rounded-full mt-[550px] ml-[300px] absolute flex items-center'>
                    <div className='text-9xl text-amber-50 font-semibold ml-[60px] absolute'>
                        1.
                    </div>
                </div>
                <div className='text-7xl  font-serif font-semibold text-black'>
                    <p className='mt-[660px] ml-[520px] absolute'>College Portal</p>
                </div>
              
                </div>


            <div className='scroll-animate opacity-0 translate-x-20 transition-all duration-4000 ease-in-out'>

            <div style={{ backgroundColor: "#C41A5F" }} className='h-[500px] w-[700px] absolute mt-[1300px] ml-[400px] rounded-2xl'>
  <div className='text-4xl font-serif font-semibold text-amber-50'>
                    <p className='mt-[150px] text-center'>
A simple Android app built with Kotlin that displays real-time cryptocurrency prices using a public API. It provides users with up-to-date market data in a clean and user-friendly interface.

                    </p>
                </div>
                 <div className="flex justify-center mt-[10px]">
               <a href="https://github.com/vinayak-05/CryptoApp/" target="_blank" rel="noopener noreferrer"  className="inline-block">
                    <img
                        src={github}
                        alt="github"
                        className="h-[100px] w-[100px]"
                    />
                    </a>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F1A638" }} className='w-[200px] h-[200px]  rounded-full mt-[1225px] ml-[1000px] absolute flex items-center'>
                    <div className='text-9xl text-amber-50 font-semibold ml-[60px] absolute'>
                        2.
                    </div>
                </div>
                  <div className='text-6xl  font-serif font-semibold text-black'>
                    <p className='mt-[1350px] ml-[420px] absolute'> Crypto Tracker App</p>
                </div>
              </div>
                
        </div>
    </>
  );
}

export default Project
