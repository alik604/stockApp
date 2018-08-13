import React, {Component} from 'react';

import Achart from './Achart';
import Acard from './Acard';

import './AContentPane.css';


class AContentPane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            cardData: {}
        };
    }

    componentDidMount() {

        let date = [];
        let closing = [];

        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {
                for (var x in chartData["Time Series (Daily)"]) {
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

        ////=================


        fetch('Http://localhost:3001/MSFT/company')
            .then(res => res.json())
            .then(cardData => {
                this.setState({cardData: cardData});
                // console.log(this.state.data);
            });

    }


    render() {
        return <div>


            <Acard cardData={this.state.cardData}/>

            <Achart chartData={this.state.chartData}/>
            <Achart chartData={this.state.chartData}/>

        </div>
    }
}

export default AContentPane;