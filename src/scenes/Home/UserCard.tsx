import React from 'react';
import { PropsUserCard } from './types';

const UserCard: React.FC<PropsUserCard> = React.memo((props: PropsUserCard) => {
  const { user } = props;

  return (
    <div className="userCard">
      <div className="userCard__photo">
        <div className="imageWrap">
          <img src="/images/icons/nophoto_big.png" alt="photo" />
        </div>
      </div>
      <div className="userCard__info">
        <p className="userName">{user.name}</p>
        <p className="userData">
          email:<span className="text">{user.email}</span>
        </p>
        <p className="userData">
          phone:<span className="text">{user.phone}</span>
        </p>
        <p className="aboutTitle">О себе:</p>
        <p className="aboutUser text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  );
});

export default UserCard;
