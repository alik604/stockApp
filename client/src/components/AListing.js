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
            .then(stocks => this.setState({stocks},
                () => console.log('stocks fetched (AListing.js)', stocks)));
    }

    render() {
        return (
            <div>
                <h2>MSFT stock</h2>
                <ul>
                    {this.state.stocks.map(stock =>
                        <li key={stock.date}>on {stock.date}, closed at {stock.close}</li>
                    )}

                </ul>
            </div>
        );
    }
}

export default AListing;