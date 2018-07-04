import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Achart.css';

class Achart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
        stock: 'XYZ'
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        title: {
                            display: this.props.displayTitle,
                            text: 'stock: ' + this.props.stock,
                            fontSize: 50
                        }
                    }}
                />

            </div>
        )
    }
}

export default Achart;