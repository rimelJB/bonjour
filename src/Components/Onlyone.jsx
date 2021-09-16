import React from 'react';
import Logo from './Logo.png';
import './Onlyone.css';
import {Row,Col} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Onlyone = () => {
    return (
        <div>
              <Row>
              <Col></Col>
                <Col xs={5}><div style={{border:"solid 1px black",maxWidth:"100vw"}}><h2 className='title'>Your name here</h2>
                </div>
                    
                </Col>
                <Col></Col>
                </Row>
                     <br/>
    
                <Row>
                    <Col></Col>
                    <Col xs={5}><img src="/tunisia.png"  alt='myimg'/></Col>
                    <Col></Col>
                </Row>
                    <br/>
                   
                 <Row>
                 <Col></Col>
                    <Col xs={5}><img src={Logo} alt='logo' /></Col>
                <Col></Col>
                </Row>
                    <br/>
                    <Row>
                 <Col></Col>
                 <Col lg={5}>
                <video width="320" height="240" controls>
                <source src="https://www.youtube.com/watch?v=_IVL0Sktcx0" type="video/mp4"/></video></Col>
                <Col></Col>
                </Row>
                    <br/>
            
                    
        </div>
    )
}

export default Onlyone;