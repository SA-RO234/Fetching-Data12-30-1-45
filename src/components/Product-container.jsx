import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Skeleton from './Skeleton';
import { Link } from 'react-router-dom';

const Productcontainer = () => {
      const [data, setData] = useState([])
   const [loading,setLoading] = useState(true);
       useEffect(()=> async()=>{
          try{
             const response = await axios.get("https://fakestoreapi.com/products");
              setData(response.data);
           }catch(err){
              console.log("Server Error : !",err);;
          }
          finally{
            setLoading(false);
          }
       },[]);

  return (
     <div className='container mx-auto select-none'>
          <h1 className=' font-bold text-center pb-10 text-[100px] '>Product</h1>
          <div className='Product-container flex justify-center items-center flex-wrap gap-[20px] mx-auto'>
            {
              loading ? 
              <>
                <Skeleton/> 
                <Skeleton/> 
                <Skeleton/> 
                <Skeleton/> 
                <Skeleton/> 
                 <Skeleton/> 
                <Skeleton/> 
                <Skeleton/> 
                </>
                :
              data.map((item)=>(
                  <div key={item.id} className="card-item w-[300px] h-[500px] rounded-[20px] border-black border-2 p-5 overflow-hidden">
                     <Link to={`/productDetail/${item.id}`} className='bg-red-500 px-3 py-1 text-2xl font-bold' >Detil</Link>
                <img src={item.image} alt="" className="img w-full h-[50%] object-top object-cover " />
                <h1 className="title text-4xl font-bold">{item.title.slice(0,20)}</h1>
                <p className="des">{item.description.slice(0,100)}</p>
                <Link to="/cart" type="button" className="addtocart bg-yellow-700 rounded-2xl px-15 py-3 cursor-pointer
                                                  text-2xl font-bold text-white">Add To Cart</Link>
               </div>
              ))
            }
          </div>
    </div>
  )
}

export default Productcontainer