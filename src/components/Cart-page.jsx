import axios from 'axios'
import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react'
const Cartpage = () => {
const [Allcart , setCart ] = useState(JSON.parse(localStorage.getItem("MyCart")) || []) ;
const [qty , setQty ] = useState(); 

  return (
    <div className='w-[85%] select-none mx-auto py-[100px]' >
      <h1 className='text-[50px] font-bold text-black'>Product Shoping </h1>
      <div className="cart-container w-full flex ">
          <div  className='w-[70%] flex flex-col gap-5'>
             {
               Allcart.map(item => (
                  <div key={item.id} className="product-cart relative bg-gray-200 rounded-2xl px-5 py-2 flex gap-4 items-center w-[90%] h-[100px]">
                  <img src={item.image} className='w-[100px] object-cover object-top h-full' alt="" />
                   <h1 className='text-md font-regular'>{item.title}</h1>
                  <h2 className="price text-red-700 text-2xl font-bold">$ {item.price}</h2>
                  <div className="qty flex items-center gap-3 ">
                      <button className='bg-gray-500 p-2 rounded-full px-4 text-white text-xl'>+</button>
                      <span>{item.qty}</span>
                      <button className='bg-gray-500  rounded-full px-[18px] cursor-pointer py-2 text-white text-xl' >-</button>
                  </div>
                  <button type="button" className='cursor-pointer absolute  top-[-3px] right-[-3px]' ><CircleX className='text-red-700 text-[50px] ' /></button>
              </div>
               ))
             }
          </div>
          <div className='w-[30%] flex flex-col   border-l-3 border-black pl-5 '>
              <h1 className='text-[2em] font-bold '>Shoping Detail :</h1>
              <p className='text-[1.5em] font-extralight'>Total : $<span>200</span></p>
              <p className='text-[1.5em] font-extralight' >Tax :$<span>0.50</span></p>
              <p className='text-[1.5em] font-extralight pb-10' >Qutility: <span>5</span></p> 
              <h1 className='text-[1.7em] font-bold bg-blue-500 rounded-3xl px-10 py-3 opacity-95' >Total Payment : $<span>1000.00</span></h1>
          </div>
      </div>
    </div>
  )
}

export default Cartpage;