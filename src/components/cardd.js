import React from 'react';
import { Col, Badge } from 'react-bootstrap'
import { Link } from "react-router-dom";


const Cardd = ({ image, name, ranking, rating, review, cuisine }) => {
    var cus = cuisine.replace("[", "").replace("]", "").split(",");
    console.log(cus);
    

    return(
        <Col xs={12} md={5} >
          <Link style={{textDecoration: 'none', color: 'Black'}} to={"/profile/"+name}>
        <div className="ccard" id="box">
            <div className="c_card_left">
                <img src={image} alt="eur" />
            </div>
            <div className="c_card_right">
                <h5>{name}</h5>
                <span>{cus.map((u, i) => {
                    if(i === 0){

                    }else if( i === 1){
                    return(
                        <Badge variant="success">{u}</Badge> 
                    )
                    }else if( i === 2){
                    return(
                        <Badge variant="warning">{u}</Badge> 
                    )
                    }else if( i === 3){
                    return(
                        <Badge variant="info">{u}</Badge> 
                    )
                    }else if(i === 4){
                    return(
                        <Badge variant="dark">{u}</Badge> 
                    )
                    }else{
                    return(
                        <Badge variant="secondary">{u}</Badge> 
                    )
                    }
                })}</span>
            </div>
            <div className="rankBox">
                #{ranking}
            </div>
            <div className="reviewBox">
                <img src={require("./../assets/chat.png")} alt="c" />&nbsp;{review}
            </div>
        </div>
        </Link>        
    </Col>
    )
}

export default Cardd;