import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const contextInfo = useContext(AuthContext);
  return contextInfo;
};

export default useAuth;
