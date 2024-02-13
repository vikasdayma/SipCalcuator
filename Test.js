import React ,{useState}from 'react'
import './Test.css'
import Print from './Print'
const Test = () => {
    const[getDataPrice,setDataPrice]=useState(33232);
    const[getDataRate,setDataRate]=useState(22);
    const[getDataYear,setDataYear]=useState(12);
    const priceHandler=(event)=>{
        setDataPrice(event.target.value);
    }
    const rateHandler=(event)=>{
        setDataRate(event.target.value);
    }
    const yearHandler=(event)=>{
        setDataYear(event.target.value);
    }
  return (
    <>

    <div className='main-div'>
     <span className='Emi'>
    <p>Monthly Investment</p>
    <div><p className='div-text'>{"₹"+getDataPrice}</p></div>
    </span>
    
    <input type="range" value={getDataPrice} onInput={priceHandler} id="points"name="points" min="1000" max="100000" ></input>

    <span className='Emi'>
    <p>Expected Return Rate % </p>
    <div><p className='div-text'>{getDataRate+"%"}</p></div>
    </span>
    
    <input type="range" id="points"name="points" onInput={rateHandler} min="2" max="40" value={getDataRate}  ></input>

    <span className='Emi'>
    <p>Time Period (Years)</p>
    <div><p className='div-text'>{getDataYear}</p></div>
    </span>
    
    <input type="range" id="points"name="points" min="1" max="40" onInput={yearHandler} value={getDataYear} ></input>

      <Print getPrice={getDataPrice} getRate={getDataRate} getYear={getDataYear} ></Print>
    </div>
    </>
  )
}

export default Test;
