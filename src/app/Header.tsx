import React from 'react';

const Header: React.FC = () => {
  //
  return (
    <header>
      <div className="headerInfo container">
        <h1 className="headerInfo__heading">Жилфонд</h1>
        <a href="#" className="headerInfo__userLink">
          Пользователь
        </a>
      </div>
    </header>
  );
};

export default Header;
