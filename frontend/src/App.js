import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importes listagem 
import MarcaList from "./components/marcas/MarcaList";
import ProductList from "./components/products/ProductList";

// Adicionar Produtos 
import AddMarcas from "./components/marcas/AddMarca";
import AddProduct from "./components/products/AddProduct";

//Corpo da minha home
import Home from "./pages/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Container>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Marca" element={<AddMarcas />} />
            <Route exact path="/Produtos" element={<AddProduct />} />
            <Route exact path="/ListagemProdutos" element={<ProductList />} />
            <Route exact path="/ListagemMarcas" element={<MarcaList />} />
            <Route exact path="/ListagemRegioes" element={<MarcaList />} />
        </Routes>
    </Container>
    <Footer />
</Router>
  );
}

export default App;
