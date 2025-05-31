import React, { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

interface MenuItem {
  id: number; // agregado id único
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'sides' | 'main' | 'specials';
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Porción de Arroz",
      description: "Arroz blanco cocido",
      price: 10,
      image: "https://www.elespectador.com/resizer/v2/VBZZABUOMNHULGH7MX7W6AZKMI.jpg?auth=8229c91f4713b295cf50038567d95797bc8b7741bbf6b914e2366227715515b8&width=920&height=613&smart=true&quality=70",
      category: 'sides'
    },
    {
      id: 2,
      name: "Porción de Papas Fritas",
      description: "Papas fritas crujientes",
      price: 10,
      image: "https://www.meshi.cl/wp-content/uploads/2024/10/el-truco-definitivo-para-que-las-patatas-fritas-te-queden-mas-crujientes.jpg",
      category: 'sides'
    },
    {
      id: 3,
      name: "Porción de Plátano",
      description: "Plátano frito",
      price: 10,
      image: "https://comedera.com/wp-content/uploads/sites/9/2022/05/tajadas.jpg?w=4096",
      category: 'sides'
    },
    {
      id: 4,
      name: "Milanesa de Carne/Pollo",
      description: "Papas Fritas - Arroz - Plátano",
      price: 40,
      image: "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/milanesa-con-rajas-y-pur%C3%A9/Milanesas%201260x700.jpg",
      category: 'main'
    },
    {
      id: 5,
      name: "Milanesa Napolitana",
      description: "Queso - Jamón - Papas Fritas - Arroz - Plátano",
      price: 40,
      image: "https://resizer.glanacion.com/resizer/v2/milanesa-a-la-napolitana-con-guarnicion-de-papas-VLWFAANIWBGPFO4CSUHS7RYVVQ.jpg?auth=335fda04cf2733e39d11ca0ba979c1d0a8a55e6cdec15e4d5b00cfd59fbf9ed8&width=1200&height=800&quality=70&smart=true",
      category: 'main'
    },
    {
      id: 6,
      name: "Milanesa Parmesana",
      description: "Queso - Choclo - Papas Fritas - Arroz - Plátano",
      price: 40,
      image: "https://tofuu.getjusto.com/orioneat-local/resized2/Cup8HEqKWv5feLB49-2400-x.webp",
      category: 'main'
    },
    {
      id: 7,
      name: "Bife",
      description: "Carne - Huevo - Ensalada - Papas Fritas - Arroz - Plátano",
      price: 35,
      image: "https://img.freepik.com/fotos-premium/plato-tradicional-brasileno-filete-caballo-filete-huevo-servido-arroz-papas-fritas_317111-1583.jpg",
      category: 'specials'
    },
    {
      id: 8,
      name: "Salchipapa",
      description: "Salchicha - Papas Fritas - Choclo - Plátano",
      price: 20,
      image: "https://comedera.com/wp-content/uploads/sites/9/2021/07/salchipapas.jpg",
      category: 'specials'
    },
    {
      id: 9,
      name: "Salchipollo",
      description: "Salchicha - Papas Fritas - Choclo - Plátano - Huevo - Pollo",
      price: 25,
      image: "https://sumerlabs.com/default/image-tool-lambda?new-width=700&new-height=700&new-quality=80&url-image=https%3A%2F%2Fsumerlabs.com%2Fsumer-app-90b8f.appspot.com%2Fproduct_photos%252Fe29b9614cd1a5a5799bb84cf85cff604%252F5bbffab0-6ea9-11ed-889f-5f870d5b57d9%3Falt%3Dmedia%26token%3D90d44572-e7ca-4df2-93e3-3fa9ceea8adf",
      category: 'specials'
    },
    {
      id: 10,
      name: "Pechuga a la Plancha",
      description: "Pollo - Ensalada - Arroz - Papa Frita - Plátano",
      price: 35,
      image: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/grilled-chicken-with-rosemary.jpg",
      category: 'main'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black py-8 text-center relative">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">RESTO-BAR R&M6 2.0</h1>
        <div className="w-48 h-2 bg-yellow-400 mx-auto rounded-full"></div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === 'all' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-800 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setSelectedCategory('sides')}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === 'sides' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-800 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            Porciones
          </button>
          <button 
            onClick={() => setSelectedCategory('main')}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === 'main' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-800 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            Platos Principales
          </button>
          <button 
            onClick={() => setSelectedCategory('specials')}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === 'specials' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-800 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            Especiales
          </button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}  // uso id único
              className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl border-2 border-yellow-400"
            >
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-2 rounded-bl-lg font-bold">
                  Bs. {item.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sauces Section */}
      <div className="bg-gray-900 py-8 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">SALSAS</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p>Salsa Verde</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-2"></div>
              <p>Salsa Picante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-2"></div>
              <p>Salsa BBQ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">¡HAZ TU PEDIDO YA!</h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <Phone className="text-yellow-400" />
              <p className="text-2xl">71009246</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <MapPin className="text-yellow-400" />
              <p>YAPACANI B/ BARRIO JARDIN DEL AMBORO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
