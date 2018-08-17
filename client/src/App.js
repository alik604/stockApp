<<<<<<< HEAD
import React from 'react';
//import axios from 'axios';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from './components/AppBar';

// import Achart from './components/Achart';
// import Acard from './components/Acard';

import Arepeater from './components/Arepeater';
import AContentPane from './components/AContentPane';

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

                <AContentPane/>


                <Button variant="fab" color="primary" icon='home' style={style}> </Button>

                <Arepeater/>
            </div>
        );

    }
}

=======
import React from 'react';
//import axios from 'axios';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
//import AListing from './components/AListing';
import AppBar from './components/AppBar';
import Achart from './components/Achart';
import Acard from './components/Acard';

export default class PersonList extends React.Component {

    constructor() {

        super();
        this.state = {}

    }


    // componentWillMount() {
    //     var data = this.getChartData();
    //
    //     this.setState({chartData: data});
    //
    // }


    /*
        componentDidMount() {
            //  axios.get(`https://jsonplaceholder.typicode.com/users`)

            axios.get('http://localhost:3001/') //hearder not needed
                .then(res => {
                    const chartData = res.data;
                    console.log(chartData);

                    //this.setState({chartData});

                }).catch(e => console.log(e))
            this.setState({
                chartData: {
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets: [
                        {
                            label: 'Population',
                            data: [
                                617594,
                                181045,
                                153060,
                                106519,
                                105162,
                                95072
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ]
                        }
                    ]
                }
            });
        }
    */
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

                <Acard/>

                <Achart/>
                <Button variant="fab" color="primary" icon='home' style={style}> </Button>
            </div>
        );

    }
}

>>>>>>> 4c7cf1752c48124e48a5fb61c6fefdbbb8566c51
