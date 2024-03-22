// App.js
import React from 'react';
import Dropdown from './components/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const dropdownItems = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'internship'];

  return (
    <div className='main'>
      <div className='inner'>
        <h1 className='heading'>What are your desired job types?</h1>
        <Dropdown items={dropdownItems} />
      </div>
    </div>
  );
};

export default App;
