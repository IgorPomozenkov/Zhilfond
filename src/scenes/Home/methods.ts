import { User } from './types';

export const checkRegUser = (
  value: string,
  setter: React.Dispatch<React.SetStateAction<string>>,
) => {
  const regId = value.match(/^\d+$/);
  const regIdErr = value.match(/^\d+,?\s?$/);
  const regIdAll = value.match(/^\d+,(\s?\d,?)+$/);

  const regName = value.match(/^[A-Za-z_.-]+$/);
  const regNameErr = value.match(/^[A-Za-z_.-]+,?\s?$/);
  const regNameAll = value.match(/^[A-Za-z_.-]+,(\s?[A-Za-z_.-]+,?)+$/);

  if (!regIdErr && !regIdAll && !regNameErr && !regNameAll) setter('введены неверные данные');
  else setter('');

  if (!!regId) return [+value];
  if (!!regIdAll) {
    return value
      .replace(/\s/g, '')
      .split(',')
      .map(el => +el);
  }

  if (!!regName) return [value];
  if (!!regNameAll) {
    return value.replace(/\s/g, '').split(',');
  }
};

export const setClassCard = (user: User, userId: number) => {
  if (userId === user?.id) return 'cardInfo cardInfo_active';
  else return 'cardInfo';
};
