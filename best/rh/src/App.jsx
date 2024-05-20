import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/employeeList';
import StaffActionList from './components/staffActionByEmployee';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="App">
      <h2>Accion de Personal</h2>
      <div className="wrapper">
        <EmployeeList onRowClick={handleRowClick} />
        <StaffActionList employee={selectedEmployee} />
      </div>
    </div>
  );
}

export default App;
