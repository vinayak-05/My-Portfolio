import React from 'react'
import htmlIcon from './image/htmlIcon.png'
import cssIcon from './image/cssIcon.webp'
import jsIcon from './image/jsIcon.webp'
import ReactIcon from './image/ReactIcon.png'
import NodeIcon from './image/nodeIcon.jpg'
import KotlinIcon from './image/KotlinIcon.svg'
import AndroidStudioIcon from './image/android-studio-icon.webp'
import github from './image/pngimg.com - github_PNG40.png'
const Skills = () => {
  return (
<>
        <div id='Skills' style={{ backgroundColor: "#C41A5F" }} className='w-screen h-[1300px] '>
            <div  style={{backgroundColor:"#3C929F"}} className='w-[400px] h-[300px]  mt-[100px]  ml-[700px] absolute'> 
         </div>
         <div  style={{ backgroundColor: "#F1A638" }} className='text-4xl ml-[500px] h-[50px] w-[350px] mt-[120px] flex items-center absolute rounded-l-full'>
                    <p className='text-amber-50 font-semibold ml-[50px]'>My Developer💻</p>
                </div>
                 <div  style={{ backgroundColor: "#F1A638" }} className='text-4xl ml-[750px] h-[50px] w-[150px] mt-[200px] flex items-center absolute rounded-l-full'>
                    <p className='text-amber-50 font-semibold ml-[10px]'>Survival</p>
                </div>
                 <div  style={{ backgroundColor: "#F1A638" }} className='text-4xl ml-[550px] h-[50px] w-[170px] mt-[270px] flex items-center absolute rounded-l-full'>
                    <p className='text-amber-50 font-semibold ml-[20px]'>Kit📦.</p>
                </div>

<div  className="w-0 h-0 transition-transform duration-700 
            border-l-[150px] border-r-[150px] border-b-[250px] 
            border-l-transparent border-r-transparent 
            rotate-[-45deg] hover:rotate-[0deg]" 
            style={{borderBottomColor: "#F1A638"}}>
</div>


                  <div className="grid grid-cols-4 gap-16 mt-[300px] px-[100px] absolute">
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={htmlIcon} alt="HTML" className="w-[200px] h-[200px]" />
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={cssIcon} alt="CSS" className="w-[200px] h-[200px]" />
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={jsIcon} alt="JavaScript" className="w-[200px] h-[200px]" />
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={ReactIcon} alt="React" className="w-[200px] h-[200px]" />
  </div>
<div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={NodeIcon} alt="Node Js" className="w-[200px] h-[200px]" />
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={KotlinIcon} alt="Kotlin" className="w-[200px] h-[200px]" />
  </div>
   <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={AndroidStudioIcon} alt="Android-Studio" className="w-[200px] h-[200px]" />
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
    <img src={github} alt="Github" className="w-[200px] h-[200px]" />
  </div>
</div>

        </div>

         
        
    </>
  )
}

export default Skills
