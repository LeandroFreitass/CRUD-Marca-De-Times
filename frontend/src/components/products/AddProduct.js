import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Input from "../Input";

import MaskedInput from "react-maskedinput";
import IntlCurrencyInput from "react-intl-currency-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  nametime: yup
    .string()
    .required("O Preenchimento do nome do time é obrigatório")
    .matches(/[A-Z]/, "A primiera letra deve ser maiuscula"),
  marcas: yup.string().required("O Preenchimento do preço é obrigatório"),
  tamanhos: yup.string().required("O Preenchimento do preço é obrigatório"),
  regioatime: yup.string().required("O Preenchimento do Estado é obrigatório"),
  quantidade: yup
    .string()
    .required("O Preenchimento da quantidade é obrigatório"),
  price: yup.string().required("O Preenchimento do preço é obrigatório"),
});

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const AddProduct = () => {
  const [marcas, setMarcas] = useState([]);
  const [regioatime, setRegioes] = useState([]);
  const [tamanhos, setTamanho] = useState([]);
  const [formatMask, setFormatMask] = useState("99,99");
  // const [price, setPrice] = useState('');
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

  useEffect(() => {
    getTamanho();
  }, []);

  const getTamanho = async () => {
    const response = await axios.get("http://localhost:5000/tamanhos");
    setTamanho(response.data);
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:5000/products", {
      ...data,
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
            size="10"
            maxlength="11"
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
              <option key={regioe.id}>{regioe.regioes}</option>
            ))}
          </select>
          <p className="error-message">{errors.regioatime?.message}</p>
        </div>
        <div
          class="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label className="label" htmlFor="regiao">
            Tamanhos
          </label>
          <select {...register("tamanho")} class="form-control" id="marca">
            <option value="">Selecione:</option>
            {tamanhos.map((tamanho) => (
              <option key={tamanho.id}>{tamanho.tamanho}</option>
            ))}
          </select>
          <p className="error-message">{errors.tamanhos?.message}</p>
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
          <p className="error-message">{errors.marcas?.message}</p>
        </div>


        <div class="col-md-6">
          <label className="label">Preço</label>
          <IntlCurrencyInput
           currency="BRL"
           config={currencyConfig}
           class="form-control"
            mask={formatMask}
            minLenght="3"
            maskchar={null}
            alwaysShowMask={true}
            //pattern="$[9999].[99]"
            //onChange={this.handlePrice}
            {...register("price")}
          />
          <p className="error-message">{errors.price?.message}</p>
        </div>


        <div class="col-md-6">
          <label className="label">Quantidade</label>
          <InputMask
            mask="999"
            maskChar={null}
            type="text"
            class="form-control"
            placeholder="Quantidade"
            {...register("quantidade")}
          />
          <p className="error-message">{errors.quantidade?.message}</p>
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
