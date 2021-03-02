import { createContext } from "react";

const defaultUserContext = {
  authenticated: false,
  setAuthenticated: () => {
    return;
  },
  username: "",
  setUserName: () => {
    return;
  },
  permission: "",
  setPermission: () => {
    return;
  },
};

export const UserContext = createContext(defaultUserContext);
export default UserContext;
