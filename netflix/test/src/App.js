import React, { useState } from "react";

// import logo from './logo.svg';
import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NetflixIndexComponent from './components/NetflixIndexComponent';
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./style/index.css";

function App() {

  const [editingProduct, setEditingProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSaved = () => {
    setEditingProduct(null);
    setRefreshKey((k) => k + 1); // triggers ProductList to refetch
  };

  return (

    <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "sans-serif", justifyContent: "center" }}>
      <h1>Product Manager</h1>

      <ProductForm
        editingProduct={editingProduct}
        onSaved={handleSaved}
        onCancel={() => setEditingProduct(null)}
      />

      <hr style={{ margin: "24px 0" }} />

      <ProductList onEdit={setEditingProduct} refreshKey={refreshKey} />
    </div>

    // <div className="App">

    //   <NetflixIndexComponent />
      
    // </div>
  );
}

export default App;
