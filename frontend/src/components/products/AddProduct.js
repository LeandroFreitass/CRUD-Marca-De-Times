import { Button, Dropdown, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Input from "../Input";

const AddProduct = () => {
  const [nametime, setNametime] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [regioes, setRegioes] = useState([]);
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

  useEffect(() => {
    getRegioe();
  }, []);

  const getRegioe = async () => {
    const response = await axios.get("http://localhost:5000/regioes");
    setRegioes(response.data);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      nametime: nametime,
      marcas: marcas,
      regioes: regioes,
      quantidade: quantidade,
      price: price,
    });
    navigate("/listagemProdutos");
  };

  return (
    <Modal.Dialog  size="md">
       <Modal.Title>Cadastro de Produtos</Modal.Title>
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
          <label className="label">Região Times</label>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
              Região Times
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {regioes.map((regioe) => (
                <Dropdown.Item key={regioe.id}>{regioe.marcas}</Dropdown.Item>
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
          <label className="label">Quantidade</label>
          <InputMask
            mask="9999"
            maskChar={null}
            type="text"
            class="form-control"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div><br/>
        <button style={{width: '100%', 
        backgroundColor:'blue', 
        color:'white', 
        height:'40px',
        borderRadius:'5px'}}>
        Adicionar
      </button>
      </form>
      </Modal.Dialog>
  );
};
export default AddProduct;
