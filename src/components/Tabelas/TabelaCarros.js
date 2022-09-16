import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Tabelas/TabelaCarros.css";
import { Table, Form, Row, Col, Button } from "react-bootstrap";

function TableWithGet() {
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();

  // Carrega os dados da API
  function getDataCarros() {
    fetch("/lista_carros")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  // Altera o estado
  useEffect(() => {
    getDataCarros()
  }, []);
 
  // Função para enviar os dados do formulário para o servidor
  const onSubmit = (carro) => {
    fetch("/insere_carro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carro),
    })
    .then((response) => response.json())
    .then(getDataCarros())
  };

  function deleteCarro(id) {
    fetch("/delete_carro/"+id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
    .then((response) => response.json())
    .then(getDataCarros())
  }

  //----------------------------------------------------
  return (
    <>
      <div className="container">
        {/* FORMS */}
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            {/* -----------------------------Descrição--------------------------------- */}
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite..."
                {...register("descricao", { required: true, maxLength: 100 })}
                /*defaultValue="Mark"*/
              />
              <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
            {/* ----------------------------Marca---------------------------------- */}
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite..."
                {...register("marca", { required: true, maxLength: 30 })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
            {/* ----------------------------Modelo---------------------------------- */}
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite..."
                {...register("modelo", { required: true, maxLength: 30 })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
            {/* --------------------------------ano------------------------------ */}
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Ano</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Digite..."
                //value={new Date().toLocaleDateString("en-CA")}
                //placeholder={new Date().toLocaleDateString("en-CA")}
                {...register("ano", { required: true })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            {/* ------------------------------Cor-------------------------------- */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Cor</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite..."
                {...register("cor", { required: true })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
            {/* ------------------------------Preço-------------------------------- */}
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Digite..."
                {...register("preco", { required: true })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a correct information.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <br />
          {/* -----------------------------Checkbox--------------------------------- */}
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Confirma?"
              feedback="Você deve confirmar antes de salvar."
              feedbackType="invalid"
            />
          </Form.Group>
          {/* -------------------------------------------------------------- */}
          <Button type="submit">Salvar</Button>
        </Form>
        <br />
        {/* -------------------------------------------------------------------- */}
        {/* -------------------------------------------------------------------- */}
        {/* ------------------------------TABLE--------------------------------- */}

        <h5>Tabela de Carros</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>Preço</th>
              <th>Ações</th>
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
                <td>
                  <Button variant="danger" onClick={() => deleteCarro(item.id)}>x</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableWithGet;
