"use client";

import { Spinner } from "reactstrap";

const SpinnerComponent = () => {
  return (
    <>
      <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
        <Spinner annimation="border" color="light" />
      </div>
    </>
  );
};

export default SpinnerComponent;
