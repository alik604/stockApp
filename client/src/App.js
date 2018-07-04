import React from 'react';
import axios from 'axios';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AListing from './components/AListing';
import AppBar from './components/AppBar';
import Achart from './components/Achart';

export default class PersonList extends React.Component {

    constructor() {

        super();
        this.state = {
            chartData: {}
        }

    }


    componentWillMount() {
        this.getChartData();
    }


    getChartData() {
        var chartData = "error";
        var stringArryOfDates = [];
        var stringArryOfPrices = [];

        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {
                //
                for (var i = 0; i < chartData.length; i++) {
                    stringArryOfDates[i] = chartData[0].date;
                    stringArryOfPrices[i] = chartData[0].close
                }
                console.log(stringArryOfPrices);
            });
        //

        this.setState({
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: false,
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(125, 255, 132, 0.6)'
                        ]
                    }
                ]
            }
        });


    }


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
        //alt https://reactstrap.github.io/components/navbar/

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

                <AListing/>

                <Achart chartData={this.state.chartData}/>

            </div>
        );

    }
}

