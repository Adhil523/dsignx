import React,{useState} from 'react'
import profile from '../assets/download.jpg'
import poster from '../assets/DOC-GPT1.jpg'
import '../pages/Profile.css';
import { VscRequestChanges } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
const Profile = () => {
    const[modal,setModal]=useState(false)
    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <div className=' grid grid-cols-3 '>
        <div className='h-screen w-[300px] flex justify-start border border-l-purple-400'>
            <div className='grid grid-rows-9 '>
                <h1 className='text-4xl  text-white ml-[25px] mt-[20px] gradient-text font-bold'>dsignX</h1>
            <div className='flex'><FaHome className='size-8 ml-[38px] mt-[30px]' /><h1 className='ml-[16px] mt-[31px] text-2xl font-light'>Home</h1></div>
            <div className='flex'><CiSearch className='size-8 ml-[34px] mt-4'/><h1 className='text-xl ml-[20px] mt-5'>Search</h1></div>
            <div className='flex'><LuMessageSquarePlus className='size-8 ml-[34px] mt-4'/><h1 className='text-xl ml-[20px] mt-4'>Messages</h1></div>
            <div className='flex'><CgProfile className='size-8 ml-[34px] mt-4'/><h1 className='text-xl ml-[20px] mt-4'>Profile</h1></div>
            </div>
        </div>
    <div className='text-black max-w-[800px] h-screen flex flex-col justify-center mx-auto rounded-md '>
       
        <div className='h-[320px] border border-l-0 border-t-0 border-r-0 border-b-rose-300 w-full '>
            <div className='flex'>
            <img src={profile} className='w-[200px] h-[200px] ml-[30px]' alt='/'/>
            <div className='max-w-[200px] items-center'>
            <h1 className='font-light text-2xl ml-[140px] mt-[40px]'>gayu005__</h1>
            <button className='h-[30px] w-[100px] border border-black rounded-md mt-[20px] ml-[133px] font-bold'>Edit Profile</button>
                    <div className='flex'>
                    <h1 className='ml-[50px] mt-[40px]'>1 <p className='font-bold'>Posts</p></h1>
                    <h1 className='ml-[50px] mt-[40px]'>0 <p className='font-bold'>Followers</p></h1>
                    <h1 className='ml-[50px] mt-[40px]'>1 <p className='font-bold'>Following</p></h1></div>
                    </div>
            </div>
           <div className='flex '> <h1 className='mt-[80px] ml-[130px] gradient-text font-xl font-bold'>Posts</h1>
           </div>
            </div>
            <div>

        </div>
    
        <div className='p-5  mt-[40px]'>
            <div className=''>
        <img src={poster} className='w-[300px] h-[200px]'alt='/'/></div>
        <VscRequestChanges onClick={toggleModal} className='size-8 ml-[265px] mt-[10px]'/>
        </div>
    </div>
    {modal &&
   <div className='modal'>
    <div onClick={toggleModal} className='overlay'></div>
    <div className='modal-content mx-auto  w-[500px] h-[300px] bg-white'>
    <h1 className='font-bold text-gray-500 text-center text-3xl mt-[50px]'>Request to Authorizer</h1>
      <div className='flex justify-center mx-auto p-4'><label className='ml-4' >Email-id</label><input type='text' placeholder='authorizer email'/></div>
     <button onClick={toggleModal} className='bg-green-600 w-[250px] h-[50px] rounded-md text-white font-bold mt-[30px] mx-auto ml-[85px]'>Send Request</button> 
        <button className='close-modal' onClick={toggleModal}>Close</button>
    </div>
    
   </div>
}
    </div>
  )
}

export default Profile