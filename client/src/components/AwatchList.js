import React from 'react';
import {Badge, Button, CustomInput, Form, FormFeedback, FormGroup, Input, Label, Table} from 'reactstrap';


import './AwatchList.css';


class AwatchList extends React.Component {

// https://raw.githubusercontent.com/benawad/basic-react-form/master/src/Form.js
    /**
     form feild #2 & #4 are not working. hardcoded values to move on words.
     */
    state = {
        sym: "AAPL",
        buy: true,
        sell: false,
        quantity: "100",
        typeOfOrder: "market price",
        price: "123",
        allDataWatchList: []

    };// TODO hard code values for testing

    onSubmit = e => {
        e.preventDefault();

        //TODO client side validation


        // // this.props.onSubmit(this.state);
        // this.setState({
        //     sym: "",
        //     buyOrSell: "",
        //     quantity: "",
        //     typeOfOrder: "",
        //     price: ""
        // });
        // this.props.onChange({
        //     sym: "",
        //     buyOrSell: "",
        //     quantity: "",
        //     typeOfOrder: "",
        //     price: ""
        // });

//TODO dont send unneeded shit
        fetch("Http://localhost:3001/AddToWatchList", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(function (response) { //TODO
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            });
    };
    // change = e => {
    //     this.props.onChange({[e.target.name]: e.target.value});
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    onDelete = (e, id) => { //TODO FUBAR
        e.preventDefault();
        var x = "http://localhost:3001/sell";

        fetch(x, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        }).then(function (response) { //TODO
            console.log(response);
            return response.json();
        }).then(function (data) {
            console.log("data: " + data)
        }).catch(e => {
            console.log("error: ", e)
        });

    };

    componentDidMount() {
        fetch('http://localhost:3001/getAllWatchListData/a')
            .then(res => res.json())
            .then(data => {
                    // console.log("data for all watch list items: ", data);
                    // console.log(data[0].sym);
                    // console.log(data[0].price);


                    this.setState({allDataWatchList: data});
                    // console.log(" data: "+ data);
                    // console.log("state data: "+ this.state.allDataWatchList);
                }
            ).catch(err => {
            console.log("err: ", err)
        });

    }


    render() {
//http://reactstrap.github.io/components/tables/
// <button> click me </button>


        //under stock sym   /*<FormText>Example help text that remains unchanged.</FormText>*/
        return (
            <div className="AwatchList-wrapper ">
                <div className="AwatchList-table">

                    <Table striped>

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>price on buy ($)</th>
                            <th>price current ($)</th>
                            <th>quantity</th>
                            <th>sell</th>
                        </tr>
                        </thead>

                        <tbody>

                        {this.state.allDataWatchList.map((elem) => {
                            return <tr key={elem._id}>
                                <td><Badge color="info">         {elem.sym}</Badge> {elem.sym}</td>
                                <td>{elem.price}</td>
                                <td>{elem.price}</td>
                                <td>{elem.quantity} </td>
                                <td>
                                    <Button color="danger" block={true}
                                            onClick={(e) => this.onDelete(e, elem._id)}> Sell me</Button>
                                </td>
                            </tr>

                        })}


                        </tbody>


                    </Table>
                </div>


                <div className="AwatchList-order">
                    <h6> TODO: dear reader, I want this to stay in center of right side, when the watch list get (vey)
                        long... will use same strategy as FAB (floating action button)*/</h6>
                    <Form>

                        <FormGroup>
                            <Label for="stockSym">stock Sym</Label>
                            <Input name="sym"
                                   placeholder="sym here :)"
                                   value={this.state.sym}
                                   onChange={e => this.setState({sym: e.target.value})}
                                   valid/>
                            <FormFeedback valid>I need to think of a good validation strategy :( </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="buyOrSell">Buy/Sell</Label>
                            <CustomInput type="select"
                                         id="buyOrSell">

                                <option id="buy"
                                        name="buy"
                                        onClick={() => {
                                            this.setState({buy: "asdasd"})
                                        }}
                                >Buy
                                </option>
                                {/*value pram???  */}
                                <option id="sell"
                                        name="sell"
                                        value={"sell is true"}
                                        onChange={e => this.setState({sell: e.target.value})}
                                >Sell
                                </option>

                            </CustomInput>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Quantity">Quantity</Label>
                            <Input type="number"
                                   name="Quantity"
                                   id="Quantity"
                                   placeholder="Quantity"
                                   value={this.state.quantity}
                                   onChange={e => this.setState({quantity: e.target.value})}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCheckbox">Radios. mutually exclusive (only one at once)</Label>
                            <div>
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                                             label="market price"/>
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="limit"/>
                                <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="stop"/>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="number"
                                   name="price"
                                   id="price"
                                   placeholder="Price? (enabled IFF limit XOR stop)"
                                   value={this.state.price}
                                   onChange={e => this.setState({price: e.target.value})}
                            />
                        </FormGroup>


                        <Button color="danger" block={true} onClick={(e) => this.onSubmit(e)}> confirm? </Button>
                    </Form>


                </div>


                <div className="AwatchList-summaryAndStats">
                    <h2> Summary and Stats</h2>
                    <h6> starting value: $100,000</h6>
                    <h6> current value: $110,000</h6>
                    <h6> percentage gains: 10%</h6>

                </div>
            </div>
        );
    }
}

export default AwatchList;


/*
as one form group

<FormGroup>
                            <Label for="stockSym">stock Sym</Label>
                            <Input valid/>
                            <FormFeedback valid>I need to think of a good validation strategy :( </FormFeedback>

                            <Label for="exampleCustomSelect">Buy/Sell</Label>
                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">

                                <option>Buy</option>
                            //    value pram???
<option>Sell</option>

</CustomInput>



<Label for="exampleNumber">Quantity</Label>
<Input type="number" name="number" id="exampleNumber" placeholder="Quantity"/>


    <Label for="exampleCheckbox">Radios. mutually exclusive (only one at once) </Label>
<div>
    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                 label="market price"/>
    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="limit"/>
    <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="stop"/>
</div>


<Label for="exampleNumber">Price</Label>
    <Input type="number" name="number" id="PriceField"
           placeholder="Price? (enabled IFF limit XOR stop)"/>
    </FormGroup>

 */