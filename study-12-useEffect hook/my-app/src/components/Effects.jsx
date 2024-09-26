import { useState, useEffect} from "react"

const Effects = () => {

  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(0);
  
  useEffect(() => {
   
    {console.log("Side Effects")}
    
  }, [count1]);

  return (
    <>
      <div>
      <h1>{count}</h1><br/>
      <button type="button" onClick={()=>setCount(count+1)}>+</button>
      </div>
      <div>
      <h1>{count1}</h1><br/>
      <button type="button" onClick={()=>setCount1(count1+1)}>+</button>
      </div>
      
    </>
  )
}

export default Effects
