function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Yee Long',
    lastName: 'Tee'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );