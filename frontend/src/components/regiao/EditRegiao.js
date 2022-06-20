import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const validationPost = yup.object().shape({
  regioes: yup.string().required("Preenchimento obrigatório").matches(/^[A-Za-z-a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{0,15}$/, 'A primiera letra deve ser maiuscula e minimo 15 letras')
});

const EditEstado = () => {
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
    await axios.put(`http://localhost:5000/regioes/${id}`, data);
    navigate("/listagemRegiao");
  };

  useEffect(() => {
    if (!!id && !loading) {
      getEstadoById(id);
    }
  }, []);

  const getEstadoById = async (brandId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/regioes/${brandId}`
      );
      if (!!response.data) {
        setValue("regioes", response.data.regioes);
      } else {
        toast("Estado não encontrada!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() =>
        toast("Ocorreu um erro ao buscar a estado. Tente novamente!")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model_box">
      <Modal.Dialog size="md">
        <Modal.Title>Cadastro de Estado</Modal.Title>

        <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group mt-3">
            <label className="label">Estado Time</label>
            <input
              type="text"
              class="form-control"
              placeholder="Regioes"
              {...register("regioes")}
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

export default EditEstado;
