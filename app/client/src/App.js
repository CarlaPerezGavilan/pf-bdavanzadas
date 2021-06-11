import React from 'react';
import {Container} from '@material-ui/core';

import useStyles from './styles';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
        <Container maxwidth="lg">
        <NavBar/>
        <Switch>
            <Route path ="/" exact component = {Home}></Route>
        </Switch>
        </Container>
        </BrowserRouter>
    );
}

export default App;