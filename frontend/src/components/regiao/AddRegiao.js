import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddMarca = () => {
  const [regioes, setRegiao] = useState("");


  const navigate = useNavigate();

  const saveRegiao = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/regioes", {
      regioes: regioes,
    });
    navigate("/listagemRegiao");
  };

  return (
    <div className="model_box">
    
          <Modal.Title>Cadastro de Regioes</Modal.Title>
    
          <form class="form-group" onSubmit={saveRegiao}>
            <div class="form-group mt-3">
              <label className="label">Marca Regioes</label>
              <input
                type="text"
                class="form-control"
                placeholder="Regioes"
                value={regioes}
                onChange={(e) => setRegiao(e.target.value)}
              />
            </div>
            <button class="btn btn-success mt-4">Adicionar</button>
          </form>
    </div>
  );
};
export default AddMarca;
