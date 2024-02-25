import React from 'react'
import signed from '../assets/signed.png'

const Listitem = () => {
  return (
    <div className=' max-w-[1240px] mx-auto overflow-hidden flex justify-center mt-[10%]'>
        <img src={signed} className='relative w-[90vh] h-96 mx-auto '></img>
    </div>
  )
}

export default Listitem