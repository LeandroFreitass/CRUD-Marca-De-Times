import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMarca = () => {
  const [regioes, setRegiao] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateMarca = async (e) => {
    e.preventDefault(); 
    await axios.patch(`http://localhost:5000/regioes/${id}`, {

      regioes: regioes,
     
    });
    navigate("/");
  };

  useEffect(() => {
    getRegioeById();
  }, []); 

  const getRegioeById = async () => {
    const response = await axios.get(`http://localhost:5000/regioes/${id}`);

    setRegiao(response.data.regioes);

  };

  return (
    <div>
      <form onSubmit={updateMarca}>
  
        <div className="field">
          <label className="label">Estado Time</label>
          <input
            class="input"
            type="text"
            placeholder="RegiaoTime"
            value={regioes}
            onChange={(e) => setRegiao(e.target.value)}
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
