const SearchFilter = ({
  searchInput,
  setSearchInput,
  genreFilter,
  setGenreFilter,
  genres,
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-5 mb-8 grid md:grid-cols-2 gap-4 border border-white/60">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
      />

      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
      >
        <option value="All">All Genres</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
