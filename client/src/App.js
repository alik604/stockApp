<<<<<<< HEAD
import React from 'react';
import {Button} from 'reactstrap';
import AppBar from './components/AppBar';
import Arepeater from './components/Arepeater';
import AwatchList from './components/AwatchList';


// import Achart from './components/Achart';
// import Acard from './components/Acard';

export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allDataWatchList: []
        }
    }

    componentDidMount() {


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
// APP -> REPEATER -> CONTENT PANE -> CHART & CARD
// <Button variant="contained" color="primary">btn via reactstrap</Button>

        //  <button className="btn btn-danger float-right">Example Button floated right</button>
        return (

            <div>

                <AppBar/>


                <AwatchList/>

                <Arepeater/>


                <Button variant="fab" color="primary" style={style}> add icon to floating action btn* </Button>


            </div>
        );

    }
=======
import React from 'react';
import {Button} from 'reactstrap';
import AppBar from './components/AppBar';
import Arepeater from './components/Arepeater';
import AwatchList from './components/AwatchList';


// import Achart from './components/Achart';
// import Acard from './components/Acard';

export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allDataWatchList: []
        }
    }

    componentDidMount() {


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
// APP -> REPEATER -> CONTENT PANE -> CHART & CARD
// <Button variant="contained" color="primary">btn via reactstrap</Button>

        //  <button className="btn btn-danger float-right">Example Button floated right</button>
        return (

            <div>

                <AppBar/>


                <AwatchList/>

                <Arepeater/>


                <Button variant="fab" color="primary" style={style}> add icon to floating action btn* </Button>


            </div>
        );

    }
>>>>>>> master
}