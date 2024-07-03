import React from 'react'

const About: React.FC<{}> = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] '
      style={{ transform: 'scale(0.9' }}
    >
      <div className='flex flex-col  justify-around flex-wrap items-center   max-w-[900px]'>
        <h1 className='text-white font-semibold text-6xl'>ABOUT ME</h1>
        <p className=' tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl'>
          EXPLORE NOW
        </p>
        <p className='text-gray-300 text-center '>
          As a dedicated software engineer, I excel in merging logic with
          creativity to drive innovative solutions. Currently contributing to
          the vibrant environment at Artziii, I specialize in the MERN Stack,
          seamlessly integrating technology and innovation.
          <br />
          <br />
          With a passion for crafting elegant and efficient software, I navigate
          the rapidly evolving landscape of software development. My journey
          focuses on transforming ideas into high-quality code, delivering
          exceptional user experiences, and continuously exploring new
          possibilities.
        </p>
      </div>
    </section>
  )
}

export default About