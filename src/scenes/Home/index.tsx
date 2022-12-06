import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getData } from '@/store/main/selectors';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import './style.css';

const Home: React.FC = () => {
  const { currUser } = useSelector(getData, shallowEqual);

  return (
    <div className="home container">
      <Sidebar />
      <div className="content">
        {!currUser ? (
          <div className="selectUser">
            <p className="text">Выберите сотрудника, чтобы посмотреть его профиль</p>
          </div>
        ) : (
          <UserCard user={currUser} />
        )}
      </div>
    </div>
  );
};

export default Home;
