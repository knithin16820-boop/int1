import React from 'react'
import { useState } from 'react'
function App() {
  const[a,seta]=useState(0);
  const[b,setb]=useState(0);
  const [res,setres]=useState(0);
  let add=()=>{
    setres(parseInt(a)+parseInt(b));
    seta('');
    setb('');
  }
  let sub=()=>{
    setres(parseInt(a)-parseInt(b));
    seta('');
    setb('');
  }
  let mul=()=>{
    setres(parseInt(a)*parseInt(b));
    seta('');
    setb('');
  }
  let div=()=>{
    setres(parseInt(a)/parseInt(b));
    seta('');
    setb('');
  }
  return (
    <div className='outer'>
      <div className='inner'>
      <label for="number1">Enter the number1 </label>
      <input type='text' name="number1" value={a} placeholder='enter the number1' onChange={(e)=>{
        seta(e.target.value)
      }}></input>
         <label for="number2">Enter the number1 </label>
      <input type='text' name="number2" value={b} placeholder='enter the number2' onChange={(e)=>{
        setb(e.target.value)
      }}></input>
      </div>
      <h1>Result is {res}</h1>
      <div className='but'>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      </div>
    </div>
  )
}
//git remote add  origin https://github.com/knithin16820-boop/internal.git
export default App
