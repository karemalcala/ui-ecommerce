import React from 'react';
import {Route} from 'wouter'
import UserDetails from './userDetails'

const sanitizerUrl = (urlBase) => {
  return urlBase.replace(' ', '-').toLowerCase()
}

export default function User({name, email, username}) {
  return (
    <Route
      to={`/users/${sanitizerUrl(name)}`}
      path="/gif/:name"
      component={UserDetails}
      name={name}
      email={email}
      username={username}
    > 
      <p>{name} - {email}</p>
      <p>{username}</p>
    </Route>
  )
}