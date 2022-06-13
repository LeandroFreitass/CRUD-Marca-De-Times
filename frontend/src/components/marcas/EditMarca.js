import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FaRegistered } from "react-icons/fa";

const validationPost = yup.object().shape({
  marca: yup.string().required("Preenchimento obrigatório").matches(/[A-Z]/, 'A primiera letra deve ser maiuscula')
});

const EditMarca = () => {
  const [marca, setMarca] = useState("");
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
    await axios.patch(`http://localhost:5000/marcas/${id}`, data);
    navigate("/listagemMarcas");
  };

  useEffect(() => {
    getMarcaById();
  }, []); 

  const getMarcaById = async () => {
    const response = await axios.get(`http://localhost:5000/marcas/${id}`);

    setMarca(response.data.marca);

  };
  return (
    <div className="model_box">
    
          <Modal.Dialog  size="md">
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
            </div><br/>
            <button style={{width: '100%', backgroundColor:'blue', color:'white', height:'40px'}}>
        Adicionar
      </button>
          </form>
    </Modal.Dialog>
    </div>
  );
};

export default EditMarca;
