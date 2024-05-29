import React, { useState } from "react";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState({
    name: "Nicolás"
  });
  console.log(user)
  return(
    <div>
      {user ? (
          <div>
            <SignInSignUp />
          </div>
        ) : (<h1>NO Estas logueado</h1>) }
    </div>
  )
}
