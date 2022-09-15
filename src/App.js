import React from "react";
//---
import Tablewithget from "./components/Tabelas/TableWithGet";

//----
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//para criar rotas
import {
  Button,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/" href="/">
              Project Cars
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={NavLink} to="/" href="/">
                  Home
                </Nav.Link>

                <NavDropdown title="Tabelas" id="navbarScrollingDropdown">
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/tablewithget"
                    href="/tablewithget"
                  >
                    Get Tabela
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}

                  <NavDropdown.Item
                    as={NavLink}
                    to="/tablewithinsert"
                    href="/tablewithinsert"
                  >
                    Insert Tabela
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                </NavDropdown>
                {/*---------------------------------
                <Nav.Link href="#" disabled>
                  Example
                </Nav.Link>
                ------------------------------*/}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container">
          <br />
          <Routes>
            <Route path="/tableWithGet" element={<Tablewithget />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
