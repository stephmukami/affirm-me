import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [context, setContext] = useState({
    username: '',
    password: '',
    token: localStorage.getItem('token') || '',
  });

  return (
    <UserContext.Provider value={{ context, setContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
