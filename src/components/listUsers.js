import React, {useEffect, useState} from 'react';
import User from "./user"
import getUsers from "../services/getUsers";

const sanitizerUrl = (urlBase) => {
  return urlBase.replace(' ', '-').toLowerCase()
}

export default function ListUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [usersValue, setUsers] = useState([])

  useEffect(() => {
    if (isLoading) {
      getUsers().then(users => {
        setUsers(users)
        setIsLoading(false)
       }
      )
    }
  }, [isLoading]);

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return usersValue.map(user => 
    <User key={sanitizerUrl(user.name)} name={user.name} email={user.email} username={user.username}></User>
  )
}