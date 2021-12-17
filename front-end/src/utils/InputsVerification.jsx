export default function inputsVerification(email, password) {
  const PASSWORD_LENGTH = 5;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email) && password.length > PASSWORD_LENGTH;
}
