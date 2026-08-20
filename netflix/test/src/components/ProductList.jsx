import { useEffect, useState } from "react";
import { productService } from "../api/productService";

export default function ProductList({ onEdit, refreshKey }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [refreshKey]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await productService.getAll();
      setProducts(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await productService.delete(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete product");
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (products.length === 0) return <p>No products yet.</p>;

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>${Number(p.price).toFixed(2)}</td>
            <td>{p.quantity}</td>
            <td>
              <button onClick={() => onEdit(p)}>Edit</button>{" "}
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}