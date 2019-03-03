import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Papa from "papaparse";
import Skeleton from 'react-loading-skeleton';
import {MyNavbar} from './navbar';
import { Container, Row, Col, Jumbotron, Button, ButtonGroup } from 'react-bootstrap'
import { Amsterdam, Athens, 
        Barcelona, 
        Berlin, 
        Bratislava, 
        Brussels, 
        Budapest, 
        Copenhagen, 
        Dublin, 
        Edinburgh, 
        Geneva, 
        Hamburg, 
        Helsinki, 
        Krakow, 
        Lisbon, 
        Ljubljana, 
        London, 
        Luxembourg, 
        Lyon, 
        Madrid, 
        Milan, 
        Munich, 
        Oporto, 
        Oslo, 
        Paris, 
        Prague, 
        Rome, 
        Stockholm, 
        Vienna, 
        Warsaw, 
        Zurich, 
 } from './homecards';

import { CityCard } from './cityCards';

class City extends Component{

    constructor(props){
        super(props);
        this.state = {
        data: '',
        Amsterdam : [],
        ratesort: false,
        reviewsort: false,
        }
    }

    componentDidMount(){
        var csvfile = require("./../assets/data.csv");
        // var Papa = require("./../assets/papaparse.min.js");
        Papa.parse(csvfile, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        })
    }

    updateData = (result) => {
        const data = result.data;
        console.log(data);

        var Amsterdam = []
    if(this.state.ratesort){
                var temp = data.sort(function(a, b){
                        return a.Rating - b.Rating;
                    });

                for(var i = 0; i < data.length; i++){
            if( temp[i].City === this.props.match.params.id){
                Amsterdam.push(data[i])
            }
        }
    }else if(this.state.reviewsort){
        var tmp = data.sort(function(a, b){
                                return a['Number of Reviews'] - b['Number of Reviews'];
                            })
                     
                        for(var i = 0; i < data.length; i++){
                    if( tmp[i].City === this.props.match.params.id){
                        Amsterdam.push(data[i])
                    }
                }
    }else{
        for(var i = 0; i < data.length; i++){
            if( data[i].City === this.props.match.params.id){
                Amsterdam.push(data[i])
            }
        }
    }


      this.setState({
        Amsterdam,
        data: data
      })
    }

    handleRateClick = (e) => {
        this.setState({
            ratesort: true,
            reviewsort: false
        })
    }

    handleReviewClick = (e) => {
        alert('sdf');
          this.setState({
            ratesort: true,
            reviewsort: false
        })
    }
    render(){
        return(
            <Container>
            <MyNavbar />
            <Jumbotron>
                    <div className="inputbox">
                        <p>you are at </p>
                        <h1>{this.props.match.params.id}</h1>
                    </div>
                </Jumbotron>
<ButtonGroup aria-label="Basic example">
  <Button variant="primary" onClick={this.handleRateClick}>Sort By Rating</Button>
  <Button variant="success" onClick={this.handleReviewClick}>Sort by Review</Button>
</ButtonGroup>;
            <br />
                <CityCard name={this.state.Amsterdam}  /><br /><br />                
            </Container>
           )
    }
}
export default City;