
import { useEffect } from "react";
import "./App.css";

function App() {
  function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  return null;
}

const submit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
 

  const res = await fetch('/api/login', {
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
          <button>
            email <br />
            <input type="email" name="email" id="" /><br />
            pass <br />
            <input type="password" name="" id="" />
          </button>
      </form>
    </>
  );
}

export default App;
