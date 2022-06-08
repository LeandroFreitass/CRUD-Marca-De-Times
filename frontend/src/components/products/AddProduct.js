import { Dropdown, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Input from "../Input";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const validationPost = yup.object().shape({
  nametime: yup.string().required("O nome do time é obrigatório"),
  quantidade: yup.string().required("A quantidade é obrigatório").max(9999, "A quantidade deve conter no maximo 4 caracteres exemplo 9999 "),
  price: yup.string().required("O preço é obrigatório").max(9999, "O preço precisa ter menos de 9999 caracteres")
})

const AddProduct = () => {
  const [nametime, setNametime] = useState("");
  const [marcas, setMarcas] = useState([""]);
  const [regioatime, setRegioes] = useState([""]);
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

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
})
  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      nametime: nametime,
      // marcas: marcas,
      // regioatime: regioatime,
      price: price,
      quantidade: quantidade,
    });
    navigate("/listagemProdutos");
  };


  
  

  return (
    <Modal.Dialog  size="md">
       <Modal.Title>Cadastro de Produtos</Modal.Title>
      <form class="row g-2" onSubmit={handleSubmit(saveProduct)}>
        <div class="col-md-6">
          <label className="label">Nome Time</label>
          <input
            type="name"
            class="form-control"
            placeholder="Nome Time"
            value={nametime}
            {...register("nametime")}
            onChange={(e) => setNametime(e.target.value)}
          />
          <p className="error-message">{errors.nametime?.message}</p>
        </div>
        <div class="col-md-6">
          <label className="label">Estado Times</label>
          <Dropdown value={regioatime}  onChange={(e) => setRegioes(e.target.value)} >
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
            Estado
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {regioatime.map((regioe) => (
                <Dropdown.Item  key={regioe.id}>{regioe.regioes}</Dropdown.Item>
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
          <Dropdown value={marcas} onChange={(e) => setRegioes(e.target.value)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
              Marcas
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {marcas.map((marca) => (
                <Dropdown.Item key={marca.id}  >{marca.marca}</Dropdown.Item>
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
