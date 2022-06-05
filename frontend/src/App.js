import "./App.css";
import MarcaList from "./components/marcas/MarcaList";
import AddMarcas from "./components/marcas/AddMarca";

import ProductList from "./components/products/ProductList";
import AddProduct from "./components/products/AddProduct";

import Home from "./components/Home";

import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 class="col-sm-5 offset-sm-4 mt-8 mb-4 text-gred">Cadastro de Camisetas de Time</h1>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">
            Pagina Inicial
          </Nav.Link>
          <Nav.Link as={Link} to="/marca">
            Cadastro de marca
          </Nav.Link>
          <Nav.Link as={Link} to="/produtos">
            Cadastro de Produtos
          </Nav.Link>
          <Nav.Link as={Link} to="/listagemProdutos">
            Listagem Produtos
          </Nav.Link>
          <Nav.Link as={Link} to="/listagemMarcas">
            Listagem  Marcas
          </Nav.Link>
          <Nav.Link as={Link} to="/listagemRegioes">
            Listagem  Regiões
          </Nav.Link>
        </Nav>
        {/* rotas associadas ao componente */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Marca" element={<AddMarcas />}></Route>
          <Route path="/Produtos" element={<AddProduct />}></Route>
          <Route path="/ListagemProdutos" element={<ProductList />}></Route>
          <Route path="/ListagemMarcas" element={<MarcaList />}></Route>
          <Route path="/ListagemRegioes" element={<MarcaList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
