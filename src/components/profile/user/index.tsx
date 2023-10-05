"use client";

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import styles from "@/styles/profile.module.scss";
const UserForm = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.forName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TESTE</p>
        </div>
        <div className={styles.memberTime}>
          <img
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
            className={styles.memberTimeImg}
          />
          <p className={styles.memberTimeText}>
            Membro desde <br /> 20 de abril de 2020
          </p>
        </div>
        <hr />

        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="fisrtName">
              Nome
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="Qual o seu primeiro nome?"
              required
              maxLength={30}
              className={styles.inputFlex}
              value={"name"}
            />
          </FormGroup>

          <FormGroup>
            <Label className={styles.label} for="lastName">
              SOBRENOME
            </Label>
            <Input
              name="lastName"
              type="text"
              id="lasttName"
              placeholder="(xx) 9xxxx-xxxx"
              required
              maxLength={30}
              className={styles.inputFlex}
              value={"último nome"}
            />
          </FormGroup>
        </div>

        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="phone">
              NÚMERO
            </Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              placeholder="Qual número de contato?"
              required
              className={styles.input}
              value={"+55 51 98676-2312"}
            />
          </FormGroup>

          <FormGroup>
            <Label className={styles.label} for="email">
              E-MAIL
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Qual o seu email?"
              required
              className={styles.input}
              value={"teste@gmail.com"}
            />
          </FormGroup>

          <Button className={styles.formBtn} outline type="submit">
            Salvar Alterações
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
