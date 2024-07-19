import React from 'react';
import Image1 from '../assets/Image1.jpg';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to the AVANISTORE Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example Product */}
        <div className="border p-4 rounded-lg shadow">
          <img src={Image1} alt="Product Name" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-bold mb-2">JAGGERY</h2>
          <p className="text-gray-700 mb-2">$10.00</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
}

export default Home;
