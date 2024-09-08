import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6} className="text-center">
            <p>CopyRight © 2024 Qian Tang. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
