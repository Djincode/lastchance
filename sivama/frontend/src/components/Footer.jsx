import { Container, Row, Col,} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
         
            <Col lg={4} xl={4} sm={12} className='d-flex text-center py-3 justify-content-evenly'>

              <FaFacebook style={{cursor: "pointer"}} size={30} color="#4267B2"/> <FaInstagram style={{cursor: "pointer"}} size={30} color="#C13584"/> <FaTwitter style={{cursor: "pointer"}} size={30} color="#1DA1F2"/>
            </Col>
            <Col lg={4} xl={4} sm={12} className='text-center py-3'>

                <Link to={"/contact"}><p className="footer-text">Contact</p> </Link>
               
            </Col>
            <Col lg={4} xl={4} sm={12} className='text-center py-3'>

                <Link to={"/blog"}><p className="footer-text">Blog</p></Link>
            </Col>
             <Col className='text-center py-3'>
            <p className="footer-text">DjinStore &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
