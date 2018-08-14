import React from 'react';
import {Badge, Button, CustomInput, Form, FormFeedback, FormGroup, Input, Label, Table} from 'reactstrap';


import './AwatchList.css';


class AwatchList extends React.Component {


    componentDidMount() {


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

                        <tr>
                            <td><Badge color="info"> AAPl </Badge> Apple</td>
                            <td>$123</td>
                            <td>$133</td>
                            <td>111</td>
                            <td>
                                <Button color="danger" block={true}> Sell me</Button>
                            </td>
                        </tr>

                        <tr>
                            <td><Badge color="info"> MSFT </Badge> Microsoft Corporation</td>
                            <td>$456</td>
                            <td>$466</td>
                            <td>222</td>
                            <td>
                                <Button color="danger" block={true}> Sell me</Button>
                            </td>
                        </tr>

                        <tr>
                            <td><Badge color="info"> GOOGL </Badge> Alphabet Inc Class A</td>
                            <td>$789</td>
                            <td>$799</td>
                            <td>333</td>
                            <td>
                                <Button color="danger" block={true}> Sell me </Button>
                            </td>
                        </tr>

                        </tbody>


                    </Table>
                </div>

                <div className="AwatchList-order">
                    <h6> /* TODO: dear reader, I want this to stay in center of right side, when the watch list get (vey) long... will use same strategy as FAB (floating action button)*/</h6>
                    <Form>

                        <FormGroup>
                            <Label for="stockSym">stock Sym</Label>
                            <Input valid/>
                            <FormFeedback valid>I need to think of a good validation strategy :( </FormFeedback>

                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCustomSelect">Buy/Sell</Label>
                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">

                                <option>Buy</option>
                                /*value pram???  */
                                <option>Sell</option>

                            </CustomInput>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleNumber">Quantity</Label>
                            <Input type="number" name="number" id="exampleNumber" placeholder="Quantity"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCheckbox">Radios. mutually exclusive (only one at once) </Label>
                            <div>
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                                             label="market price"/>
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="limit"/>
                                <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="stop"/>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleNumber">Price</Label>
                            <Input type="number" name="number" id="PriceField"
                                   placeholder="Price? (enabled IFF limit XOR stop)"/>
                        </FormGroup>


                        <Button color="danger" block={true}> confirm? </Button>
                    </Form>


                </div>
                /* end of order */

                <div>


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