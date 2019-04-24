import React from 'react';




function FormatName2() {
return element
}

function FormatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Markiian',
  lastName: 'Sanotskyi',
};




 const element = <h1>Hello, {FormatName(user)}!</h1>;





export default FormatName2;