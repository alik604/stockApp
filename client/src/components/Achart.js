import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Badge, Button, ButtonGroup, ButtonToolbar} from 'reactstrap';


import './Achart.css';

class Achart extends Component {

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
        stock: 'XYZ'
    }

    constructor(props) {
        super(props);
        this.state = {
            chartDataOBJ: {}
        };


    }

    componentDidMount() {

        let date = [];
        let closing = [];

        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {  //chartData is the returned OBJ. contais all the shit
                //console.log(chartData["Time Series (Daily)"]["2018-03-07"]);


                for (var x in chartData["Time Series (Daily)"]) {
                    closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();
                // for (var i = 0; i < date.length; i++) {
                //       console.log(date[i] + " was " + details[i]);// TODO
                // }
                //       chartData.forEach(element => {
                //           stringArryOfDates.push('' + element.date);
                //           arryOfPrices.push(element.close);
                //        });

                this.setState({
                    chartDataOBJ: {
                        labels: date, //["2","2","2","2","4","1"]
                        datasets: [
                            {
                                label: 'MSFT',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: closing //[1, 3, 2, 4, 5, 2, 3]
                            }
                        ]
                    }

                });
            });


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
        if (this.state.chartDataOBJ == null) {
            //   console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }
        //    console.log("loaded!!");
        //   console.log("chartDataOBJ: ");
        //   console.log(this.state.chartDataOBJ);
        return (


            <div className="wrapper ">
                <div>

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

                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default Achart;