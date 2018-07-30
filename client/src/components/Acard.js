import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import './Acard.css';

class Acard extends Component {


    constructor(props) {
        super(props);
        this.state = {};


    }

    componentDidMount() {


        fetch('Http://localhost:3001/MSFT')
            .then(res => res.json())
            .then(chartData => {
                this.setState({});
            });


    }


    render() {

        /*
        data view
            card
                https://v0.material-ui.com/#/components/card
                    XOR
                http://react-toolbox.io/#/components/card
            list
                https://material-ui.com/demos/lists/
                        https://codesandbox.io/s/9z2x527y6r
                https://v0.material-ui.com/#/components/divider
                    https://v0.material-ui.com/#/components/paper

                    card with images of company
                for more info
                http://reactstrap.github.io/components/collapse/
                 */


        //    console.log("loaded!!");
        //   console.log("chartDataOBJ: ");
        //   console.log(this.state.chartDataOBJ);

        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (


            <div className="wrapper ">
                <div>
                    <h3>Heading <Badge color="primary">MSFT</Badge></h3>
                </div>

                <div className="AcardLeft">

                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318×180&w=318&h=180"/>
                        <CardBody>
                            <CardTitle>Current: $123</CardTitle>
                            <CardSubtitle> 10% change today</CardSubtitle>
                            <CardText>microsoft is a.... Some quick example text to build on the card title and make up
                                the bulk of the
                                card's content.</CardText>
                            <Button>site</Button> <Button>better chart</Button>

                        </CardBody>

                    </Card>

                </div>

            </div>
        )

    }
}

export default Acard;