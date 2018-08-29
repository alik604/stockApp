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
            sym: this.props.sym,
            cardData: null
        };
    }

    componentDidMount() {
        let date = [];
        let closing = [];

        fetch('http://localhost:3001/getDataForGraph/d30/' + this.props.sym)
            .then(res => res.json())
            .then(chartData => {
            //    console.log(chartData);

                for (var x in chartData["Time Series (30min)"]) {
                    closing.push(parseFloat((chartData["Time Series (30min)"][x]['4. close'])));
                    date.push("" + x);
                }
                date.reverse();
                closing.reverse();

                this.setState({
                    date: date,
                    closing: closing,
                });
                 // console.log(this.state.date);
            }).catch((err) => console.log("data err: " + err));

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


            <Acard cardData={this.state.cardData} closing={this.state.closing} className="card"/>

            <Achart closing={this.state.closing} date={this.state.date} sym={this.state.sym} className="chart"/>
            <Achart closing={this.state.closing} date={this.state.date} sym={this.state.sym} className="chart"/>

        </div>
    }
}

export default AContentPane;