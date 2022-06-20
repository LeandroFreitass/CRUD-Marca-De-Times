import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const validationPost = yup.object().shape({
  tamanho: yup.string().required("Preenchimento obrigatório")
});

const EditTamanho = () => {
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
    await axios.put(`http://localhost:5000/tamanhos/${id}`, data);
    navigate("/listagemTamanhos");
  };

  useEffect(() => {
    if (!!id && !loading) {
      getTamanhoById(id);
    }
  }, []);

  const getTamanhoById = async (brandId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/tamanhos/${brandId}`
      );
      if (!!response.data) {
        setValue("tamanho", response.data.tamanho);
      } else {
        toast("Tamanho não encontrada!");
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
    
          <Modal.Dialog  size="md">
          <Modal.Title>Cadastro de Tamanhos</Modal.Title>
          <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mt-3">
              <label className="label">Tamanho camiseta Time</label>
              <input
                type="text"
                class="form-control"
                placeholder="Tamanhos"
                {...register("tamanho")}
              />
              <p className="error-message">{errors.tamanho?.message}</p>
            </div><br/>
            <button style={{width: '100%', backgroundColor:'blue', color:'white', height:'40px'}}>
        Adicionar
      </button>
          </form>
          <ToastContainer />
    </Modal.Dialog>
    </div>
  );
};

export default EditTamanho;
