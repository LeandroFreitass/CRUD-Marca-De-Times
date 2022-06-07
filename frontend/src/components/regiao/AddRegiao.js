import { Modal, Button } from "react-bootstrap";
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
      <Modal.Dialog size="md">
        <Modal.Title>Cadastro de Estado</Modal.Title>

        <form class="form-group" onSubmit={saveRegiao}>
          <div class="form-group mt-3">
            <label className="label">Estado Time</label>
            <input
              type="text"
              class="form-control"
              placeholder="Regioes"
              value={regioes}
              onChange={(e) => setRegiao(e.target.value)}
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
export default AddMarca;
