import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductList from "./components/ProductList";
// import AddProduct from "./components/AddProduct";
// import EditProduct from "./components/EditProduct";

// import MarcaList from "./components/marcas/MarcaList";
// import EditMarca from "./components/marcas/EditMarca";
// import AddMarca from "./components/marcas/AddMarca";


import MarcaList from "./components/tamanhos/TamanhoList";
import EditMarca from "./components/tamanhos/EditMarca";
import AddMarca from "./components/tamanhos/AddTamanho";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Routes>
          {/* <Route exact path="/" element={<ProductList/>} >
          </Route>
          <Route path="/add" element={ <AddProduct />} >
          </Route>
          <Route path="/edit:id" element={ <EditProduct />} >
          </Route> */}

          {/* <Route exact path="/" element={<MarcaList/>} >
          </Route>
          <Route path="/add" element={ <AddMarca />} >
          </Route>
          <Route path="/edit:id" element={ <EditMarca />} >
          </Route> */}

          <Route exact path="/" element={<MarcaList/>} >
          </Route>
          <Route path="/add" element={ <AddMarca />} >
          </Route>
          <Route path="/edit:id" element={ <EditMarca />} >
          </Route>
        </Routes>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
