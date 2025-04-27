import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">EcoVentas Express</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/usuarios" className="p-4 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">Usuarios</Link>
        <Link to="/clientes" className="p-4 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">Clientes</Link>
        <Link to="/productos" className="p-4 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600">Productos</Link>
        <Link to="/ventas" className="p-4 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600">Ventas</Link>
        <Link to="/ingresos" className="p-4 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600">Ingresos</Link>
        <Link to="/egresos" className="p-4 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600">Egresos</Link>
        <Link to="/facturas" className="p-4 bg-red-500 text-white rounded-xl shadow hover:bg-red-600">Facturas</Link>
      </div>
    </div>
  );
}
