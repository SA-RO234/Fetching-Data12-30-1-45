import React, { useState } from 'react'
const readLessMore = ({text , maxlength}) => {
     const [readMore , setReadMore] = useState(false);
      if(text.length <= maxlength){
          return <p>{text}</p>
      }
  return (
    <p>
        {readMore ? text : text.slice(0 , maxlength) + "..." };
        <button onClick={()=> setReadMore(!readMore)} 
             className='text-red-700 cursor-pointer'>
                {readMore ? "Read Less" : "Read More"}
                </button>
    </p>
  )
}
export default readLessMore