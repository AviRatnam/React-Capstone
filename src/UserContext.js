import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setuser] = useState("avi");

  console.log(user);

  return (
    <UserContext.Provider value={[user, setuser]}>
      {props.children}
    </UserContext.Provider>
  );
};
