import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import './home.css';
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
import Papa from "papaparse";
import Skeleton from 'react-loading-skeleton';
import {MyNavbar} from './navbar';
import { Link } from "react-router-dom";


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
        searchResult: [],
        data: '',
        Amsterdam : [],
        Athens : [],
        Barcelona : [],
        Berlin : [],
        Bratislava : [],
        Brussels : [],
        Budapest : [],
        Copenhagen : [],
        Dublin : [],
        Edinburgh : [],
        Geneva : [],
        Hamburg : [],
        Helsinki : [],
        Krakow : [],
        Lisbon : [],
        Ljubljana : [],
        London : [],
        Luxembourg : [],
        Lyon : [],
        Madrid : [],
        Milan : [],
        Munich : [],
        Oporto : [],
        Oslo : [],
        Paris : [],
        Prague : [],
        Rome : [],
        Stockholm : [],
        Vienna : [],
        Warsaw : [],
        Zurich : [],
        }
    }

    componentDidMount(){
        var csvfile = require("./../assets/data.csv");
        // var Papa = require("./../assets/papaparse.min.js");
        Papa.parse(csvfile, {
            header: true,
            download: true,
            skipEmptyLines: true,
            // step: function(row) {
		    //     console.log(row.data);
            //     console.log(row.Name);
            //     console.log(row);
            //     console.log(' ');
	        // },
            complete: this.updateData
        })
    }

    updateData = (result) => {
        const data = result.data;
        console.log(data);

        var Amsterdam = []
        var Athens = []
        var Barcelona = []
        var Berlin = []
        var Bratislava = []
        var Brussels = []
        var Budapest = []
        var Copenhagen = []
        var Dublin = []
        var Edinburgh = []
        var Geneva = []
        var Hamburg = []
        var Helsinki = []
        var Krakow = []
        var Lisbon = []
        var Ljubljana = []
        var London = []
        var Luxembourg = []
        var Lyon = []
        var Madrid = []
        var Milan = []
        var Munich = []
        var Oporto = []
        var Oslo = []
        var Paris = []
        var Prague = []
        var Rome = []
        var Stockholm = []
        var Vienna = []
        var Warsaw = []
        var Zurich = []

    for(var i = 0; i < data.length; i++){
        if( data[i].City === 'Amsterdam'){
            Amsterdam.push(data[i])
        }
        else if ( data[i].City === 'Athens'){
            Athens.push(data[i])
        }
        else if ( data[i].City === 'Barcelona'){
            Barcelona.push(data[i])
        }
        else if ( data[i].City === 'Berlin'){
            Berlin.push(data[i])
        }
        else if ( data[i].City === 'Bratislava'){
            Bratislava.push(data[i])
        }
        else if ( data[i].City === 'Brussels'){
            Brussels.push(data[i])
        }
        else if ( data[i].City === 'Budapest'){
            Budapest.push(data[i])
        }
        else if ( data[i].City === 'Copenhagen'){
            Copenhagen.push(data[i])
        }
        else if ( data[i].City === 'Dublin'){
            Dublin.push(data[i])
        }
        else if ( data[i].City === 'Edinburgh'){
            Edinburgh.push(data[i])
        }
        else if ( data[i].City === 'Geneva'){
            Geneva.push(data[i])
        }
        else if ( data[i].City === 'Hamburg'){
            Hamburg.push(data[i])
        }
        else if ( data[i].City === 'Helsinki'){
            Helsinki.push(data[i])
        }
        else if (data[i].City === 'Krakow'){
            Krakow.push(data[i])
        }
        else if ( data[i].City === 'Lisbon'){
            Lisbon.push(data[i])
        }
        else if ( data[i].City === 'Ljubljana'){
            Ljubljana.push(data[i])
        }
        else if ( data[i].City === 'London'){
            London.push(data[i])
        }
        else if ( data[i].City === 'Luxembourg'){
            Luxembourg.push(data[i])
        }
        else if ( data[i].City === 'Lyon'){
            Lyon.push(data[i])
        }
        else if (data[i].City === 'Madrid'){
            Madrid.push(data[i])
        }
        else if ( data[i].City === 'Milan'){
            Milan.push(data[i])
        }
        else if (data[i].City === 'Munich'){
            Munich.push(data[i])
        }
        else if ( data[i].City === 'Oporto'){
            Oporto.push(data[i])
        }
        else if ( data[i].City === 'Oslo'){
            Oslo.push(data[i])
        }
        else if ( data[i].City === 'Paris'){
            Paris.push(data[i])
        }
        else if ( data[i].City === 'Prague'){
            Prague.push(data[i])
        }
        else if ( data[i].City === 'Rome'){
            Rome.push(data[i])
        }
        else if (data[i].City === 'Stockholm'){
            Stockholm.push(data[i])
        }
        else if ( data[i].City === 'Vienna'){
            Vienna.push(data[i])
        }
        else if ( data[i].City === 'Warsaw'){
            Warsaw.push(data[i])
        }
        else if ( data[i].City === 'Zurich'){
            Zurich.push(data[i])
        }
    }
        
    for(var j=0; j < 2; j++){
        console.log(Amsterdam[j].Name);
        console.log(Amsterdam[j]['Cuisine Style']);
        console.log(typeof(Amsterdam[j]['Cuisine Style']));
        console.log(' ');
      }

      this.setState({
        Amsterdam,
        Athens,
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
        data: data
      })
    }

    handleChange = (e) => {
        if(e.target.value.length > 2){
            var f = e.target.value;
            var tmp = []
            this.state.data.map((b) => {
                if (b.Name.startsWith(f)){
                    tmp.push(b.Name)
                }
            })
            this.setState({
                searchResult: tmp
            });
        }else{
            this.setState({
                searchResult: []
            })
        }
    }
    render(){
        return(
            <Container>
            <MyNavbar />
            <Jumbotron>
                <h3>Search your Favorite Place!</h3>
                    <div className="inputbox">
                        <input onChange={this.handleChange} class="form-control" placeholder="type the name of you favorite Resto..." />
                        <div className="searchResult" >
                            {this.state.searchResult.length > 1 ? (
                                this.state.searchResult.map((v, k) => {
                                    return(
                                        <h4><Link style={{textDecoration: 'none', color: 'Black', paddingLeft: '10px'}} to={"/profile/"+v}>{v}</Link></h4>
                                    )
                                })
                            ) : (
                                
                                <span></span>
                                
                            ) }
                        </div>               
                    </div>
                </Jumbotron>
            <br />
                <Amsterdam name={this.state.Amsterdam}  /><br /><br />
                <Athens name={this.state.Athens}  /><br /><br />
                <Barcelona name={this.state.Barcelona}  /><br /><br />
                <Berlin name={this.state.Berlin}  /><br /><br />
                <Bratislava name={this.state.Bratislava}  /><br /><br />
                <Brussels name={this.state.Brussels}  /><br /><br />
                <Budapest name={this.state.Budapest}  /><br /><br />
                <Copenhagen name={this.state.Copenhagen}  /><br /><br />
                <Dublin name={this.state.Dublin}  /><br /><br />
                <Edinburgh name={this.state.Edinburgh}  /><br /><br />
                <Geneva name={this.state.Geneva}  /><br /><br />
                <Hamburg name={this.state.Hamburg}  /><br /><br />
                <Helsinki name={this.state.Helsinki}  /><br /><br />
                <Krakow name={this.state.Krakow}  /><br /><br />
                <Lisbon name={this.state.Lisbon}  /><br /><br />
                <Ljubljana name={this.state.Ljubljana}  /><br /><br />

                <London name={this.state.London}  /><br /><br />
                <Luxembourg name={this.state.Luxembourg}  /><br /><br />
                <Lyon name={this.state.Lyon}  /><br /><br />
                <Madrid name={this.state.Madrid}  /><br /><br />
                <Munich name={this.state.Munich}  /><br /><br />
                <Oporto name={this.state.Oporto}  /><br /><br />
                <Oslo name={this.state.Oslo}  /><br /><br />
                <Paris name={this.state.Paris}  /><br /><br />
                <Prague name={this.state.Prague}  /><br /><br />
                <Rome name={this.state.Rome}  /><br /><br />
                <Stockholm name={this.state.Stockholm}  /><br /><br />
                <Vienna name={this.state.Vienna}  /><br /><br />
                <Warsaw name={this.state.Warsaw}  /><br /><br />
                <Zurich name={this.state.Zurich}  /><br /><br />
                
            </Container>
           )
    }
}

export default Home;