import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown, Modal } from "react-bootstrap";
import Input from "../Input";
import InputMask from "react-input-mask";

const EditProduct = () => {
  const [nametime, setNametime] = useState("");
  const [marcas, setMarcas] = useState("");
  const [regioes, setRegioes] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault(); //agar page tidak reload
    await axios.patch(`http://localhost:5000/products/${id}`, {
      nametime: nametime,
      marcas: marcas,
      regioes: regioes,
      tamanho: tamanho,
      quantidade: quantidade,
      price: price,
    });
    navigate("/listagemProdutos");
  };

  useEffect(() => {
    getProductById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setNametime(response.data.nametime);
    setMarcas(response.data.marca);
    setRegioes(response.data.regioatime);
    setTamanho(response.data.tamanho);
    setQuantidade(response.data.quantidade);
    setPrice(response.data.price);
  };

  return (
    <Modal.Dialog  size="md">
       <Modal.Title>Cadastro de Produtos</Modal.Title>
      <form class="row g-2" onSubmit={updateProduct}>
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
          <label className="label">Estado Times</label>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
            Estado
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

export default EditProduct;
