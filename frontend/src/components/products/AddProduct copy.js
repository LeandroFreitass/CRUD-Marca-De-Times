import { Button, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

const AddProduct = () => {
  const [nametime, setNametime] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [regioatime, setRegioatime] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getMarcas();
  }, []);

  const getMarcas = async () => {
    const response = await axios.get("http://localhost:5000/marcas");
    setMarcas(response.data);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      nametime: nametime,
      marcas: marcas,
      regioatime: regioatime,
      // tamanho: tamanho,
      quantidade: quantidade,
      price: price,
    });
    navigate("/");
  };

  return (
    <div className="model_box">
      <form class="row g-2" onSubmit={saveProduct}>
        <div class="col-md-6">
          <label className="label">Nome Time</label>
          <input
            type="name"
            class="form-control"
            placeholder="Nome Time"
            value={nametime}
            onChange={(e) => setNametime(e.target.value)}
          />
        </div>
        <div class="col-md-6">
          <label className="label">Marca Time</label>
          <Dropdown class="col-md-6">
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
              Marcas
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {marcas.map((marca) => (
                <Dropdown.Item key={marca.id}>{marca.marcas}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div class="col-md-6">
          <label className="label">Região Time</label>
          <input
            type="text"
            class="form-control"
            placeholder="RegiaoTime"
            value={regioatime}
            onChange={(e) => setRegioatime(e.target.value)}
          />
        </div>
        <div class="col-md-6">
          <label className="label">Marca Time</label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
              Marcas
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {marcas.map((marca) => (
                <Dropdown.Item key={marca.id}>{marca.marcas}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div class="col-md-6">
          <label className="label">Preço</label>
          <Input
            type="text"
            class="form-control"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label className="label">Quantidade</label>
          <input
            type="text"
            class="form-control"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>
      </form>
      <Button variant="primary" size="lg">
        Adicionar
      </Button>
    </div>
  );
};
export default AddProduct;
