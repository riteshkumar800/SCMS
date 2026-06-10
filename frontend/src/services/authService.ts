export const login = (
  email: string,
  password: string
) => {
  if (
    email === "admin@scms.com" &&
    password === "admin123"
  ) {
    localStorage.setItem(
      "isAuthenticated",
      "true"
    );

    return true;
  }

  return false;
};

export const logout = () => {
  localStorage.removeItem(
    "isAuthenticated"
  );
};

export const isAuthenticated = () => {
  return (
    localStorage.getItem(
      "isAuthenticated"
    ) === "true"
  );
};