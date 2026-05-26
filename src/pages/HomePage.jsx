import { useEffect, useState } from "react";
import { addBook, deleteBook, getBooks, updateBook } from "../api/fetchApi";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import Loader from "../components/Loader";
import SearchFilter from "../components/SearchFilter";
import { useDebounce } from "../hooks/useDebounce";
import Footer from "../components/Footer";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebounce(searchInput, 700);

  const isSearching = searchInput != debouncedSearchInput;

  const [genreFilter, setGenreFilter] = useState("All");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (bookData) => {
    try {
      setError("");

      if (editingBook) {
        const updatedBook = await updateBook(editingBook.id, bookData);

        setBooks(
          books.map((book) => (book.id === editingBook.id ? updatedBook : book))
        );

        setEditingBook(null);
      } else {
        const newBook = await addBook(bookData);
        setBooks([...books, newBook]);
      }
    } catch (err) {
      setError("Something went wrong while saving the book.");
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {
      setError("");

      await deleteBook(id);

      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      setError("Failed to delete book. Please try again.");
    }
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const genres = [...new Set(books.map((book) => book.genre).filter(Boolean))];

  const filteredBooks = books.filter((book) => {
    const searchText = debouncedSearchInput.toLowerCase().trim();

    const title = book.title?.toLowerCase() || "";
    const author = book.author?.toLowerCase() || "";
    const genre = book.genre || "";

    const matchesSearch =
      title.includes(searchText) || author.includes(searchText);

    const matchesGenre = genreFilter === "All" || genre === genreFilter;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 flex flex-col">
      <header className="bg-gradient-to-r from-purple-700 via-blue-700 to-purple-700 text-white py-6 shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          Books Management System
        </h1>
        <p className="text-center mt-3 text-blue-100 text-sm md:text-base">
          Add, update, delete, search and filter books
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <BookForm
          onSubmit={handleSubmit}
          editingBook={editingBook}
          onCancelEdit={handleCancelEdit}
        />

        <SearchFilter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          genres={genres}
        />

        {isSearching && (
          <p className="text-sm text-gray-500 mb-4">Searching...</p>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <Loader />
        ) : filteredBooks.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/60">
            <p className="text-gray-600 text-lg">No books found.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
