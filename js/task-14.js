const getUserEmails = users => {
  const mails = users.map(user => user.email)  
  return mails
};
