import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api/v1/carros")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {typeof data === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.map((i) => <p key={i[0]}> {i} </p>)
      )}
    </>
  );
}

export default App;
