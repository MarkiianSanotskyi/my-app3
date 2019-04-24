import React from 'react';

import './App.css';


function FormatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

function FormatName2() {
 const element = <h1>Hello, {FormatName(user)}!</h1>;

 }



export default FormatName;