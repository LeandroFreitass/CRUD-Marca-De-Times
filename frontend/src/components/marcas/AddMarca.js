import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMarca = () => {
  const [marca, setMarca] = useState("");
  const [tamanho, setTamanho] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMarcas();
  }, []);

  const getMarcas = async () => {
    const response = await axios.get("http://localhost:5000/marcas");
    setMarca(response.data);
  };

  const saveMarca = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/marcas", {
      marca: marca,
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
          <form class="form-group" onSubmit={saveMarca}>
            <div class="form-group mt-3">
              <label className="label">Marca Time</label>
              <input
                type="text"
                class="form-control"
                placeholder="RegiaoTime"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label className="label">Tamanho Camisa</label>
              <input
                type="text"
                class="form-control"
                placeholder="RegiaoTime"
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
export default AddMarca;
