import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

const DropD = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} > 
      <DropdownToggle caret>
        Profile
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem><span className="fa fa-user fa-lg"></span>&nbsp; Profile</DropdownItem>
        
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem><span className="fa fa-sign-out fa-lg"/>&nbsp; Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropD;