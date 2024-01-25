import React from 'react';

export function Navbar({ filter, handleFilterChange }) {
  const navbarStyle = {
    background: '#333',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const filterContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const filterLabelStyle = {
    marginRight: '8px',
  };

  return (
    <div style={navbarStyle}>
      <div style={brandStyle}>Todo App</div>
      <div style={filterContainerStyle}>
        <div style={filterLabelStyle}>Filter:</div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All Todos</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </div>
  );
}
