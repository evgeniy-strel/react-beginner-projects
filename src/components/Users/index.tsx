import React from 'react';
import { user } from '../../types/user';
import { Skeleton } from './Skeleton';
import { User } from './User';

type propsType = {
  users: user[];
  isLoading: boolean;
  sendInvitations: (users: user[]) => void;
};

export const Users = ({ users, isLoading, sendInvitations }: propsType) => {
  const [addedUsers, setAddedUsers]: any = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  const isAddUser = (user: user): boolean => {
    return addedUsers.includes(user);
  };

  const addUser = (user: user): void => {
    setAddedUsers((prevUsers: user[]) => [...prevUsers, user]);
  };

  const deleteUser = (user: user): void => {
    setAddedUsers((prevUsers: user[]) => {
      return prevUsers.filter((prevUser) => prevUser.id != user.id);
    });
  };

  const handleSendData = () => {
    sendInvitations(addedUsers);
    setAddedUsers([]);
  };

  const handleSearch = (e: any) => {
    setInputText(e.target.value.toLowerCase());
  };

  const filterSearch = (users: user[]): user[] => {
    if (!inputText) return users;

    return users.filter((user: user) => {
      return (
        user.firstName.toLowerCase().includes(inputText) ||
        user.lastName.toLowerCase().includes(inputText) ||
        user.email.toLowerCase().includes(inputText)
      );
    });
  };

  return (
    <>
      <div className='search'>
        <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
        </svg>
        <input
          type='text'
          placeholder='Найти пользователя...'
          onChange={handleSearch}
        />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          {filterSearch(users).map((user: user) => (
            <User
              user={user}
              key={user.id}
              isAdded={isAddUser(user)}
              addUser={addUser}
              deleteUser={deleteUser}
            />
          ))}
        </ul>
      )}
      <button className='send-invite-btn' onClick={handleSendData}>
        Отправить приглашение
      </button>
    </>
  );
};
