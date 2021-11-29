import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.container";
//props대신 간편하게 하는법
export const Mycontext = createContext(null);
export default function ContextAPIPage() {
  const myValue = {
    isEdit: true,
  };

  return (
    <Mycontext.Provider value={myValue}>
      <MyBoardWrite />;
    </Mycontext.Provider>
  );
}
