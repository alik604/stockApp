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

    fetch(symbol) {
        let date = [];
        let closing = [];

        fetch('Http://localhost:3001/' + symbol)
            .then(res => res.json())
            .then(chartData => {

                for (var x in chartData["Time Series (Daily)"]) {
                    closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();


                //     this.setState({
                //         chartDataOBJ: {
                //             labels: date, //["2","2","2","2","4","1"]
                //             datasets: [
                //                 {
                //                     label: 'MSFT',
                //                     fill: false,
                //                     lineTension: 0.1,
                //                     backgroundColor: 'rgba(75,192,192,0.4)',
                //                     borderColor: 'rgba(75,192,192,1)',
                //                     borderCapStyle: 'butt',
                //                     borderDash: [],
                //                     borderDashOffset: 0.0,
                //                     borderJoinStyle: 'miter',
                //                     pointBorderColor: 'rgba(75,192,192,1)',
                //                     pointBackgroundColor: '#fff',
                //                     pointBorderWidth: 1,
                //                     pointHoverRadius: 5,
                //                     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                //                     pointHoverBorderColor: 'rgba(220,220,220,1)',
                //                     pointHoverBorderWidth: 2,
                //                     pointRadius: 1,
                //                     pointHitRadius: 10,
                //                     data: closing //[1, 3, 2, 4, 5, 2, 3]
                //                 }
                //             ]
                //         }
                //
                //     });
            });
        return this.formatingDataforChartJS(symbol, date, closing);
    }

    componentDidMount() {


        this.setState({

            dataForRepeater: [
                this.fetch("MSFT"),
                this.fetch("AMZN"),
                this.formatingDataforChartJS("qwe", ["2", "2", "2", "2", "4", "1"], [1, 3, 2, 4, 5, 2, 3]),
                this.formatingDataforChartJS("asd", ["2", "2", "2", "2", "4", "1"].map(x => x * 2), [1, 3, 2, 4, 5, 2, 3].map(x => x * 2)),
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