import { useState, useEffect } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductList() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
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
            <Link  to="/add"><Button variant="primary">Cadastrar Produto</Button></Link>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  {/* <th>Marca</th> */}
                  <th>Região</th>
                  {/* <th>Tamanho</th> */}
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.nametime}</td>
                    {/* <td>{product.marca}</td> */}
                    <td>{product.regioatime}</td>
                    {/* <td>{product.tamanho}</td> */}
                    <td>{product.price}</td>
                    <td>{product.quantidade}</td>
                    <td>
                    <a to={"/edit/" + product.id} data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                      <a
                        onClick={() => deleteProduct(product.id)}
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

export default ProductList;
