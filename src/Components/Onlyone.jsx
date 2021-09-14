import React from 'react';
import Logo from './Logo.png';
import './Onlyone.css';
import {Row,Col} from 'react-bootstrap';

const Onlyone = () => {
    return (
        <div>
              <Row>
                <Col><div style={{border:"solid 1px black",maxWidth:"100vw"}}>
                    <h1 className='title'>Your name here</h1></div>
                </Col>
            
                     <br/>
    
                
                    <Col xs={20}><img src="/tunisia.png"  alt='myimg'/></Col>

                    <br/>

               
                    <Col xs={20}><img src={Logo} alt='logo' /></Col>
                </Row>
                    <br/>
            
                    
        </div>
    )
}

export default Onlyone;