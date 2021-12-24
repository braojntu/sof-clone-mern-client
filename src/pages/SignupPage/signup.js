import React, { Fragment } from "react";
import SignupForm from "../../components/form/signupForm";
import css from "./signup.module.css";

const SignupPage = () => {
  return (
    <Fragment>
      <div className={css.signup_section}>
        <img
          src="/images/login-background.jpg"
          alt="background"
          className={css.bg}
        />
        <div className={css.signup_left_section}>
          <div className={css.logo_text_block}>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <span>
            You got Questions
            <br /> We got their Answers
          </span>
          <SignupForm />
        </div>
      </div>
    </Fragment>
  );
};

export default SignupPage;
