import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Adicionar listagem 
import MarcaList from "./components/marcas/MarcaList";
import ProductList from "./components/products/ProductList";

// Adicionar Produtos 
import AddMarcas from "./components/marcas/AddMarca";
import AddProduct from "./components/products/AddProduct";

// Adicionar Regioa 
import AddRegiao from "./components/regiao/AddRegiao";
import RegiaoList from "./components/regiao/RegiaoList";

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
            <Route exact path="/ListagemMarcas" element={<MarcaList />} />
            <Route exact path="/ListagemRegiao" element={<RegiaoList />} />
            <Route exact path="/ListagemProdutos" element={<ProductList />} />
        </Routes>
    </Container>
    <Footer />
</Router>
  );
}

export default App;
