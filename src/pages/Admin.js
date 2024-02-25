import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import SignApproval from './SignApproval'


// const recentData = [
// 	{
//         id:'1',
// 		name: 'Gayathri Thejus',
        
//         status:'not signed',
//         content:'.jpg',
//         date:'2023-12-3'
		
// 	},
// ]


const Admin = () => {
	const {id}=useParams()
	const[datas,setData]=useState([])
	const[names,serNames]=useState(["Alex","Sam","Gayathri","Samual","Jeff","Jacob","Daniel"])

	useEffect(()=>{
		console.log(id)
		getData()
		}
	,[id])
	
	// const getData= async ()=>{
	// 	const response=await fetch(`http://127.0.0.1:8000/api/entries/${dataId}`)
	// 	const data=await response.json()
	// 	console.log(data)
	// }
	const getData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/entries/${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
				setData(data)
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
	

  return (
    <div className='text-black'>
    <div className='max-h-[200px]'>
        <div className='text-black bg-slate-100 px-4 py-5 flex justify-between items-centre mx-auto w-full h-24'>
        <h1 className=' w-full text-3xl font-bold text-[#090909] ml-10'>Authorise.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Manage </li>
            <li className='p-4'>Dashboard</li>
            <li className='p-4'>Pending</li>
           
        </ul>
        </div>
    </div>

    <div className='mx-auto'>
        <div className='h-[100px] w-full border border-b-gray-300'>
    <h1 className='flex justify-center text-center text-2xl text-green-700 font-bold mt-[40px]'>Authoriser Dashboard</h1></div>
    <div className='flex justify-center max-w-[1400px] mt-[30px]'>
    <table className="w-full text-gray-700 bg-lime-100 ml-[100px]">
					<thead className='mb-[30px] '>
						<tr className='mx-auto'>
							<th>ID</th>
							<th>Name</th>
							
							<th>Status</th>
							<th>content</th>
							<th>Published on</th>
							
						</tr>
					</thead>
					<tbody>
						{datas.map((order,index) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{index}</Link>
								</td>
								<td>
									<Link to={`/product/${order.to_name}`}><h2>{names[index]}</h2></Link>
								</td>
								
								{/* <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td> */}
								
								<td>{order.signed ? "Signed" : "Not signed"}</td>
                                <td>
									<Link to={`/customer/${order.id}`} order={order}>
										<a>Click to view</a>
									</Link>
								</td>
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
                                <td>{new Date(order.created_date).toLocaleDateString()}</td>
							</tr>
						))}
					</tbody>
				</table>
    </div>
    </div>

    </div>
  )
}

export default Admin
