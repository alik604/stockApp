import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

import './Achart.css';

const a = [1, 10, 100, 1000, 10000];

class Arepeater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDataOBJ: {}
        };
    }


    formatingDataforChartJS(name, dateArray, closingArray) {
        return {
            labels: dateArray, //["2","2","2","2","4","1"]
            datasets: [
                {
                    label: name,
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
                    data: closingArray //[1, 3, 2, 4, 5, 2, 3]
                }
            ]//datasets array
        }
    }

    async fetch(symbol) {

        return await fetch('Http://localhost:3001/' + symbol)
            .then(res => res.json());
        // this.setState({
        //     dataForRepeater: {
        //         labels: date, //["2","2","2","2","4","1"]
        //         datasets: [
        //             {
        //                 label: 'MSFT',
        //                 fill: false,
        //                 lineTension: 0.1,
        //                 backgroundColor: 'rgba(75,192,192,0.4)',
        //                 borderColor: 'rgba(75,192,192,1)',
        //                 borderCapStyle: 'butt',
        //                 borderDash: [],
        //                 borderDashOffset: 0.0,
        //                 borderJoinStyle: 'miter',
        //                 pointBorderColor: 'rgba(75,192,192,1)',
        //                 pointBackgroundColor: '#fff',
        //                 pointBorderWidth: 1,
        //                 pointHoverRadius: 5,
        //                 pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //                 pointHoverBorderColor: 'rgba(220,220,220,1)',
        //                 pointHoverBorderWidth: 2,
        //                 pointRadius: 1,
        //                 pointHitRadius: 10,
        //                 data: closing //[1, 3, 2, 4, 5, 2, 3]
        //             }
        //         ]
        //     }
        //
        // });

        //   return this.formatingDataforChartJS(symbol, date, closing); //returns formatted OBJ to go get passed into chartJS
    }

    async componentDidMount() {
        // var q;
        // console.log(this.fetch("MSFT").then(x => q = x));
        // console.log(q);
        let stateArray = [];
//====
        let date = [];
        let closing = [];

        await this.fetch("AAPL").then(chartData => {
            for (var x in chartData["Time Series (Daily)"]) {
                closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                date.push("" + x);
            }
            date.reverse();
            closing.reverse();

            stateArray.push(this.formatingDataforChartJS("AAPL", date, closing)); //returns formatted OBJ to go get passed into chartJS
        });

//===
        var dateQ = [];
        var closingQ = [];

        await this.fetch("AMZN").then(chartData => {
            for (var x in chartData["Time Series (Daily)"]) {
                closingQ.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                dateQ.push("" + x);
            }
            dateQ.reverse();
            closingQ.reverse();

            stateArray.push(this.formatingDataforChartJS("AMZN", dateQ, closingQ)); //returns formatted OBJ to go get passed into chartJS
        });
//====
        this.setState({
            dataForRepeater: [
                stateArray[0],
                stateArray[1],
                this.formatingDataforChartJS("zxc", ["2", "2", "2", "2", "4", "1"].reverse(), [1, 3, 2, 4, 5, 2, 3].reverse())
            ]
        });
    }


    render() {

        if (this.state.dataForRepeater == null) {
            return <div/>
        }

        return (
            <div className="wrapper ">
                < div className="chart">
                    <div>
                        {this.state.dataForRepeater.map(function (i, index) {
                            return < Line key={index} data={i}/>
                        })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default Arepeater;