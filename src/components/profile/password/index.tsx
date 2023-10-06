"use client";

import ToastComponent from "@/components/common/toast";
import profileService from "@/services/profileService";
import styles from "@/styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const PasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewtPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   profileService.fetchCurrent().then((pass) => {
  //     setCurrentPassword(pass.currentPassword);
  //     setNewtPassword(pass.newPassword);
  //   });
  // }, []);

  const handlePasswordUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword != confirmNewPassword) {
      setToastIsOpen(true);
      setErrorMessage("Senha e confirmação diferentes");
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      return;
    }

    if (currentPassword === newPassword) {
      setToastIsOpen(true);
      setErrorMessage("Nova senha igual a anterior!");
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      return;
    }

    const res = await profileService.passwordUpdate({
      currentPassword,
      newPassword,
    });

    console.log(res);
    if (res === 200) {
      setToastIsOpen(true);
      setErrorMessage("Senha alterada com sucesso!");
      setColor("bg-success");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setCurrentPassword("");
      setNewtPassword("");
      setConfirmNewPassword("");
    }

    if (res === 400) {
      setToastIsOpen(true);
      setErrorMessage("Senha atual incorreta!");
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      return;
    }
  };

  return (
    <>
      <Form
        onSubmit={handlePasswordUpdate}
        data-aos="fade-up"
        data-aos-duration="1350"
        className={styles.form}
      >
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
              value={currentPassword}
              onChange={(event) => {
                setCurrentPassword(event.currentTarget.value);
              }}
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
              value={newPassword}
              onChange={(event) => {
                setNewtPassword(event.currentTarget.value);
              }}
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
              value={confirmNewPassword}
              onChange={(event) => {
                setConfirmNewPassword(event.currentTarget.value);
              }}
              className={styles.inputFlex}
            />
          </FormGroup>
        </div>

        <Button outline className={styles.formBtn} type="submit">
          Salvar Alterações
        </Button>
      </Form>
      <ToastComponent
        color={color}
        isOpen={toastIsOpen}
        message={errorMessage}
      />
    </>
  );
};

export default PasswordForm;
