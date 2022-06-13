import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

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
          </div>
          <div
            class="col-sm-4 offset-sm-2 mt-8 mb-2 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Lista de Produtos</b>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Marca</th>
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
                    <td>{product.marcas}</td>
                    <td>{product.regioatime}</td>
                    {/* <td>{product.tamanho}</td> */}
                    {/* <td>{product.price}</td> */}
                    <td>R$ {parseFloat(product.price).toFixed(2).replace(".", ",")}</td>
                    <td>{product.quantidade}</td>
                    <td>
                    <Link to={"/edit/" + product.id} data-toggle="tooltip">
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <a
                        onClick={() => deleteProduct(product.id)}
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

export default ProductList;
