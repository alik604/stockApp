import React from 'react';
//import axios from 'axios';
import {Button} from 'reactstrap';
import AppBar from './components/AppBar';
import AContentPane from './components/AContentPane';


// import Achart from './components/Achart';
// import Acard from './components/Acard';

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

// <Button variant="contained" color="primary">btn via reactstrap</Button>
        // <Arepeater/>
        return (

            <div>
                <AppBar/>

                <AContentPane/>

                <AContentPane/>


                <Button variant="fab" color="primary" style={style}> addIcon* </Button>

                <button className="btn btn-danger float-right">Example Button floated right</button>
            </div>
        );

    }
}

