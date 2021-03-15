import React, {useEffect, useState} from 'react'
import './Chapters.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, Card, Button, Jumbotron } from "react-bootstrap";
import { canadaChapters, usChapters }  from './chapterData';
import HeaderRow from '../HeaderRow/HeaderRow'
import Footer from '../Footer/Footer'


const ChapterCard = ({ link, title, description, image }) => {
  return (
      <Card style={{ width: '20rem' }} className={'ProjectCard border-0'}>
          {window.innerWidth < 480 ? (
              <Card.Body>
                  <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>{title}</Card.Title>
                  <Card.Text style={{ fontSize: '14px', fontWeight: 'normal' }}>
                    {description}
                  </Card.Text>
                  <Card.Link href={link}>Learn more</Card.Link>
              </Card.Body>
          ) : (
              <>
                  <Card.Body>
                      <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>{title}</Card.Title>
                      <Card.Text style={{ fontSize: '14px', fontWeight: 'normal' }}>
                        {description}
                      </Card.Text>
                      <Card.Link href={link}>Learn more</Card.Link>
                  </Card.Body>
              </>
          )}
      </Card>
  )
}

const Chapters = () => {

  return (
    <>
      <HeaderRow title = {"Blueprint Chapters"} body = {" Blueprint was founded at UC Berkeley in 2013. Since then, they've started scaling their impact by establishing chapters in different colleges around the world, including us!"}
       img = {2} width = {"med"}/>

      <Container fluid="md" style={{ paddingTop: "4rem", paddingBottom: '8em' }}>
        <Row>
          <Col className={'Year'}>
              <h3> 
                🇨🇦 Canada
              </h3>
          </Col>
        </Row>
        <Row style={{ paddingTop: '2em', paddingLeft: '5%' }}>
            {canadaChapters.map((chapter) => {
              return (
                <Col md="4">
                    <ChapterCard 
                      link={chapter.link} 
                      image={chapter.image} 
                      title={chapter.title} 
                      description={chapter.description}
                    />
                </Col>
              )
            })}
        </Row>
        <Row className="pt-5">
          <Col className={'Year'}>
              <h3> 
                🇺🇸 USA
              </h3>
          </Col>
        </Row>
        <Row style={{ paddingLeft: '5%', paddingTop: '1em' }}>
            {usChapters.map((chapter) => {
              return (
                <Col md="4">
                    <ChapterCard 
                      link={chapter.link} 
                      image={chapter.image} 
                      title={chapter.title} 
                      description={chapter.description}
                    />
                </Col>
              )
            })}
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Chapters;