const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((acc, item) => acc + item.balance, 0) 
};
