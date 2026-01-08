import { productosCargados } from "/src/productCargados.jsx";

export const Filtro = ({ searchTerm }) => { 
  const productosFiltrados = productosCargados.filter((p) => {
    const busqueda = searchTerm.toLowerCase();
    return (
      p.nombre.toLowerCase().includes(busqueda) || 
      p.categoria.toLowerCase().includes(busqueda)
    );
  });

  return (
    <div className="productos-container">
      {productosFiltrados.map((p) => (
        <div key={p.id} className="producto-card">
          <h3>{p.nombre}</h3>
          <p>{p.categoria}</p>
        </div>
      ))}
    </div>
  );
};