
import './App.css';

function App(temp) {
  const ball = temp.arr;
  const it = ball.map((i)=>{
    return (
    <div>
      <h1 style={{color:i}}>{temp.text}</h1>
    </div> )
  })

  return (
    <div>
      {it}
    </div>
  );
}

export default App;
