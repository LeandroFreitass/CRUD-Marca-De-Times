import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMarca = () => {
  const [marca, setMarca] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateMarca = async (e) => {
    e.preventDefault(); 
    await axios.patch(`http://localhost:5000/marcas/${id}`, {

      marca: marca,
     
    });
    navigate("/");
  };

  useEffect(() => {
    getMarcaById();
  }, []); 

  const getMarcaById = async () => {
    const response = await axios.get(`http://localhost:5000/marcas/${id}`);

    setMarca(response.data.marca);

  };

  return (
    <div>
      <form onSubmit={updateMarca}>
  
        <div className="field">
          <label className="label">Marca Time</label>
          <input
            class="input"
            type="text"
            placeholder="MarcaTime"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditMarca;
