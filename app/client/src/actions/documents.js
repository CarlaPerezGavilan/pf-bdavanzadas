import * as api from '../api';

export const getDocuments = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDocuments();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createDoc = (document) => async (dispatch) => {
    try {
        const { data } = await api.createDoc(document);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log("hubo un error");
    }
}

export const updateDoc = (id, document) => async (dispatch) => {
    try {
      const {data}=  await api.updateDoc(id, document); 
      dispatch({type: 'UPDATE', payload: data});
    } catch (error) {  
        console.log(error);
        
    }
}

export const deleteDoc = (id) => async (dispatch) => {
    try {
        await api.deleteDoc(id); 
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error.message);

    }
}