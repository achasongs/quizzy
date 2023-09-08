import { useRef } from "react";
import { useState } from "react";

export default function Start({ setUsername }) {
    
    const [inputValue, setInputValue] = useState('');
    // const [name, setName] = useState(null);
    const inputRef = useRef();

    const showName = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        // onInputChange(newValue);
    }
    const handleClick = (event) => {
        inputRef.current.value && setUsername(inputRef.current.value);  
    }
  return (
    <div  className="start">

     <input type="text" placeholder="Enter your name" className="startInput" value={inputValue} onChange={showName} ref={inputRef}/>
      <button className="startButton" onClick={handleClick}>Start Quiz</button>

    </div>
  )
}
