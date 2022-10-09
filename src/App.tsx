import React from 'react';
import axios from 'axios';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { user, userServer } from './types/user';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const [isSendData, setIsSendData] = React.useState(false);
  const [countAddedUsers, setCountAddedUsers] = React.useState(0);

  const sendInvitations = (users: user[]) => {
    // post requests to backend
    console.log(users);
    setCountAddedUsers(users.length);
    setIsSendData(true);
  };

  const goBack = () => {
    setIsSendData(false);
  };

  React.useEffect(() => {
    axios.get('https://reqres.in/api/users').then(({ data }) => {
      setUsers(
        data.data.map((user: userServer) => ({
          id: user.id,
          email: user.email,
          avatar: user.avatar,
          firstName: user.first_name,
          lastName: user.last_name,
        }))
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='App'>
      {isSendData ? (
        <Success count={countAddedUsers} goBack={goBack} />
      ) : (
        <Users
          users={users}
          isLoading={isLoading}
          sendInvitations={sendInvitations}
        />
      )}
    </div>
  );
}

export default App;
