"use client";

import styles from "@/styles/profile.module.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const PasswordForm = () => {
  return (
    <>
      <Form data-aos="fade-up" data-aos-duration="1350" className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="currentPassword">
              SENHA ATUAL
            </Label>
            <Input
              name="currentPassword"
              type="password"
              id="currentPassword"
              placeholder="*******"
              required
              minLength={6}
              maxLength={12}
              className={styles.input}
            />
          </FormGroup>
        </div>

        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="newPassword">
              NOVA SENHA
            </Label>

            <Input
              name="newPassword"
              type="password"
              id="newPassword"
              placeholder="*******"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
            />
          </FormGroup>

          <FormGroup>
            <Label className={styles.label} for="confirmPassword">
              CONFIRME SUA NOVA SENHA
            </Label>

            <Input
              name="confirmPassword"
              type="password"
              id="newPassword"
              placeholder="*******"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
            />
          </FormGroup>
        </div>

        <Button outline className={styles.formBtn} type="submit">
          Salvar Alterações
        </Button>
      </Form>
    </>
  );
};

export default PasswordForm;
