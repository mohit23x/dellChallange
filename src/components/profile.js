import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button, ButtonGroup } from 'react-bootstrap'
import {MyNavbar} from './navbar';


class Profile extends Component{

    render(){
        return(
            <Container>
                <MyNavbar />
                            <Jumbotron fluid>
            <Container>
                <h1>I was about to make this page but 6 hours completed. very soon!</h1>
            </Container>
            </Jumbotron>

            </Container>
        )
    }
}

export default withRouter(Profile);