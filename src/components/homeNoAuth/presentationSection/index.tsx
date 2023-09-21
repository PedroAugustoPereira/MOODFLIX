"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { Container, Row, Col, Button } from "reactstrap";

const PresentationSection = () => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col
            md
            className="d-flex flex-column justify-content-center alighn-items-start"
          >
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>
              Tenha acesso aos melhores <br /> tutoriais de Programação.
            </p>
            <p className={styles.description}>
              Estude de onde estiver, a qualquer moment, e continue <br />{" "}
              evoluindo como programador.
            </p>

            <Link href="/register" style={{ textDecoration: "none" }}>
              <Button outline className={styles.btnCta}>
                <span>ACESSE AGORA</span>
                <img
                  src="/buttonPlay.svg"
                  alt="buttonImg"
                  className={styles.btnImg}
                />
              </Button>
            </Link>
          </Col>

          <Col md>
            <img
              src="/homeNoAuth/imgPresentation.png"
              alt="imgPresentation"
              className={styles.imgPresentation}
            />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center py-5">
            <img
              src="/homeNoAuth/iconArrowDown.svg"
              alt="arrowDown"
              className={styles.arrowDown}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
