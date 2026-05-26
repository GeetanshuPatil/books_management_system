const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="bg-white/95 rounded-2xl shadow-md p-5 border border-white/70 hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
        {book.title}
      </h3>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Author:</span> {book.author}
      </p>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Genre:</span> {book.genre}
      </p>

      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Published:</span> {book.publicationYear}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(book)}
          className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition shadow-sm"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-4 py-2 rounded-lg transition shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
