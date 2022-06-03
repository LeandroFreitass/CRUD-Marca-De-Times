import { useState, useEffect } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MarcaList() {
  const [marcas, setMarca] = useState([]);

  useEffect(() => {
    getMarcas();
  }, []);

  const getMarcas = async () => {
    const response = await axios.get("http://localhost:5000/marcas");
    setMarca(response.data);
  };

  const deleteMarca = async (id) => {
    await axios.delete(`http://localhost:5000/marcas/${id}`);
    getMarcas();
  };

  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Student"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Lista de Cadastro</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Link to="/add">
              <Button variant="primary">Cadastrar Produto</Button>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Tamanho</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {marcas.map((marca, index) => (
                  <tr key={marca.id}>
                    <td>{index + 1}</td>
                    <td>{marca.marca}</td>
                    <td>{marca.tamanho}</td>
                    <td>
                      <a to={"/edit/" + marca.id} data-toggle="tooltip">
                        <i class="material-icons">&#xE254;</i>
                      </a>
                      <a
                        onClick={() => deleteMarca(marca.id)}
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarcaList;
