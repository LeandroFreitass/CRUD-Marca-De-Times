import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTamanho = () => {
  const [tamanho, setTamanho] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTamanho();
  }, []);

  const getTamanho = async () => {
    const response = await axios.get("http://localhost:5000/tamanho");
    setTamanho(response.data);
  };

  const saveTamanho = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tamanho", {
      tamanho: tamanho,
    });
    navigate("/");
  };

  return (
    <div className="model_box">
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Cadastro de Produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="form-group" onSubmit={saveTamanho}>
            <div class="form-group mt-3">
              <label className="label">Tamanho Camisa</label>
              <input
                type="text"
                class="form-control"
                placeholder="Tamanho"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              />
            </div>
            <button class="btn btn-success mt-4">Adicionar</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AddTamanho;
