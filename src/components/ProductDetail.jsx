import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Minus, Plus, Share2, Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react"
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs } from './ui/tabs';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)


  const relatedProducts = [
    { id: 1, name: "Wireless Earbuds Pro", price: 199, image: "/wireless-earbuds.png" },
    { id: 2, name: "Smart Watch Series 5", price: 299, image: "/smartwatch-lifestyle.png" },
    { id: 3, name: "Bluetooth Speaker", price: 89, image: "/bluetooth-speaker.png" },
    { id: 4, name: "Phone Case Premium", price: 49, image: "/colorful-phone-case-display.png" },
  ]
    const[data , setData] = useState();
    const[loading , setLoading] = useState(true);
    var found ;
    const {id} = useParams();
      useEffect(()=> async()=>{
          try{
             const response = await axios.get("https://fakestoreapi.com/products");
             setData(response.data.find((item)=> item.id == id)); 
           }catch(err){
              console.log("Server Error : !",err);;
          }
          finally{
            setLoading(false);
          }
       },[id]);
    
       
  return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link  className='text-[20px] font-bold flex gap-3' to={"/"}><ArrowLeft /> Back</Link>
        <h1 className='text-[50px] text-black font-bold'>Product Detail</h1>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square border-2 bg-card rounded-lg overflow-hidden">
            <img
              src={data?.image}
              alt="Product"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Best Seller
            </Badge>
            <h1 className="text-3xl font-bold text-balance mb-2">  {data?.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-muted-foreground">Review :{data?.rating.count}</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-black">${data?.price}</span>
             
            </div>
          </div>

          <p className="text-muted-foreground text-pretty">
            {
              data?.description
            }
           
             </p>


          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button size="lg" className="flex-1 bg-black cursor-pointer  text-white hover:bg-gray-500">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail