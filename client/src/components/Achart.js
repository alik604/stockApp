import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Button, ButtonGroup, ButtonToolbar, Badge} from 'reactstrap';


import './Achart.css';

class Achart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDataOBJ: {}
        };


    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
        stock: 'XYZ'
    }

    componentDidMount() {


        //var data = this.modData();

        // console.log(obj.prices);

//data.labels = obj.dates;


        // fetch('Http://localhost:3001/MSFT')
        //     .then(res => res.json())
        //     .then(stocks => this.setState({stocks},
        //         () => console.log('stocks fetched', stocks)));


        //  var chartData = "error"; //TODO
        let date = [];
        let details = [];

        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {  //chartData is the returned OBJ. contais all the shit
                // console.log(chartData)
                //console.log(chartData["Time Series (Daily)"]["2018-03-07"]);

                var details = [];
                var date = [];

                for (var x in chartData["Time Series (Daily)"]) {
                    details.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push(x);
                }
                for (var i = 0; i < date.length; i++) {
                  //  console.log(date[i] + " was " + details[i]);// TODO
                }

//TODO
                //       chartData.forEach(element => {
                //           stringArryOfDates.push('' + element.date);
                //           arryOfPrices.push(element.close);
                //        });


                // for (var i = 0; i < chartData.length; i++) {// TODO fix this shit with a map
                //     stringArryOfDates[i] = '' + chartData[i].date;
                //     arryOfPrices[i] = chartData[i].close
                // }
                //console.log(arryOfPrices); //first message
                // console.log(stringArryOfDates.reverse()); //first message
            });
        // console.log((stringArryOfDates).length);
        // console.log(arryOfPrices); //first message
        //  console.log(stringArryOfDates.reverse()); //first message

        this.setState({
            chartDataOBJ: {
                labels: date,
                datasets: [
                    {
                        label: 'My First dataset',
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
                        data: details   //[1, 3, 2, 4, 5, 2, 3]
                    }
                ]
            }

        });

    }

    modData() {

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

                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default Achart;