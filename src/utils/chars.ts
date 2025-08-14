export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatStatus = (status: string) => {
  if (status === 'IN_PROGRESS') return 'In progress';
  return capitalizeFirstLetter(status);
};
