import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
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
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Descrição</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.descricao}</td>
            <td>{item.marca}</td>
            <td>{item.modelo}</td>
            <td>{item.ano}</td>
            <td>{item.cor}</td>
            <td>{item.preco}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default App;
