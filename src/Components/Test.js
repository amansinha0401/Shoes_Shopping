import React, { useState } from 'react'

const Test = () => {
    const[ak,setAk]=useState(0)
  return (
    <div>
       <button onClick={() => setAk(ak + 1)}>+</button>
       {ak}
      <button onClick={() => setAk(ak - 1)}>-</button>
    </div>
  )
}

export default Test
