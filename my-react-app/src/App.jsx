
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
  const csrfToken = getCookie('XSRF-TOKEN');

  const res = await fetch('/api/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': csrfToken,  // ← MUST send this
    },
    body: JSON.stringify({
      email: 'test@example.com',
      password: 'password',
    }),
  });

  const data = await res.json();
  console.log(data);
};

  useEffect(()=>{
    fetch('https://deploy-test-production-2c10.up.railway.app/sanctum/csrf-cookie',{
      credentials: 'include',
    })
    .then(response => response.text())
    .then(data => console.log(document.cookie));
  },[])

        console.log(document.cookie);

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
