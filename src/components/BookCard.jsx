const BookCard = ({ book, onEdit, onDelete }) => {




  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Author:</span> {book.author}
      </p>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Genre:</span> {book.genre}
      </p>

      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Published:</span>{" "}
        {book.publicationYear}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(book)}
          className="bg-blue-700 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
