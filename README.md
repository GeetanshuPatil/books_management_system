# Book Management System

A React-based Book Management System that allows users to view, add, update, delete, search, and filter books using API integration.

## Live Demo

https://books-management-system-omega.vercel.app/

## Features

- View a list of books
- Add new books
- Update existing book details
- Delete books
- Search books by title or author
- Filter books by genre
- Debounced search functionality
- Loading state while fetching data
- Basic error handling for API operations
- Responsive and modern UI
- Hosted API integration using MockAPI
- Deployed on Vercel

## Tech Stack

- React.js
- Vite
- JavaScript
- Tailwind CSS
- Axios
- MockAPI
- React Icons
- Vercel

## API

This project uses MockAPI for performing CRUD operations.

## Project Structure

```txt
src/
├── api/
│   └── fetchApi.js
│
├── components/
│   ├── BookCard.jsx
│   ├── BookForm.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   └── SearchFilter.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   └── HomePage.jsx
│
├── App.jsx
├── main.jsx
└── index.css


## Author

Geetanshu Patil