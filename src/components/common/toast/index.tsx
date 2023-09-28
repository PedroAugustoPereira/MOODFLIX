"use client";

import { Toast, ToastBody } from "reactstrap";

interface props {
  isOpen: boolean;
  message: string;
  color: string;
  aos: boolean;
}

const ToastComponent = ({ isOpen, message, color, aos }: props) => {
  return (
    <>
      <Toast
        style={{ transition: "opacity 1s" }}
        className={`${color} text-white  fixed-top ms-auto - mt-3 position-fixed`}
        isOpen={isOpen}
        onEntering={() => alert("teste")}
      >
        <ToastBody className="text-center">{message}</ToastBody>
      </Toast>
    </>
  );
};

export default ToastComponent;
