import { RootState } from '..';

export function getData(state: RootState) {
  return state.main;
}

export function mainLoading(state: RootState) {
  return state.main.request.status === 1;
}

export function mainLoaded(state: RootState) {
  return state.main.request.status === 2;
}

export function mainFailure(state: RootState) {
  return state.main.request.status === 3;
}
