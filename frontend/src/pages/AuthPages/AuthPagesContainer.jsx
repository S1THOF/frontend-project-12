import {
  Container, Row, Col, Card, Image,
} from 'react-bootstrap';

const AuthPageContainer = (props) => {
  const {
    imgSrc, imgAlt, children, footer, footerText, footerLink,
  } = props;

  return (
    <Container className="h-100" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col xs="12" md="8" xxl="6">
          <Card className="shadow-sm">
            <Card.Body as={Row} className="p-5">
              <Col xs="12" md="6" className="d-flex align-items-center justify-content-center">
                <Image
                  src={imgSrc}
                  className="rounded-circle"
                  alt={imgAlt}
                />
              </Col>
              {children}
            </Card.Body>
            {footer && (
            <Card.Footer className="p-4">
              <Container className="text-center">
                <span>{footerText}</span>
                {footerLink}
              </Container>
            </Card.Footer>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPageContainer;
