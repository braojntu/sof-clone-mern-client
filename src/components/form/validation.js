export default function validation(values) {
  let errors = {};

  // User Name
  if (
    !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/i.test(
      values.username
    )
  ) {
    errors.username = "Invalid User Name";
  }

  // Email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }

  // Password
  if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
    errors.password =
      "Invalid Password. Password should be between 6 and 16 characters and should contain alteast one lower case, one upper case alphabhet, one number and one special character";
  }

  // Confirm Password
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "both password must match";
  }

  return errors;
}
