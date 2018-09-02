import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Button, ButtonGroup, ButtonToolbar} from 'reactstrap';


import './Achart.css';

class Achart extends Component {


    day = (e) => {
        e.preventDefault();

        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/i1/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                for (var x in chartData["Time Series (1min)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (1min)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    week = (e) => {
        try {
            e.preventDefault();
        } catch (e) {
            // #goodStyle LOL
        }
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/i1/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                if (chartData["Information"] != null) {
                    console.log("API limit reached!")
                }
                for (var x in chartData["Time Series (1min)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (1min)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    month = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/d30/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                for (var x in chartData["Time Series (30min)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (30min)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    month3 = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/d90/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                for (var x in chartData["Time Series (Daily)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    month6 = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/d180/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                var i = 0;
                for (var x in chartData["Time Series (Daily)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push("" + x);
                    if (++i > 180)
                        break;
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    year = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/d180/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                var i = 0;
                for (var x in chartData["Time Series (Daily)"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push("" + x);
                    if (++i > 360)
                        break;
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    year3 = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/w/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                var i = 0;
                for (var x in chartData["Weekly Time Series"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Weekly Time Series"][x]['4. close'])));
                    date.push("" + x);
                    if (++i > 156)
                        break;
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };
    max = (e) => {
        e.preventDefault();
        let date = [];
        let closing = [];
        fetch('http://localhost:3001/getDataForGraph/m/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
                console.log(chartData);
                var i = 0;
                for (var x in chartData["Monthly Time Series"]) { //[0] was "Time Series (Daily)"
                    closing.push(parseFloat((chartData["Monthly Time Series"][x]['4. close'])));
                    date.push("" + x);
                    if (++i > 360)
                        break;
                }
                date.reverse();
                closing.reverse();
                this.setState({
                        chartData: {
                            labels: date, //["2","2","2","2","4","1"]
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
                                    data: closing
                                }
                            ]
                        }
                    }
                ) // end of set state

            }).catch((err) => console.log("data err: " + err));
    };


    SMA12 = (e) => {
        /*TODO FUBAR
 last 60 data points are fucked up

         */
        e.preventDefault();
      //  console.log();

        var smaBuilder = this.props.closing;
    //    var offset = 12;
        var index = 12;
        console.log(smaBuilder);
        for (var j = 0; j < 12; j++) { //cant calc
            // smaBuilder[i] = smaBuilder[0];
        }

//this.state.closing.length - offset
        for (var k = 0; k < 88; k++) { //88 times
            var sum = 0;

            for (var i = 0; i < 12; i++) {
                sum += parseFloat(smaBuilder[index - 12 + i]);
            }

            smaBuilder[index] = parseFloat((sum / 12).toFixed(2));
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

        // if (this.props.isRight) {
        //     this.week(null);
        // }


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
                            <Button onClick={(e) => this.day(e)}>1 day</Button>
                            <Button onClick={(e) => this.week(e)}>1 week</Button>
                            <Button onClick={(e) => this.month(e)}>1 month</Button>
                            <Button onClick={(e) => this.month3(e)}>3 month</Button>
                            <Button onClick={(e) => this.month6(e)}>6 month</Button>
                            <Button onClick={(e) => this.year(e)}>1 year</Button>
                            <Button onClick={(e) => this.year3(e)}>3 year</Button>
                            <Button onClick={(e) => this.max(e)}> max</Button>
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
