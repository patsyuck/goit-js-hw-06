const getFriends = (users) => {
  return users.flatMap(user => user.friends).filter((item, idx, arr) => arr.indexOf(item) === idx) 
};
