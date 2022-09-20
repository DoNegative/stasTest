import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

const  zapros = () => {
    axios.get(`http://172.16.10.1:4110/forallscreens/getEquipmentTypes`,
    {headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWIxODE2LWJjYTUtNDgxZC1hYWU5LTdmYThiOTRkMzllNSIsImxvZ2luIjoidGVzdGxvZyIsImVtYWlsIjoidXNlcjE0NEBtYWlsLnJ1IiwiZmlvIjoiXHUwNDE4XHUwNDMyXHUwNDMwXHUwNDNkXHUwNDNlXHUwNDMyIFx1MDQxOFx1MDQzMlx1MDQzMFx1MDQzZCBcdTA0MThcdTA0MzJcdTA0MzBcdTA0M2RcdTA0M2VcdTA0MzJcdTA0MzhcdTA0NDciLCJleHAiOjE2NjM3MDA2Mzd9.oGIu3PoDlBCHp-dYH58xkATJWubR8Xy8VF6vzVNfNzo`,
    }})
    
      .then(res => {
        console.log(res);
      })
  }
  return (
    <div style={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <button style={{width:"300px", height:"300px", fontSize:"50px"}} onClick={()=>zapros()}>
        Пися Попа 8=====D
      </button>
    </div>
  );
}

export default App;
