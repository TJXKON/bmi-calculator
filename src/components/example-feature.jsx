function formatName(user) {
    return user.lastName + ' ' + user.firstName;
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