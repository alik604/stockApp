<<<<<<< HEAD
import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import './Acard.css';

class Acard extends Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    componentDidMount() {
        // fetch('Http://localhost:3001/MSFT/company')
        //     .then(res => res.json())
        //     .then(cardData => {
        //         this.setState({data: cardData});
        //        // console.log(this.state.data);
        //     });
    }


    render() {
        /**
         http://www.google.com/search?q=my+keywords+for+search&btnI
         */
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


        if (this.props.cardData == null) {
            console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }
        const info = this.props.cardData;
        /*TODO color
        https://reactstrap.github.io/components/buttons/
        https://reactstrap.github.io/components/badge/
         */
        return (


            <div className="wrapper ">
                <div>
                    <h6>{this.props.cardData.exchange} <Badge color="info">{this.props.cardData.symbol}</Badge></h6>
                </div>

                <div className="AcardLeft">

                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318×180&w=318&h=180"/>
                        <CardBody>
                            <CardTitle> Current: $123</CardTitle>
                            <CardSubtitle> 10% change today</CardSubtitle>
                            <CardText> {this.props.cardData.companyName}'s CEO
                                is {this.props.cardData.CEO}, {this.props.cardData.description}</CardText>
                            <Button color="info" onClick={() => {
                                window.open("http://www.google.com/search?q=" + this.props.cardData.companyName + "&btnI");
                            }
                            }>site</Button> <Button color="info" onClick={() => {
                            window.open("https://www.tradingview.com/chart/?symbol=NASDAQ:" + info.symbol);
                        }}>better chart</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )

    }
}

=======
import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import './Acard.css';

class Acard extends Component {


    constructor(props) {
        super(props);
        this.state = null;


    }

    componentDidMount() {


        fetch('Http://localhost:3001/MSFT/company')
            .then(res => res.json())
            .then(cardData => {


                this.setState({data: cardData});
                console.log(this.state.data);
            });


    }


    render() {
        /**
         http://www.google.com/search?q=my+keywords+for+search&btnI
         */
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


        if (this.state == null) {
            console.log("not loaded!!!!")
            // console.log(this.state.chartDataOBJ)
            return <div/>
        }
        const info = this.state.data;

        return (


            <div className="wrapper ">
                <div>


                    <h6>{this.state.data.exchange} <Badge color="primary">{this.state.data.symbol}</Badge></h6>
                </div>

                <div className="AcardLeft">

                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318×180&w=318&h=180"/>
                        <CardBody>
                            <CardTitle> Current: $123</CardTitle>
                            <CardSubtitle> 10% change today</CardSubtitle>
                            <CardText> {this.state.data.companyName}'s CEO
                                is {this.state.data.CEO},{this.state.data.description}</CardText>
                            <Button onClick={() => {
                                window.open("http://www.google.com/search?q=" + this.state.data.companyName + "&btnI");
                            }
                            }>site</Button> <Button onClick={() => {
                            window.open("https://www.tradingview.com/chart/?symbol=NASDAQ:" + info.symbol);
                        }}>better chart</Button>

                        </CardBody>

                    </Card>

                </div>

            </div>
        )

    }
}

>>>>>>> 4c7cf1752c48124e48a5fb61c6fefdbbb8566c51
export default Acard;