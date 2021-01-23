const getTotalFriendCount = users => {
  return users.reduce((acc, val) => acc + val.friends.length, 0) 
};
