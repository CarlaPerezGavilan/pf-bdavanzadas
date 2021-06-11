import React , {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import Documents  from '../Documents/Documents';
import Form from '../Form/Form';
import {useDispatch} from 'react-redux'; 
import { getDocuments } from '../../actions/documents';
import useStyles from '../../styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(getDocuments()); 
    }, [currentId, dispatch]);  
    return(
      
        <Grow in>
            <Container>
                <Grid container justify= "space-between" alignItems="stretch" spacing ={3}>
                    <Grid item xs = {12} sm={7}>
                        <Documents setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs = {12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;