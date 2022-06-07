import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMarca = () => {
  const [nametime, setNametime] = useState("");
  const [marca, setMarca] = useState("");
  const [regioatime, setRegioatime] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault(); //agar page tidak reload
    await axios.patch(`http://localhost:5000/products/${id}`, {
      nametime: nametime,
      marca: marca,
      regioatime: regioatime,
      tamanho: tamanho,
      quantidade: quantidade,
      price: price,
    });
    navigate("/");
  };

  useEffect(() => {
    getProductById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setNametime(response.data.nametime);
    setMarca(response.data.marca);
    setRegioatime(response.data.regioatime);
    setTamanho(response.data.tamanho);
    setQuantidade(response.data.quantidade);
    setPrice(response.data.price);
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Nome Time</label>
          <input
            class="input"
            type="text"
            placeholder="NomeTime"
            value={nametime}
            onChange={(e) => setNametime(e.target.value)}
          />
        </div>

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
          <label className="label">Região Time</label>
          <input
            class="input"
            type="text"
            placeholder="RegiaoTime"
            value={regioatime}
            onChange={(e) => setRegioatime(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Tamanho Camisa</label>
          <input
            class="input"
            type="text"
            placeholder="TamanhoCamisa"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Preço</label>
          <input
            class="input"
            type="text"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Quantidade</label>
          <input
            class="input"
            type="text"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
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
