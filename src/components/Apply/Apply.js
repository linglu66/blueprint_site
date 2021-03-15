import React from "react";
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import standing from '../../imgs/standing 8.png';
import { CriteriaList } from './applyData';
import './Apply.css';
import HeaderRow from "../HeaderRow/HeaderRow";
import Footer from "../Footer/Footer"



const Criteria = ({ title, description, image }) => {
  return (
    <Row>
      <Col md="3">
        <img src={image} style={{ paddingTop: '1.5em', width: 'auto', height: '4.5em' }} />
      </Col>
      <Col md="8" style={{ paddingTop: '1em' }}>
        <h5 style={{ fontWeight: '600' }}>
          {title}
        </h5>
        <p style={{ color: 'grey', fontWeight: '400'}}>
          {description}
        </p>
      </Col>
    </Row>
  )
}


const Apply = () => {

  const applyBttn =  () => {<button> "hi" </button>
  }
  return (
    <>
      <HeaderRow title ={"For Students"} body ={"Joining Blueprint is the perfect way to use your skills to give back to the community. We are currently recruiting for our senior roles."}
      btn={true} img={1}/>
      <Container fluid="md" style={{ paddingTop: "4rem", paddingBottom: '8em' }}>
          <Row>
            { window.innerWidth < 480 ? null : (
              <Col md="3">
                <img src={standing} style={{ paddingTop: '4em', paddingBottom: '4em', width: '15em', height: 'auto' }} />
              </Col>
            )}
            <Col md="8">
                <h2> 
                    What We Look For:
                </h2>
             
                <Container className="pt-3">
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[0].title}
                        description={CriteriaList[0].description}
                        image={CriteriaList[0].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[1].title}
                        description={CriteriaList[1].description}
                        image={CriteriaList[1].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[2].title}
                        description={CriteriaList[2].description}
                        image={CriteriaList[2].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[3].title}
                        description={CriteriaList[3].description}
                        image={CriteriaList[3].image}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Criteria 
                        title={CriteriaList[4].title}
                        description={CriteriaList[4].description}
                        image={CriteriaList[4].image}
                        />
                    </Col>
                    <Col>
                      <Criteria 
                        title={CriteriaList[5].title}
                        description={CriteriaList[5].description}
                        image={CriteriaList[5].image}
                        />
                    </Col>
                  </Row>
                </Container>
            </Col>
          </Row>
      </Container>
      <Footer/>
    </>
    
  )
}

export default Apply;