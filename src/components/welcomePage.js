import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import DetailView from './detailView'

const WelcomePage = () => (
  <div>
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} className="my-5">
          <h2 className="mt-3 text-center">React + Redux Project Boilerplate</h2>
        </Col>
      </Row>
    </Container>
    <DetailView title="React"
      img='react-logo.png'
      content="Some content about how cool React is." />
    <DetailView title="Redux" imgRight
      img='redux-logo.png'
      content="Some content about how cool React is." />
    <DetailView title="Bootstrap"
      img='bootstrap-logo.png'
      content="Some content about how cool React is." />
  </div>
)

export default WelcomePage
