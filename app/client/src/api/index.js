import axios from 'axios';

const url = 'http://localhost:5000/documents';

export const fetchDocuments = () => axios.get(url);
export const createDoc = (newDoc) => axios.post(url, newDoc);
export const updateDoc = (id, updateDoc) => axios.patch(`${url}/${id}`, updateDoc);
export const deleteDoc = (id) => axios.delete(`${url}/${id}`);

