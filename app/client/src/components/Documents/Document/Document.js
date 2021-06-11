import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import {deleteDoc} from '../../../actions/documents';
import useStyles from './styles';

const Document = ({document,setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
            <Card className={classes.card}>
                <CardMedia className ={classes.media} image={document.selectedFile} title={document.title}/>
                <div className={classes.overlay}>
                    <Typography variant = "h6">{document.title}</Typography>
                    <Typography variant = "body2">This documents willl expire: {document.expirationDate}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:'grey'}} 
                    size="small" 
                    onClick={()=>setCurrentId(document._id)}>
                        <MoreHorizIcon fontSize="default"/>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{document.notificationDate}</Typography>
                </div>
                <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{document.description}</Typography>
                </CardContent>
                <CardActions className ={classes.cardActions}> 
                    <Button size="small" color="primary" onClick={()=> {}}>
                        <CheckIcon fontSize="small"/>
                        Remind to renew in {document.days_to_notify} days
                    </Button>
                    <Button size="small" color="primary" onClick={() => dispatch(deleteDoc(document._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                </CardActions>
            </Card>
       );
}

export default Document;