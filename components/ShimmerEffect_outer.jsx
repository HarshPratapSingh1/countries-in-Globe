import React from 'react'
import './Shimmer_outside.css'
export default function ShimmerEffect_outer() {
  // const array=new Array(10).fill(1);
  // const array=
  // console.log(array);
  return (
    <div className='countries-container'>
      {Array.from({length:100}).
        map((el=>{
        return <div className='country-card shimmer-card'>
        <div className='photu'></div>
        <div className='down'>
          <div className='naam'></div>
          <div className='cap'></div>
          <div className='cap'></div>
          <div className='cap' style={{
            width:"50%"
          }}></div>

        </div>
      </div>
  }))}
    </div>
  )
}
