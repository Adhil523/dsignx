import React, { useState,useEffect } from 'react'
import poster from '../assets/DOC-GPT1.jpg'
import '../pages/SignApproval.css'
import { IoCloudDoneSharp } from "react-icons/io5";
import {useParams} from 'react-router-dom'
import signed from '../assets/signed.png'
import { useNavigate } from 'react-router-dom';

const SignApproval = ({order}) => {
  const{id}=useParams();
  console.log(id)
  console.log(order)
  const navigate=useNavigate()

  const[datas,setData]=useState([])

  useEffect(()=>{
		console.log(id)
		getData()

		}
	,[id])

  const getData = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/entries/${id}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
          setData(data[2])
        } else {
            console.error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const openImageInNewWindow = () => {
  navigate('/image')
};
  

    const[modal,setModal]=useState(false)
    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <div className='text-black'>
         <div className='max-h-[200px]'>
        <div className='text-black bg-slate-100 px-4 py-5 flex justify-between items-centre mx-auto w-full h-24'>
            <h1 className=' w-full text-3xl font-bold text-[#090909] ml-10'>Authorise.</h1>
                <h1 className='text-gray-400 flex mr-[20px] p-4 text-sm'>textnoreply@gmail.com </h1>
        </div>
    </div>
    <div className='max-w-[800px] h-screen flex justify-center bg-slate-100 mx-auto mt-3'>
    
    <div className=''>
    <img src={`http://127.0.0.1:8000${datas.design}`} className='w-[700px] h-[400px] mx-auto mt-[20px]'/>
      <div className='flex justify-end'>  <button onClick={toggleModal}
       className='bg-green-600 w-[250px] h-[50px] rounded-md text-white font-bold mt-[30px] '>Sign</button></div>
   </div>
    </div>
    {modal &&
   <div className='modal'>
    <div onClick={toggleModal} className='overlay'></div>
    <div className='modal-content mx-auto  w-[500px] h-[300px] bg-white'>
      <div className='flex'>  <h1 className='font-bold text-center text-3xl mt-[50px]'>Your image has been signed</h1><IoCloudDoneSharp className='color-green-800 size-8 mt-[56px] ml-1' /></div>
     <button className='bg-green-600 w-[250px] h-[50px] rounded-md text-white font-bold mt-[30px] ' onClick={openImageInNewWindow}>Download </button> 
        <button className='close-modal' onClick={toggleModal}>Close</button>
    </div>
    
   </div>
}
    </div>
  )
}

export default SignApproval
