import { useEffect, useState } from "react";
import { productService } from "../api/productService";

const emptyForm = { name: "", description: "", price: "", quantity: "", category: "" };

export default function ProductForm({ editingProduct, onSaved, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(editingProduct ? { ...editingProduct } : emptyForm);
    setErrors({});
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrors({});

    const payload = {
      ...form,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity, 10),
    };

    try {
      if (editingProduct?.id) {
        await productService.update(editingProduct.id, payload);
      } else {
        await productService.create(payload);
      }
      setForm(emptyForm);
      onSaved();
    } catch (err) {
      // Backend returns { validationErrors: { field: message } } on 400
      if (err.response?.data?.validationErrors) {
        setErrors(err.response.data.validationErrors);
      } else {
        alert(err.response?.data?.message || "Failed to save product");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18, maxWidth: 400, border: "1px solid #0a0505", borderRadius: 10, padding: 20,justifyContent:"center", margin: "20px auto"}}>
      <h3>{editingProduct ? "Edit Product" : "New Product"}</h3>

      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} required />
        {errors.name && <div style={{ color: "red", fontSize: 12 }}>{errors.name}</div>}
      </label>

      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} />
      </label>

      <label>
        Price
        <input type="number" step="0.01" name="price" value={form.price} onChange={handleChange} required />
        {errors.price && <div style={{ color: "red", fontSize: 12 }}>{errors.price}</div>}
      </label>

      <label>
        Quantity
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
        {errors.quantity && <div style={{ color: "red", fontSize: 12 }}>{errors.quantity}</div>}
      </label>

      <label>
        Category
        <input name="category" value={form.category} onChange={handleChange} />
      </label>

      <div>
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : editingProduct ? "Update" : "Create"}
        </button>
        {editingProduct && (
          <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}