import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

function Footer(props) {

    
    return (
    <>
    <div className="footer">
       <Container>
        <Row>
        <Col lg={3} md={6} className="col-6">
            <h5 className="title">Hotie Energy</h5>
            <p className="text-white footer-p">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of.
            </p>
                <ul className="social-ul">
                    <li>
                        <a href=""><i class="fa-brands fa-medium"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>

                
                </ul>
            </Col>
            <Col lg={3} md={6} className="col-6">
                <h5 className="title">About</h5>
                <ul className="ul">
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                </ul>
            </Col>
            <Col lg={3} md={6} className="col-6">
            <h5 className="title">Help</h5>
                <ul className="ul">
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                </ul>
            </Col>
            <Col lg={3} md={6} className="col-6">
            <h5 className="title">News</h5>
                <ul className="ul">
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Link</Link>
                    </li>
                </ul>
            </Col>
           
        </Row>
       </Container>
    </div>
    </>
    );
}

export default Footer;
