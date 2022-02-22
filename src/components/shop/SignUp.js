import React, { useState } from "react";
import styled from "styled-components";
import envelopeIcon from "../../images/icons/envelope.svg";
import closeIcon from "../../images/icons/close-icon.svg";

const SignUp = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const handleSubmit = () => {
    let validEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value) {
      if (validEmail.test(value)) {
        setFormSuccess(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid Email");
      }
    } else {
      setErrorMessage("Email required");
    }
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {isSignUpVisible && (
        <Container>
          <CloseIcon
            src={closeIcon}
            alt="close-icon"
            onClick={() => setIsSignUpVisible(false)}
          />
          <img src={envelopeIcon} alt="envelope" />
          <h2>Sign up to our mailing list!</h2>
          <label>Email</label>
          <input
            placeholder="test"
            value={value}
            onChange={(e) => handleInputChange(e)}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          {formSuccess && <p className="success">Signed Up</p>}
          <button
            onClick={() => handleSubmit()}
            className={formSuccess ? "disable" : ""}
          >
            SUBMIT
          </button>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin: 20px 30px;
  background-color: var(--azureRadiance);
  padding: 18px 25px;
  position: relative;
  img {
    display: block;
    margin: 0 auto;
  }
  h2 {
    color: var(--white);
    font-family: "suez_oneregular";
    font-size: 20px;
    margin: 15px 0 22px 0;
    text-align: center;
  }
  label {
    color: var(--white);
    text-transform: uppercase;
  }
  input {
    width: 100%;
    border: none;
    height: 35px;
  }
  button {
    border: none;
    background-color: var(--white);
    color: var(--azureRadiance);
    font-family: "suez_oneregular";
    font-size: 20px;
    display: block;
    margin: 30px auto;
    width: 174px;
    height: 58px;
    cursor: pointer;
    transition: opacity 0.25s ease;
    &.disable {
      opacity: 0.7;
      pointer-events: none;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    position: absolute;
    font-size: 14px;
    &.error {
      color: red;
    }
    &.success {
      color: green;
    }
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export default SignUp;
