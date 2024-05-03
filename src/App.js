import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    name: "Nicolás"
  });
  console.log(user)
  return(
    <div>
      {user ? (<h1>Estas logueado</h1>) : (<h1>NO Estas logueado</h1>) }
    </div>
  )
}
