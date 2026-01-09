const ADMIN_USER = {
  email: "admin@netbuy.com",
  password: "123456",
  role: "admin",
};

export const login = (email, password) => {
  if (
    email === ADMIN_USER.email &&
    password === ADMIN_USER.password
  ) {
    localStorage.setItem("user", JSON.stringify(ADMIN_USER));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAdmin = () => {
  const user = getUser();
  return user && user.role === "admin";
};