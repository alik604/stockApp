import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        //  axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get('http://localhost:3001', {
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
            <ul>
                "dfsfdf"
            </ul>
        )
        //       {this.state.persons.map(person => <li>{person.name}</li>)}

    }
}