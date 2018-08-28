import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Button, ButtonGroup, ButtonToolbar} from 'reactstrap';


import './Achart.css';

class Achart extends Component {

    SMA12 = (e) => {
        /*TODO FUBAR
 last 60 data points are fucked up

         */
        e.preventDefault();
        console.log();

        var smaBuilder = this.props.closing;
        var offset = 12;
        var index = 12;
        console.log(smaBuilder);
        for (var i = 0; i < 12; i++) { //cant calc
            // smaBuilder[i] = smaBuilder[0];
        }

//this.state.closing.length - offset
        for (var k = 0; k < 88; k++) { //88 times
            var sum = 0;

            for (var i = 0; i < 12; i++) {
                sum += parseInt(smaBuilder[index - 12 + i]);
            }

            smaBuilder[index] = (sum / 12).toFixed(2);
            index++;
            console.log(sum); //if start @ 12, [12..99]
            //  console.log(offset);
        }

        console.log(smaBuilder);

        this.setState({
                chartData: {
                    labels: this.state.date, //["2","2","2","2","4","1"]
                    datasets: [
                        {
                            label: '' + this.props.sym,
                            data: this.state.closing

                        }, {

                            label: 'SMA-12',
                            data: smaBuilder// this.props.closing
                        }
                    ]
                }
            }
        ) // end of set state


    };

    SMA30 = (e) => {
        console.log("tigger triggered")
    };
    VWAP = (e) => {
        console.log("tigger triggered")
    };
    EMA12 = (e) => {
        console.log("tigger triggered")
    };
    EMA30 = (e) => {
        console.log("tigger triggered")
    };

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            date: null,
            closing: null
        };
    }

    componentDidMount() {
        this.setState({
            date: this.props.date,
            closing: this.props.closing,
            sym: this.props.sym
        });


        this.setState({
                chartData: {
                    labels: this.props.date, //["2","2","2","2","4","1"]
                    datasets: [
                        {
                            label: '' + this.props.sym,
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
                            data: this.props.closing
                        }
                    ]
                }
            }
        ) // end of set state

    }


    render() {

        //btn group https://reactstrap.github.io/components/button-group/
        //TODO convert to radio buttons http://reactstrap.github.io/components/buttons/
        if (this.state.chartData == {}) {
            //   console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }
        //    console.log("loaded!!");
        //   console.log("chartDataOBJ: ");
        //   console.log(this.state.chartDataOBJ);
        return (

            <div className="wrapper">
                <div className="btn-group-vertical">
                    <ButtonToolbar className='buttonToolbar'>
                        <ButtonGroup className='buttonGroupTop' size="sm">
                            <Button>1 week</Button>
                            <Button>1 month</Button>
                            <Button>3 month</Button>
                            <Button>6 month</Button>
                            <Button>1 year</Button>
                            <Button>3 year</Button>
                            <Button>9 year</Button>
                        </ButtonGroup>
                        <ButtonGroup className='buttonGroupBottom' size="sm">
                            <Button onClick={(e) => this.SMA12(e)}>SMA-12</Button>
                            <Button onClick={(e) => this.SMA30(e)}>SMA-30</Button>
                            <Button onClick={(e) => this.VWAP(e)}>?VWAP?</Button>
                            <Button onClick={(e) => this.EMA12(e)}>EMA-12</Button>
                            <Button onClick={(e) => this.EMA30(e)}>EMA-30</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>

                < div className="chart">
                    < Line data={this.state.chartData}/>
                </div>

            </div>
        )
    }
}

export default Achart; //                    < Line data={this.state.chartData}/>
