import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"


const Projects = () => {

    const [currentIndex,setCurrentIndex]= useState(0)
    const [cardsToShow,setCardsToShow]= useState(1)

    useEffect(()=>{
        const updateCardsToShow = () => {
            if(window.innerWidth>=1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1);
            }
        };
            updateCardsToShow();

            window.addEventListener('resize',updateCardsToShow);
            return()=>window.removeEventListener('resize',updateCardsToShow);

    },[])

    const nextProject=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1)%projectsData.length)
    }

    const prevProject=()=>{
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? projectsData.length-1 : prevIndex-1)
    }

  return (
    <motion.div
    initial={{ opacity: 0 ,x:-300}}
    transition={{duration:1.2}}
    whileInView={{ opacity: 1 ,x:0}}
    viewport={{once:true}} 
    className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden shadow-md' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80  mx-auto'>Crafting Space, Building Legacies-Explore Our Portfolio</p>
      {/* --Slider Buttons-- */}
      <div className='flex items-center justify-end mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' >
            <img src={assets.left_arrow} alt="previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2'    >
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform:`translateX(-${(currentIndex*100)/ cardsToShow}%)`}}
            >
                {projectsData.map((project,index)=>(
                    <div key={index} className='flex-shrink-0 relative w-full sm:w-1/4 '>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-12'/>
                        <div className='absolute bottom-5 left-0 right-0 flex justify-center '>
                            <div className='inline-block bg-gray-100 rounded-sm py-2 px-4 shadow-lg'>
                                <h2 className='text-lg font-semibold '>{project.title}</h2>
                                <p>{project.price} <span>| {project.location}</span></p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Projects
