import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMarca = () => {
  const [marca, setMarca] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmitUpdate = async (e) => {
    e.preventDefault(); 
    await axios.patch(`http://localhost:5000/marcas/${id}`, {

      marca: marca,
     
    });
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
          <form class="form-group" onSubmit={onSubmitUpdate}>
            <div class="form-group mt-3">
              <label className="label">Marca Time</label>
              <input
                type="text"
                class="form-control"
                placeholder="Marcas"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
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
