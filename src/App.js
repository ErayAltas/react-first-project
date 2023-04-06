import { useEffect, useRef, useState } from 'react'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("red")
  const data = "abc"
  const clickFunc = () => {
    setCount(count+1)
    if(color === "red"){
      setColor("blue")
    }else{
      setColor("red")
    } 
  }
  
  const firstRef = useRef(0)
  console.log(firstRef)
  useEffect(() => {
    setColor("purple")
    firstRef.current.value = 5
  }, [])


  
  return (
    <div className="App">
      <div style={{color: color}}>colorful text</div>
      {count}
      <Name data={data} />
      <button onClick={clickFunc}>tıkla</button>
      <input ref={firstRef} placeholder='ara'></input>
    </div>
  );
}

export default App;
