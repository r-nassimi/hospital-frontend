export const sort = (list, sortDirection, sortField) => {
  const sortedList = [...list].sort((a, b) => {
    if (a[sortField] === b[sortField]) {
      return 0;
    }
    if ((sortDirection = "asc")) {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    if ((sortDirection = "desc")) {
      return a[sortField] < b[sortField] ? -1 : 1;
    }
  });
  return sortedList;
};
