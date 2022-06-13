import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  regioes: yup.string().required("Preenchimento obrigatório").matches(/[A-Z]/, 'A primiera letra deve ser maiuscula')
});

const EditEstado = () => {
  const [regioes, setRegiao] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });


  const onSubmit = async (data) => {
    await axios.patch(`http://localhost:5000/regioes/${id}`, data);
    navigate("/listagemRegiao");
  };

  useEffect(() => {
    getRegioeById();
  }, []); 

  const getRegioeById = async () => {
    const response = await axios.get(`http://localhost:5000/regioes/${id}`);

    setRegiao(response.data.regioes);

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
      </Modal.Dialog>
    </div>
  );
};

export default EditEstado;
