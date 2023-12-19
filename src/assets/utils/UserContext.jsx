import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const mockLogin = () => {
    setUser({
      id: 1,
      first_name: 'super',
      last_name: 'admin',
      role_id: 1,
      roles_name: 'superAdmin',
      email: 'boss@gmail.com',
      password: 'rootroot',
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, mockLogin }}>
      {children}
    </UserContext.Provider>
  );
};