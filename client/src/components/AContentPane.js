import React, {Component} from 'react';

import Achart from './Achart';
import Acard from './Acard';

import './AContentPane.css';


class AContentPane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aOBJ: {}
        };
    }

    componentDidMount() {

    }


    render() {
        return <div>

            <Acard/>

            <Achart/>

        </div>
    }

}

export default AContentPane;