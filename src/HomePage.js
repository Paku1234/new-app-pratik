import React, { useState } from 'react';

const HomePage = () => {
  // Define state variables to store selected department, store, and date
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStore, setSelectedStore] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');

  // Define a function to handle the submit button click
  const handleFilterSubmit = () => {
    // Add your logic here to fetch and display data based on the user's selection
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Total Restaurants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Department 1</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Department 2</td>
            <td>15</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      <h2>Filters</h2>
      <label>
        Choose Department:
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Department 1">Department 1</option>
          <option value="Department 2">Department 2</option>
          {/* Add more department options */}
        </select>
      </label>

      <label>
        Choose Store:
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
        >
          <option value="All">All Stores</option>
          <option value="restaurant 1">restaurant 1</option>
          <option value="restaurant 2">restaurant 2</option>
          {/* Add more store options */}
        </select>
      </label>

      <label>
        Choose Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>

      <button onClick={handleFilterSubmit}>Submit</button>
      
      {/* Display whether the restaurant department is on holiday or not based on your logic */}
    </div>
  );
}

export default HomePage;
