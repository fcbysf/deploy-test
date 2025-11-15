
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(()=>{
    fetch('https://deploy-test-production-2c10.up.railway.app/sanctum/csrf-cookie',{
      credentials: 'include',
    })
    .then(response => response.text())
    .then(data => console.log(data));
  },[])

  return (
    <>
      <form action="" onSubmit={submit}>
          
      </form>
    </>
  );
}

export default App;
