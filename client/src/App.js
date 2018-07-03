import React from 'react';
import axios from 'axios';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AListing from './components/AListing';
import ButtonAppBar from './components/AppBar';

export default class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        //  axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get('http://localhost:3001/MSFT', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }) //hearder not needed
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({persons});
            }).catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <ButtonAppBar /> //alt https://reactstrap.github.io/components/navbar/
                <h1>Welcome to stock app!</h1>


                <Button variant="contained" color="primary">
                    btn via mat
                </Button>
                <Button color="primary">
                    reg btn via mat
                </Button>
                <button className="btn btn-danger float-right">Example Button floated right</button>
                <AListing/>

            </div>
        );
        //       {this.state.persons.map(person => <li>{person.name}</li>)}

    }
}

