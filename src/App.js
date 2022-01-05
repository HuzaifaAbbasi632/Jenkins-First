import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: "rgb(53, 59, 55)", height: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{height:"15vh", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1 style={{ color: "white" }}>Welcome To My App</h1>
        <h3 style={{ color: "white" }}>What is your main focus today</h3>
        <input style={{color:"white",height:"50px", paddingBottom:"10px", textAlign:"center", fontSize:"30px", border:"0px", border:"0px", outline:"none", backgroundColor:"rgb(53, 59, 55)", borderBottom:"2px Solid Black"}} placeholder='Type Something'></input>
      </div>
    </div>
  );
}

export default App;
