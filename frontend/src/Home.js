import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MarcaList from "./components/marcas/MarcaList";

import ProductList from "./components/products/ProductList";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";


function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Routes>
          <Route exact path="/" element={<ProductList/>} >
          </Route>
          <Route path="/add" element={ <AddProduct />} >
          </Route>
          <Route path="/edit:id" element={ <EditProduct />} >
          </Route>
          <Route exact path="/marcas" element={<MarcaList/>} >
          </Route>
        </Routes>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
