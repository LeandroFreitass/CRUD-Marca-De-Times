import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddMarca = () => {
  const [marca, setMarca] = useState("");


  const navigate = useNavigate();

  const saveMarca = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/marcas", {
      marca: marca,
    });
    navigate("/listagemMarcas");
  };

  return (
    <div className="model_box">
    
          <Modal.Title>Cadastro de Produtos</Modal.Title>
    
          <form class="form-group" onSubmit={saveMarca}>
            <div class="form-group mt-3">
              <label className="label">Marca Time</label>
              <input
                type="text"
                class="form-control"
                placeholder="Marcas"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            <button class="btn btn-success mt-4">Adicionar</button>
          </form>
    </div>
  );
};
export default AddMarca;
