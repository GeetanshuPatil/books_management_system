import { useEffect, useState } from "react";

const BookForm = ({ onSubmit, editingBook, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title,
        author: editingBook.author,
        genre: editingBook.genre,
        publicationYear: editingBook.publicationYear,
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.genre ||
      !formData.publicationYear
    ) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({
      ...formData,
      publicationYear: Number(formData.publicationYear),
    });

    setFormData({
      title: "",
      author: "",
      genre: "",
      publicationYear: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">
        {editingBook ? "Update Book" : "Add New Book"}
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="publicationYear"
          placeholder="Publication Year"
          value={formData.publicationYear}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="md:col-span-2 flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            {editingBook ? "Update Book" : "Add Book"}
          </button>

          {editingBook && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;