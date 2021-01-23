const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance) 
};
