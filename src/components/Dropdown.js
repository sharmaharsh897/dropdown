
import React, { useState } from 'react';
import './Dropdown.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setIsOpen(false);
    console.log(`Selected option: ${option}`);
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-button">
        {selectedItem || 'Select'}&nbsp; &nbsp;<FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
