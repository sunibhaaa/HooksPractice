import React, { createContext } from "react";
import MainComponent from "./components/MainComponent"

export const LoginContext = createContext();

const App = () => {
  return (
    <LoginContext.Provider value={true}>
      <div>
        <MainComponent />
      </div>
    </LoginContext.Provider>
  )
}
export default App; 