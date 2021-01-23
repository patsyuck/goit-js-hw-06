const getNamesSortedByFriendCount = users => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name) 
};
