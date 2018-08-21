import React, {Component} from 'react';
import AContentPane from './AContentPane.js';

import './Achart.css';

class Arepeater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDataWatchList: null
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
        fetch('http://localhost:3001/getAllWatchListData')
            .then(res => res.json())
            .then(data => {
                    // console.log("data for all watch list items: ", data);


                    this.setState({allDataWatchList: data});
                     console.log(data);
                }
            ).catch(err => {
            console.log("err: ", err)
        });

    }


    render() {

        if (this.state.allDataWatchList == null) {
            return <div/>
        }

        return (
            <div className="wrapper ">
                < div className="chart">
                    <div>

                        {this.state.allDataWatchList.map(function (elem,i) {
                            return <AContentPane key = {i} sym = {elem.sym}    />
                        })}

                    </div>
                </div>
            </div>

        )
    }
}

export default Arepeater;