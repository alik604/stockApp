import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Button, ButtonGroup, ButtonToolbar, Badge} from 'reactstrap';


import './Achart.css';

class Achart extends Component {

    constructor() {
        super();

        this.state = {
            chartDataOBJ: []
        };


    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
        stock: 'XYZ'
    }

    componentDidMount() {

        var data = this.getChartData();
        console.log(data);
        data = this.modData(data);
        console.log(data);

        this.setState({chartDataOBJ: data});

        // fetch('Http://localhost:3001/MSFT')
        //     .then(res => res.json())
        //     .then(stocks => this.setState({stocks},
        //         () => console.log('stocks fetched', stocks)));
    }

    modData(dataOBJ) {
        var chartData = "error"; //TODO
        var stringArryOfDates = [];
        var stringArryOfPrices = [];

        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {  //chartData is the returned OBJ. contais all the shit
                // console.log(chartData)
                for (var i = 0; i < chartData.length; i++) {// TODO fix this shit with a map
                    stringArryOfDates[i] = '' + chartData[i].date;
                    stringArryOfPrices[i] = chartData[i].close
                }
                //   console.log(stringArryOfPrices); //first message
            });
        //

        //dataOBJ.labels = stringArryOfDates;
        // dataOBJ.datasets[0].data = stringArryOfPrices;
        return dataOBJ;
    }

    getChartData() {
        return {
            labels: ['mcDicks', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets: [
                {
                    label: false,
                    data:
                        [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ]
                    ,
                    backgroundColor: [
                        'rgba(125, 255, 132, 0.6)'
                    ]
                }
            ]
        };
    }

    render() {

        /*
data view
    card
        https://v0.material-ui.com/#/components/card
            XOR
        http://react-toolbox.io/#/components/card
    list
        https://material-ui.com/demos/lists/
                https://codesandbox.io/s/9z2x527y6r
        https://v0.material-ui.com/#/components/divider
            https://v0.material-ui.com/#/components/paper

            card with images of company
        for more info
        http://reactstrap.github.io/components/collapse/
         */

        //btn group https://reactstrap.github.io/components/button-group/
        //TODO convert to radio buttons http://reactstrap.github.io/components/buttons/
        if (this.state.chartDataOBJ.length == 0) {
            // console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }
        // console.log("here!!");
        // console.log(this.state.chartDataOBJ);
        return (


            <div className="wrapper ">
                <div>
                    <h1>Heading <Badge color="primary">XYZ</Badge></h1>
                </div>

                <div className="left">
                    <div className="btn-group-vertical">
                        <ButtonToolbar>
                            <ButtonGroup className='buttonGroupLeft' size="sm">
                                <Button>1 week</Button>
                                <Button>1 month</Button>
                                <Button>3 month</Button>
                                <Button>6 month</Button>
                                <Button>1 year</Button>
                                <Button>3 year</Button>
                                <Button>9 year</Button>
                            </ButtonGroup>
                            <ButtonGroup size="sm">
                                <Button>SMA-12</Button>
                                <Button>SMA-30</Button>
                                <Button>EMA-12</Button>
                                <Button>VWAP</Button>
                                <Button>P-SAR</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    < div className="chart">
                        < Line
                            data={this.state.chartDataOBJ}
                            options={
                                {
                                    responsive: true,
                                    title:
                                        {
                                            display: true,
                                            text:
                                                'stock: TODO',
                                            fontSize:
                                                50
                                        }
                                }
                            }
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default Achart;