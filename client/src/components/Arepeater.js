import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

import './Achart.css';

class Arepeater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDataOBJ: {}
        };
    }

    /**
     * my epic battle plan
     *
     *  if DB doesnt not contain updated data.
     *  order  AContentPane to get the data on its own
     *
     *  else get data from DB
     *      order AContentPane to use the data from this.props
     */

    async fetch(symbol) {
        return await fetch('Http://localhost:3001/getDataForGraph/' + symbol)
            .then(res => res.json());

    }

    componentDidMount() {


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
                        })}

                    </div>
                </div>
            </div>

        )
    }
}

export default Arepeater;