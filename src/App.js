import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return (
    <div>
      <ContactCard name="Bob" email="student1@gmail.com" workP="347 -123-1233"/>
      <ContactCard name="Juan" email="professor@gmail.com" workP="929-234-3466"/>
      <ContactCard name="Ross" email="staff@gmail.com" workP="718-543-7544" mobileP="212-456-5433"/>
    </div>
  );
}



export default App;
