import React from 'react';
import {useSelector} from 'react-redux';
import Document from './Document/Document';
import useStyles from './styles';
import {Grid, CircularProgress } from "@material-ui/core";

const Documents = ({setCurrentId}) => {
    const documents = useSelector((state)=> state.documents);
    const classes = useStyles();
    console.log(documents);
    return (
        !documents.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {documents.map((document) =>(
                      <Grid key={document._id} item xs={12} sm={6}>
                         <Document document={document} setCurrentId={setCurrentId}/>
                      </Grid>
                ))}
                
            </Grid>
    ));
}

export default Documents;