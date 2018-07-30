import React, {Component} from 'react';
import './AListing.css';

class AListing extends Component {
    constructor() {
        super();
        this.state = {
            stocks: []
        };

    }

    componentDidMount() {
        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(stock => {


                    this.setState(
                        {stock}, () => {
                            // console.log('stocks fetched (AListing.js)', stock)}
                        }
                    )
                }
            );
    }

    render() {
        return (
            <div>
                <h2>MSFT stock</h2>
                <ul>
                    {this.state.stock.foreach(stock => {


                        for (var x in stock["Time Series (Daily)"]) {

                            <li> on {x}, closed at {parseFloat((stock["Time Series (Daily)"][x]['4. close']))}</li>
                        }
                    })}

                </ul>
            </div>
        );
    }
}

export default AListing;