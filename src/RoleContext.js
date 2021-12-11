import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = (props) => {
  const [role, setrole] = useState("student");

  console.log(role);

  return (
    <RoleContext.Provider value={[role, setrole]}>
      {props.children}
    </RoleContext.Provider>
  );
};
