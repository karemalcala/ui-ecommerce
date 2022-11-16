import React from 'react';

export default function UserDetails({name, email, username}) {
  // corregir el id
  return (
    <div to={`/users/${name}`}> 
      <p>{name} - {email}</p>
      <p>{username}</p>
    </div>
  )
}