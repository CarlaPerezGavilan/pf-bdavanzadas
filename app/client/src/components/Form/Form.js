import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updateDoc, createDoc } from '../../actions/documents';
 
const Form = ({currentId, setCurrentId}) => {
    const [docData, setDocData] = useState({
        title : '',
        description: '', 
        selectedFile: '',
        days_to_notify: 0, 
        expirationDate: "", 
        notificationDate: ""
    }); 
    const document = useSelector((state)=> currentId ? state.documents.find((d)=>d._id === currentId ): null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=> {
        if(document) setDocData(document)
    }, [document]);

    const clear = () => {
        setCurrentId(0);
        setDocData({ title : '',
        description: '', 
        selectedFile: '',
        days_to_notify: 0, 
        expirationDate: "", 
        notificationDate: ""});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId === 0){
            dispatch(createDoc(docData));
        }else{
            dispatch(updateDoc(currentId, docData));
        }
        clear();

    }

  
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant = "h6"> {currentId ? 'Editing': 'Creating'} a Document </Typography>
            <TextField
            name = "title"
            variant = "outlined"
            label = "Title" fullWidth 
            value = {docData.title}
            onChange = {(e) => setDocData({...docData, title: e.target.value})} />
            <TextField
            name = "description"
            variant = "outlined"
            label = "Description" fullWidth 
            value = {docData.description}
            onChange = {(e) => setDocData({...docData, description: e.target.value})} />
            <TextField
            name = "days_to_notify"
            variant = "outlined"
            label = "Days to Notify" fullWidth 
            value = {docData.days_to_notify}
            onChange = {(e) => setDocData({...docData, days_to_notify: e.target.value})} />
                <TextField
            name = "notificationDate"
            variant = "outlined"
            label = "notificationDate" fullWidth 
            value = {docData.notificationDate}
            onChange = {(e) => setDocData({...docData, notificationDate: e.target.value})} />
     <TextField
            name = "expirationDate"
            variant = "outlined"
            label = "expirationDate" fullWidth 
            value = {docData.expirationDate}
            onChange = {(e) => setDocData({...docData, expirationDate: e.target.value})} />
            <div className = {classes.fileInput}>
                <FileBase
                type= "file"
                multiple={false}
                onDone = {({base64})=> setDocData({...docData, selectedFile:base64})}
                />
            </div>
            <Button className = {classes.buttonSubmit}  variant = "contained" size="large" type="submit" fullWidth>Submit</Button>
            <Button color="primary" variant = "contained" size="small" onClick= {clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;