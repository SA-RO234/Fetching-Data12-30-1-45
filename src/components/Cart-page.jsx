import React from 'react'

const Cartpage = () => {
  return (
    <div className='w-[85%] select-none mx-auto py-[100px]' >
      <h1 className='text-[50px] font-bold text-black'>Product Shoping </h1>
      <div className="cart-container w-full flex ">
          <div  className='w-[70%]'>
              <div className="product-cart">
                  <img src="" alt="" />
                  <h2 className="price"></h2>
                  <div className="qty flex items-center gap-3 ">
                      <button>+</button>
                      <span>5</span>
                      <button>-</button>
                  </div>
              </div>
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