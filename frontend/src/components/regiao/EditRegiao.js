import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const EditMarca = () => {
  const [regioes, setRegiao] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateMarca = async (e) => {
    e.preventDefault(); 
    await axios.patch(`http://localhost:5000/regioes/${id}`, {

      regioes: regioes,
     
    });
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

        <form class="form-group" onSubmit={updateMarca}>
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

export default EditMarca;
