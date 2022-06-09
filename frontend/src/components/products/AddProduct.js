import { Dropdown, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Input from "../Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  nametime: yup.string().required("O nome do time é obrigatório"),
  marcas: yup.string().required("O preço é obrigatório"),
  regioatime: yup.string().required("O preço é obrigatório"),
  quantidade: yup.string().required("A quantidade é obrigatório"),
  price: yup.string().required("O preço é obrigatório")
})

const AddProduct = () => {
  // const [nametime, setNametime] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [regioatime, setRegioes] = useState([]);
  // const [quantidade, setQuantidade] = useState("");
  // const [price, setPrice] = useState("");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:5000/products", {
      ...data
    });
    navigate("/listagemProdutos");
  };

  return (
    <Modal.Dialog size="md">
      <Modal.Title>Cadastro de Produtos</Modal.Title>
      <form class="row g-2" onSubmit={handleSubmit(onSubmit)}>
        <div class="col-md-6">
          <label className="label">Nome Time</label>
          <input
            type="name"
            class="form-control"
            placeholder="Nome Time"
            {...register("nametime")}
          />
          <p className="error-message">{errors.nametime?.message}</p>
        </div>
        <div
          class="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label className="label" htmlFor="regiao">
            Estado Times
          </label>
          <select {...register("regioatime")} class="form-control" id="regiao">
            <option value="">Selecione:</option>
            {regioatime.map((regioe) => (
              <option key={regioe.id} >
                {regioe.regioes}
              </option>
            ))}
          </select>
        </div>

        <div class="col-md-6">
          <label className="label">Preço</label>
          <input
            type="text"
            class="form-control"
            placeholder="Preço"
            {...register("price")}
          />
        </div>

        <div
          class="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label className="label" htmlFor="regiao">
            Marcas
          </label>
          <select {...register("marcas")} class="form-control" id="marca">
            <option value="">Selecione:</option>
            {marcas.map((marca) => (
              <option key={marca.id}>{marca.marca}</option>
            ))}
          </select>
        </div>

        <div class="col-md-6">
          <label className="label">Quantidade</label>
          <InputMask
            mask="9999"
            maskChar={null}
            type="text"
            class="form-control"
            placeholder="Quantidade"
            {...register("quantidade")}
          />
        </div>
        <br />
        <button
          style={{
            width: "100%",
            backgroundColor: "blue",
            color: "white",
            height: "40px",
            borderRadius: "5px",
          }}
        >
          Adicionar
        </button>
      </form>
    </Modal.Dialog>
  );
};
export default AddProduct;
