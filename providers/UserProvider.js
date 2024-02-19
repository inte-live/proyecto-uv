import React, { useState, useContext, useEffect } from "react";
import { MODEL_USER } from "../helpers/constants";

const UserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}
export function UserProvider(props) {
  const [user, setUser] = useState(MODEL_USER);

  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
