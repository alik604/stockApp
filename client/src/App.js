import React from 'react';
//import axios from 'axios';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from './components/AppBar';

// import Achart from './components/Achart';
// import Acard from './components/Acard';

import Arepeater from './components/Arepeater';
import AComtentPane from './components/AContentPane';

export default class PersonList extends React.Component {

    constructor() {

        super();
        this.state = {}

    }


    render() {
        //alt nav bar  https://reactstrap.github.io/components/navbar/
        // TODO --------------------------------------
        //FAB https://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float
        const style = {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        };
        //    <AListing/>
        return (
            <div>
                <AppBar/>
                <h1>Welcome to stock app!</h1>


                <Button variant="contained" color="primary">
                    btn via mat
                </Button>
                <Button color="primary">
                    reg btn via mat
                </Button>
                <button className="btn btn-danger float-right">Example Button floated right</button>

                <AComtentPane/>


                <Button variant="fab" color="primary" icon='home' style={style}> </Button>

                <Arepeater/>
            </div>
        );

    }
}

