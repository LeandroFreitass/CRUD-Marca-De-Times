import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";

const validationPost = yup.object().shape({
  marca: yup
    .string()
    .required("Preenchimento obrigatório")
    .matches(/[A-Z]/, "A primiera letra deve ser maiuscula"),
});

const EditMarca = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const onSubmit = async (data) => {
    await axios.put(`http://localhost:5000/marcas/${id}`, data);
    navigate("/listagemMarcas");
  };

  useEffect(() => {
    if (!!id && !loading) {
      getMarcaById(id);
    }
  }, []);

  const getMarcaById = async (brandId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/marcas/${brandId}`
      );
      if (!!response.data) {
        setValue("marca", response.data.marca);
      } else {
        toast("Marca não encontrada!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() =>
        toast("Ocorreu um erro ao buscar a marca. Tente novamente!")
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="model_box">
      <Modal.Dialog size="md">
        <Modal.Title>Cadastro de Marcas</Modal.Title>
        <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group mt-3">
            <label className="label">Marca Time</label>
            <input
              type="text"
              class="form-control"
              placeholder="Marcas"
              {...register("marca")}
            />
          </div>
          <br />
          <button
            style={{
              width: "100%",
              backgroundColor: "blue",
              color: "white",
              height: "40px",
            }}
          >
            Adicionar
          </button>
        </form>
        <ToastContainer />
      </Modal.Dialog>
    </div>
  );
};

export default EditMarca;
