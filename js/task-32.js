const calculateTotalBalance = users => {
  return users.reduce((acc, val) => acc + val.balance, 0) 
};
