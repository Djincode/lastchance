import { Container, Row, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* <Col className='text-center py-3'>
            <p className="footer-text">DjinStore &copy; {currentYear}</p>
          </Col> */}
            <Col lg={4} xl={4} sm={12} className='text-center py-3'>

              <p className="footer-text">Icon 1 Icon 2 Icon 3</p> 
            </Col>
            <Col lg={4} xl={4} sm={12} className='text-center py-3'>

                <Link to={"/contact"}><p className="footer-text">Contact</p> </Link>
            </Col>
            <Col lg={4} xl={4} sm={12} className='text-center py-3'>

                <p className="footer-text">Icon 1 Icon 2 Icon 3</p> 
            </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
