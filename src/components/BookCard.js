import React from "react";

function BookCard({ book, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <img src={book.cover} alt={book.title} className="w-full h-72 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-12">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">${book.price.toFixed(2)}</p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 mt-auto active:scale-95"
          onClick={() => onAddToCart(book)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;