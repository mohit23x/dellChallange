import React from "react";
import Cardd from './cardd';
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";


export const Amsterdam = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/amsterdam.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center', justifyContent: 'center'}} className="cccard" id="box">
                    <Link style={{textDecoration: 'none', color: 'Black'}} to="/Amsterdam">View more from Amsterdam &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}


export const Athens = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/athens.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                    <Link style={{textDecoration: 'none', color: 'Black'}} to="/Athens">View more from Athens &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}


export const  Barcelona = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/barcelona.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Barcelona">View more from Barcelona &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Berlin = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/berlin.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Berlin">View more from Berlin &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const  Bratislava = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/bratislawa.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Bratislava">View more from Bratislava &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const  Brussels = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/brussels.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Brussels">View more from Brussels &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const  Budapest = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/budapest.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Budapest">View more from Budapest &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const  Copenhagen = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/copenhagen.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Copenhagen">View more from Copenhagen &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const  Dublin = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/dublin.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Dublin">View more from Dublin &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Edinburgh = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/ediburg.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Edinburgh">View more from Edinburgh &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}
export const Geneva = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/geneva.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Geneva">View more from Geneva &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Hamburg = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/hamburg.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Hamburg">View more from Hamburg &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Helsinki = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/helsinki.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Helsinki">View more from Helsinki &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Krakow = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/karkow.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Krakow">View more from Krakow &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Lisbon = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/lisbon.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Lisbon">View more from Lisbon &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Ljubljana = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/ljubljana.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Ljubljana">View more from Ljubljana &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const London = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/london.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/London">View more from London &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Luxembourg = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/luxemburg.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Luxembourg">View more from Luxembourg &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Lyon = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/lyon.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Lyon">View more from Lyon &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Madrid = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/madrid.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Madrid">View more from Madrid &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Milan = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/milan.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Milan">View more from Milan &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Munich = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/munich.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Munich">View more from Munich &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Oporto = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/oparto.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Oporto">View more from Oporto &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Oslo = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/oslo.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Oslo">View more from Oslo &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}


export const Paris = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/paris.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Paris">View more from Paris &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Prague = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/prague.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Prague">View more from Prague &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Rome = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/rome.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Rome">View more from Rome &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Stockholm = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/stockholm.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Stockholm">View more from Stockholm &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Vienna = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/vienna.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Vienna">View more from Vienna &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Warsaw = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/warsaw.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Warsaw">View more from Warsaw &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}

export const Zurich = ({name}) => {
    console.log('recieved props');
    console.log(name);

    var renderData = name.length > 1 ? (
        name.map((k) => {
            if( parseInt(k.Ranking) < 3){
                return (<Cardd image={require('./../assets/zurich.png')} name={k.Name} cuisine={k['Cuisine Style']} rating={k.Rating} review={k['Number of Reviews']} ranking={k.Ranking} /> );
            }
        })
    ) : (
        <div> no item</div>
    )

    return(
        <Row>
            {renderData}
            <Col >
                <div style={{alignItems:'center'}} className="cccard" id="box">
                     <Link style={{textDecoration: 'none', color: 'Black'}} to="/Zurich">View more from Zurich &nbsp;<img src={require("./../assets/right-arrow.png")}  alt="sd" /></Link>
                </div>        
            </Col>
        </Row>
    )
}
