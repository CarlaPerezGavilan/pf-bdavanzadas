import React from 'react';
import {AppBar, Button, Typography, Toolbar, Avatar} from "@material-ui/core";
import useStyles from './styles';
import {Link} from 'react-router-dom';
import passport from '../../images/pass.png';

const NavBar = () => {
    const classes = useStyles();
    const user  = null;
    return(
        <AppBar className = {classes.appBar} position = "static" color = "inherit">
        <div className = {classes.brandContainer}>
            <Typography component={Link} to= "/" className={classes.heading} variant = "h2" align= "center">Your Wallet</Typography>
            <img className= {classes.image} src={passport} alt= "passport" height= "60"/>
        </div>
        <Toolbar className = {classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.imageUrl}></Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant= "contained" className= {classes.logout} color="secondary"> Log Out</Button>
                </div>
            ): (
                <Button variant= "contained" component= {Link} to = "/auth" color="primary"> Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    );
};

export default NavBar;