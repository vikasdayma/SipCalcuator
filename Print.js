import React from 'react'
import './Print.css'
const Print = (props) => {
    let i = props.getRate/(12*100) ;
    let n =props.getYear*12 ;
    // console.log(n)
    // console.log(i)
   let a =1;
   let mul=1;
   let b =(1+i);
   for(a=1;a<=n;a++){
mul=b*mul;  
   }
  return (

    <>

    <div className='final'> 
     <span className='Emi'>
    <p>Invested Amount</p>
    <p>{ "₹"+props.getPrice*props.getYear*12}</p>
    </span>    
    <span className='Emi'>
    <p>Estd Returns</p>
    <p>{  "₹"+ parseInt( (  props.getPrice *((((mul)-1)/i)*(1+i)))-props.getPrice*props.getYear*12 )}</p>
    </span>    
    <span className='Emi'>
    <p>Total Value</p>
    <p>{   "₹"+ parseInt(   props.getPrice *((((mul)-1)/i)*(1+i)) )}</p>
    </span>  
    </div>  
</>
  )
}

export default Print;
