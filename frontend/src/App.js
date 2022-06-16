import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Adicionar listagem 
import MarcaList from "./components/marcas/MarcaList";
import ProductList from "./components/products/ProductList";
import RegiaoList from "./components/regiao/RegiaoList";
import TamanhoList from "./components/tamanhos/TamanhoList";

// Adicionar Produtos 
import AddMarcas from "./components/marcas/AddMarca";
import AddProduct from "./components/products/AddProduct";
import AddRegiao from "./components/regiao/AddRegiao";
import AddTamanho from "./components/tamanhos/AddTamanho";

// Editar
import EditProduct from "./components/products/EditProduct";
import EditMarca from "./components/marcas/EditMarca";
import EditRegiao from "./components/regiao/EditRegiao";
import EditTamanho from "./components/tamanhos/EditTamanho";

//Corpo da minha home
import Home from "./pages/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  return (
    <Router>
    <Header />
    <Container>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Marca" element={<AddMarcas />} />
            <Route exact path="/Regioe" element={<AddRegiao />} />
            <Route exact path="/Produtos" element={<AddProduct />} />
            <Route exact path="/Tamanhos" element={<AddTamanho />} />
            <Route exact path="/ListagemMarcas" element={<MarcaList />} />
            <Route exact path="/ListagemRegiao" element={<RegiaoList />} />
            <Route exact path="/ListagemProdutos" element={<ProductList />} />
            <Route exact path="/ListagemTamanhos" element={<TamanhoList />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/editMa/:id" element={<EditMarca />} />
            <Route path="/editRe/:id" element={<EditRegiao />} />
            <Route path="/editTa/:id" element={<EditTamanho />} />

        </Routes>
    </Container>
    <Footer />
</Router>
  );
}

export default App;
