
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
  const submit = (e) => {
    e.preventDefault();
    fetch('https://deploy-test-production-2c10.up.railway.app/login',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },}
    )}
        

  return (
    <>
      <form action="" onSubmit={submit}>
          <button>
            Login
          </button>
      </form>
    </>
  );
}

export default App;
