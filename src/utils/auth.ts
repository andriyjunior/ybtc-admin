const { REACT_APP_TOKEN, REACT_APP_PASSWORD } = process.env;

export const isAuth = () => {
  if (window.localStorage.getItem("token") === REACT_APP_TOKEN) {
    return true;
  }

  if (prompt("Enter your password") === REACT_APP_PASSWORD) {
    window.localStorage.setItem("token", REACT_APP_TOKEN!);
  } else {
    isAuth();
  }
};
