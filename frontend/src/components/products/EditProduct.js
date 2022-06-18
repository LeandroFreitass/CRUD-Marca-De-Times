import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputMask from "react-input-mask";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationPost = yup.object().shape({
  nametime: yup
    .string()
    .required("O Preenchimento do nome do time é obrigatório")
    .matches(/^[A-Za-z-a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{0,25}$/, "A primiera letra deve ser maiuscula"),
  marcas: yup.string().required("O Preenchimento da marca é obrigatório"),
  tamanho: yup.string().required("Preenchimento obrigatório"),
  regioatime: yup.string().required("O Preenchimento do Estado é obrigatório"),
  quantidade: yup.string().required("O Preenchimento da quantidade é obrigatório"),
  price: yup.string().required("O Preenchimento do preço é obrigatório").matches(/^[0-9]/, "somente numeros"),
});

const EditProduct = () => {
  const [nametime, setNametime] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault(); 
    await axios.patch(`http://localhost:5000/products/${id}`, {
      nametime: nametime,
      quantidade: quantidade,
      price: price,
    });
    navigate("/listagemProdutos");
  };

  useEffect(() => {
    getProductById();
  }, []); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });


  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setNametime(response.data.nametime);
    setQuantidade(response.data.quantidade);
    setPrice(response.data.price);
  };

  return (
    <Modal.Dialog size="md">
    <Modal.Title>Cadastro de Produtos</Modal.Title>
    <form class="row g-2" onSubmit={handleSubmit(updateProduct)}>
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

      <div class="col-md-6">
        <label className="label">Preço</label>
        <input
          type="text"
          class="form-control"
          placeholder="Preço"
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

export default EditProduct;
