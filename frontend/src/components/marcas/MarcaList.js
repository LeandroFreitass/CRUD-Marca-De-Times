import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

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
          </div>
          <div
            class="col-sm-5 offset-sm-1 mt-8 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Lista de Cadastro Marcas</b>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {marcas.map((marca, index) => (
                  <tr key={marca.id}>
                    <td>{index + 1}</td>
                    <td>{marca.marca}</td>
                    <td>
                      <Link to={"/editMa/" + marca.id} data-toggle="tooltip">
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      
                      <a
                        onClick={() => deleteMarca(marca.id)}
                        data-toggle="tooltip"
                        style={{ color: "red", cursor: 'pointer' }}
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
