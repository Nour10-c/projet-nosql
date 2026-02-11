import { useEffect, useState } from "react";
import { api } from "../api";


export default function ProductList() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
const fetchProducts = async () => {
try {
const res = await api.get("/products");
setProducts(res.data);
} catch (err) {
console.error("Erreur API", err);
} finally {
setLoading(false);
}
};


fetchProducts();
}, []);


if (loading) return <h2>Chargement...</h2>;
return (
<div style={{ padding: 20 }}>
<h1>🛒 Liste des Produits</h1>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
{products.map((p) => (
<div key={p._id} style={{ border: "1px solid #ddd", padding: 15, borderRadius: 10 }}>
<h3>{p.name}</h3>
<p>💰 {p.price} €</p>
<p>{p.description}</p>
<p>📦 Stock: {p.stock}</p>
</div>
))}
</div>
</div>
);
}


