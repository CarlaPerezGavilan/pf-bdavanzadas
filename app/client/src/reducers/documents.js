
export default (documents = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL': 
            return action.payload; 
        case 'CREATE': 
            return [...documents, action.payload]; 
        case 'UPDATE': 
            return documents.map((doc) => doc._id === action.payload._id ? action.payload: doc);
        case 'DELETE': 
            return documents.filter((doc)=> doc._id !== action.payload);
        default: 
            return documents;
    }
}