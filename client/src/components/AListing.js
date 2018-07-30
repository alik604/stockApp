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
                    //  console.log(stock["Time Series (Daily)"]);


                    var details = [];
                    var dates = [];

                    for (var x in stock["Time Series (Daily)"]) {
                        details.push(parseFloat((stock["Time Series (Daily)"][x]['4. close'])));
                        dates.push(x);
                    }

                    console.log(details);
                    console.log(dates);

                    var matrix = [dates, details];
                    var myStock = stock["Time Series (Daily)"];
                    this.setState(
                        {myStock}
                    )

                }
            );
    }

    render() {
        return (
            <div>
                <h2>MSFT stock</h2>
                <ul>

                    {this.state.myStock.forEach(stock => {
                            console.log(stock);   //  <li key={stock.date}>on {stock.date}, closed at {stock.detail}</li>
                        }
                    )}

                </ul>
            </div>
        );
    }
}

export default AListing;