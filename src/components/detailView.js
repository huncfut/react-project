import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const DetailView = ({title, content, img, imgRight = 0}) => {
  const imgBody = (
    <Col md={4}>
      <img src={require(`../assets/${img}`)} className="img-fluid rounded" />
    </Col>
  )
  const txtBody = (
    <Col md={6} className="mt-3">
      <h1>{title}</h1>
      <h5>{content}</h5>
    </Col>
  )
  return (
    <div className={imgRight ? "py-4" : "bg-light py-4"}>
      <Container>
        <Row className="justify-content-center">
          {imgRight ? txtBody : imgBody}
          {imgRight ? imgBody : txtBody}
        </Row>
      </Container>
    </div>
  )
}

export default DetailView
