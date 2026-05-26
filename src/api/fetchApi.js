import axios from "axios";

const api_url = "https://6a1434e86c7db8aac0540d0d.mockapi.io/Books";

export const getBooks = async () => {
    const response = await axios.get(api_url);
    return response.data;
};

export const addBook = async (book) =>{
    const response = await axios.post(api_url, book);
    return response.data;
};

export const updateBook = async (id, book) =>{
    const response = await axios.put(`${api_url}/${id}`, book);
    return response.data
};

export const deleteBook = async (id) => {
    await axios.delete(`${api_url}/${id}`);
};
