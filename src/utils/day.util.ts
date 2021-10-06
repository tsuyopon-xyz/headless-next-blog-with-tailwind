import dayjs from 'dayjs';

export const formatDateToHumanReadable = (dateString: string) => {
  return dayjs(dateString).format('YYYY年MM月DD日');
};
