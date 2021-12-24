import React, {Fragment} from "react";
import InputField from "./inputField";
import useForm from "./useForm";
import validation from "./validation";
// import ForgotPasswordFormModal from "./forgotPasswordForm";
import css from "./form.module.css";

const signupFields = [
  {
    id: "username",
    type: "username",
    name: "username",
    placeholder: "User Name",
  },
  {
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Email id",
  },
  {
    id: "password",
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

const SignupForm = () => {
  const {
    handleChange,
    handleSignupFormSubmit,
    values,
    errors,
    // handleShow,
    // handleClose,
    // forgotPasswordShow,
  } = useForm(validation);

  return (
    <Fragment>
      <form className={css.form}>
        {signupFields &&
          signupFields.map((eachField, index) => {
            return (
              <InputField
                eachField={eachField}
                key={index}
                usernameValue={values.username}
                emailValue={values.email}
                passwordValue={values.password}
                onChange={handleChange}
                usernameError={errors.username}
                emailError={errors.email}
                passwordError={errors.password}
              />
            );
          })}
        <div
          className={css.signup_submit_button}
          onClick={handleSignupFormSubmit}
        >
          Sign up
        </div>
      </form>

      <div className={css.link_container}>
        <p className={css.login}>Already have an account ?</p>
        <a href="/login" className={css.login}>
          Log in
        </a>

        {/* <div className={css.forgot_password} onClick={handleShow}>
          Forgot Password?
        </div> */}
      </div>

      {/* <ForgotPasswordFormModal show={forgotPasswordShow} onHide={handleClose} /> */}
    </Fragment>
  );
};

export default SignupForm;
