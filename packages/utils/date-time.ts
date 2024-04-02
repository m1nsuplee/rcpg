import { format } from 'date-fns';

const getTimeString = (date: string) => format(new Date(date), 'HH:mm');

const getDateString = (date: string) => format(new Date(date), 'yyyy-MM-dd');

export const dateTime = {
  getTimeString,
  getDateString,
};
