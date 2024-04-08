import React, { useState } from 'react';

const totalPages = 7;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderQuestion = () => {
    return (
      <div className='ho'>
        <p>Question {currentPage}</p>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Option 1
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Option 2
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Option 3
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Option 4
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Option 5
            </label>
          </li>
        </ul>
      </div>
    );
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{ margin: '0 5px', fontWeight: currentPage === i ? 'bold' : 'normal' }}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <div className='age'>
      {renderQuestion()}
      <div style={{ marginTop: '20px' }}>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Home;
