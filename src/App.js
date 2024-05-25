import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState('pink');
  return (
    <div className="screen" style={{backgroundColor : color}}>
      <div className="fixed">
        <div className="bar">
          <button className="button" onClick={()=>setColor("red")} style={{backgroundColor:"red"}}> RED
          </button>
          <button className="button" onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}> YELLOW
          </button>
          <button className="button" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}> GREEN
          </button>
          <button className="button" onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}> BLUE
          </button>
          <button className="button" onClick={()=>setColor("black")} style={{backgroundColor:"black"}}> BLACK
          </button>
          <button className="button" onClick={()=>setColor("gray")} style={{backgroundColor:"gray"}}> GRAY
          </button>
          <button className="button" onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}}> OLIVE
          </button>
          <button className="button" onClick={()=>setColor("lime")} style={{backgroundColor:"lime"}}> LIME
          </button>
          <button className="button" onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}> PURPLE
          </button>
          <button className="button" onClick={()=>setColor("brown")} style={{backgroundColor:"brown"}}> BROWN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
