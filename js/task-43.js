const getSortedFriends = users => {
  return [...users].flatMap(user => user.friends).filter((item, ind, arr) => arr.indexOf(item) === ind).sort((a, b) => a.localeCompare(b)) 
};
