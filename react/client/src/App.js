import React from "react";
import "./App.css";
//import Layout from "./layouts/layout";
import Login from "./pages/login";

function App() {
  const [data, setData] = React.useState(null)

  /*React.useEffect(() => {
    fetch("/api/v1/teste/getHelloWorld")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [])*/

  return (

    <Login />

  )
}

export default App;
