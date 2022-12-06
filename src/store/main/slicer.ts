import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, api } from '..';

const initialState = {
  users: [],
  currUser: null,
  request: {
    status: 0,
    error: null,
  },
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      const filter = state.users.filter(({ id }) => id === payload.id);
      if (!filter.length) state.users = [...state.users, payload];
      state.request.status = 2;
    },
    setUser: (state, { payload }) => {
      state.currUser = payload;
    },
    pending: state => {
      state.request.status = 1;
    },
    loaded: state => {
      state.request.status = 2;
    },
    failure: (state, { payload }) => {
      state.request.status = 3;
      state.request.error = payload;
    },
    clear: state => {
      state.users = [];
      state.currUser = null;
      state.request.status = 0;
      state.request.error = null;
    },
  },
});

const { setUsers, setUser, pending, failure, clear } = mainSlice.actions;
export default mainSlice.reducer;

export const initUsers = (dataArr: Array<string | number>) => async (dispatch: AppDispatch) => {
  function reqUser(data: Array<string | number>) {
    if (!!data.length) dispatch(setUsers(data[0]));
    else dispatch(failure('ошибка в запросе'));
  }

  dispatch(clear());
  dispatch(pending());
  try {
    dataArr.forEach(async value => {
      if (!value) dispatch(failure(null));

      if (typeof value === 'number' && !!value) {
        const res = await api.getUserId(+value);
        reqUser(res);
      }

      if (typeof value === 'string' && !!value.length) {
        const res = await api.getUserName(value);
        reqUser(res);
      }
    });
  } catch (err) {
    //console.log(err);
    dispatch(failure(err));
  }
};

export const initUser = (user: object) => async (dispatch: AppDispatch) => {
  dispatch(setUser(user));
};

export const clearState = () => async (dispatch: AppDispatch) => {
  dispatch(clear());
};
