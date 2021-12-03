import dayjs from 'dayjs';

export const NOW = (...args: any | undefined) => {
  return new Date();
};

export const TODAY = (...args: any | undefined) => {
  return dayjs(new Date(), 'YYYY-MM-DD');
};
