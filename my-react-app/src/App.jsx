
import { useEffect } from "react";
import "./App.css";

function App() {

const submit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
 

  const res = await fetch('https://deploy-test-production-2c10.up.railway.app/api/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const Resdata = await res.json();
  console.log(Resdata);
};


  return (
    <>
      <form action="" onSubmit={submit}>
            email <br />
            <input type="email" name="email" id="" /><br />
            pass <br />
            <input type="password" name="" id="" />
          <button>
            login
          </button>
      </form>
    </>
  );
}

export default App;
