import React, {Component} from 'react';

import Achart from './Achart';
import Acard from './Acard';

import './AContentPane.css';


class AContentPane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            closing: null,
            dateR: null,
            closingR: null,
            sym: this.props.sym,
            cardData: null
        };
    }

    componentDidMount() {
        let date = [];
        let closing = [];
        fetch('https://api.iextrading.com/1.0/stock/' + this.props.sym + '/chart/3m')
            .then(res => res.json())
            .then(chartData => {
              //  console.log(chartData);

                for (var x in chartData) {
                    closing.push(parseFloat((chartData[x]["close"])));
                    date.push("" + chartData[x]["date"]);
                }
                // date.reverse();
                // closing.reverse();



                let date2 = [];
                let closing2 = [];
                fetch('https://api.iextrading.com/1.0/stock/' + this.props.sym + '/chart/1d')
                    .then(res => res.json())
                    .then(chartData => {
                     //   console.log(chartData);

                        for (var x in chartData) {
                            closing2.push(parseFloat((chartData[x]["close"])));
                            date2.push("" + chartData[x]["minute"]);
                        }

                        this.setState({
                            date: date,
                            closing: closing,
                            date2: date2,
                            closing2: closing2
                        });
                        //     console.log(this.state.date);
                    }).catch((err) => console.log("data err in inner: " + err));

                //     console.log(this.state.date);
            }).catch((err) => console.log("data err: " + err));




        /* fetch('http://localhost:3001/getDataForGraph/d90/' + this.props.sym)
                 .then(res => res.json())
                 .then(chartData => {
                     //    console.log(chartData);

                     for (var x in chartData["Time Series (Daily)"]) {
                         closing.push(parseFloat((chartData["Time Series (Daily)"][x]['4. close'])));
                         date.push("" + x);
                     }
                     date.reverse();
                     closing.reverse();

                     this.setState({
                         date: date,
                         closing: closing
                     });
                     //     console.log(this.state.date);
                 }).catch((err) => console.log("data err: " + err));
     */


        /**
         * weird react error RE: state
         *
         * dear reader please hire me so i can ask you for help :P
         */
        // let date2 = [];
        // let closing2 = [];
        // fetch('http://localhost:3001/getDataForGraph/i1/' + this.props.sym)
        //     .then(res2 => res2.json())
        //     .then(chartData2 => {
        //         //    console.log(chartData);
        //
        //         for (var x in chartData2["Time Series (1min)"]) {
        //             closing2.push(parseFloat((chartData2["Time Series (1min)"][x]['4. close'])));
        //             date2.push("" + x);
        //         }
        //         date2.reverse();
        //         closing2.reverse();
        //
        //         this.setState({
        //             dateR: date2,
        //             closingR: closing2
        //         });
        //         //    console.log(this.state.dateR);
        //     }).catch((err) => console.log("data err: " + err));

        ////=================

        fetch('http://localhost:3001/getCompanyData/' + this.props.sym)
            .then(res => res.json())
            .then(cardData => {
                this.setState({cardData: cardData});
                // console.log(this.state.data);
            }).catch((err) => console.log("company err: " + err));
    }

    render() {

        if (this.state.date === null) {
            //   console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }

        return <div className="AContentPane-wrapper">

            <Acard cardData={this.state.cardData} closing={this.state.closing} sym={this.state.sym}  className="card"/>

            <Achart closing={this.state.closing} date={this.state.date} sym={this.state.sym} isRight={false}
                    className="chart"/>
            <Achart closing={this.state.closing2} date={this.state.date2} sym={this.state.sym} isRight={true}
                    className="chart"/>

        </div>
    }
}

export default AContentPane;