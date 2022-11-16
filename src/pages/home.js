import React from 'react';
import '../App.css';
import ListUsers from "../components/listUsers"
import Header from '../components/header'
import Footer from '../components/footer'
import {Route} from 'wouter'

export default function Home()  {
  return (
    <div className="App">
      <Header/>
      <p>Usuarios: </p>
        <Route 
          component={ListUsers}
          path="/users"
        />
      <Footer/>
    </div>
  );
}


