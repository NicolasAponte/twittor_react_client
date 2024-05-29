import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUsers, faComment } from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../../assets/png/logo-white.png";
import Logo from "../../assets/png/logo.png";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
  return (
    /*
      Container fluid para que ocupe toda la página
    */
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

const LeftComponent = () => (
  <Col className="signin-signup__left" xs={6}>
    <img src={Logo} alt="Twittor" />
    <div>
      <h2>
        <FontAwesomeIcon icon={faSearch} />
        Sigue lo que te interesa.
      </h2>
      <h2>
        <FontAwesomeIcon icon={faUsers} />
        Entérate de que está hablando la gente.
      </h2>
      <h2>
        <FontAwesomeIcon icon={faComment} />
        Únete a la conversación.
      </h2>
    </div>
  </Col>
)

const RightComponent = () => (
  <Col className="signin-signup__right" xs={6}>
    <div>
      <img src={ LogoWhite } alt="Twittor" />
      <h2>Mira lo que está pasando en el mundo en este momento</h2>
      <h3>Únete a Twittor hoy mismo</h3>
      <Button variant="primary">Regístrate</Button>
      <Button variant="outline-primary">Iniciar sesión</Button>
    </div>
  </Col>
)
