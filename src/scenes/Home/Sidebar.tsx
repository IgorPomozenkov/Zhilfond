import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { clearState, initUser, initUsers } from '@/store/main/slicer';
import { getData, mainFailure, mainLoading } from '@/store/main/selectors';
import { User } from './types';
import { checkRegUser, setClassCard } from './methods';

const Sidebar: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(mainLoading, shallowEqual);
  const error = useSelector(mainFailure, shallowEqual);
  const { users, currUser, request } = useSelector(getData, shallowEqual);
  const [userValue, setUserValue] = useState('');
  const [userError, setUserError] = useState('');

  useEffect(() => {
    if (!!error) setUserError(request.error);
  }, [error, request.error]);

  const changeUser = (e: ChangeEvent) => {
    const value = e.target.value;
    setUserValue(value);

    const data = checkRegUser(value, setUserError);

    if (!!data) dispatch(initUsers(data));

    if (!value) {
      setUserError('');
      dispatch(clearState());
    }
  };

  const handleClickUser = (user: User) => () => {
    dispatch(initUser(user));
  };

  return (
    <div className="sidebar">
      <p className="sidebar__title">Поиск сотрудников</p>
      <form action="#" className="sidebar__form" onSubmit={(e: FormEvent) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Введите Id или имя"
          className={!!userError ? 'field errorField' : 'field'}
          onChange={changeUser}
        />
      </form>
      <p className="sidebar__title">Результаты</p>
      <div className="sidebar__results">
        {!!loading && (
          <div className="loading">
            <CircularProgress color="primary" sx={{ color: '#333333' }} />
          </div>
        )}
        {(!users.length || !!users.length) && !userValue && <p className="text">начните поиск</p>}
        {!users.length && !!userValue && !userError && <p className="text">ничего не найдено</p>}
        {!!userError && <p className="errorText text">{userError}</p>}
        {!!users.length && !userError && (
          <div className="resultCards">
            {users.map((user: User) => (
              <div key={user.id} className="resultCards__item" onClick={handleClickUser(user)}>
                <div className="imageWrap">
                  <img src="/images/icons/nophoto.png" alt="image" />
                </div>
                <div className={setClassCard(currUser, user.id)}>
                  <p className="name">{user.username}</p>
                  <p className="text">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Sidebar;
