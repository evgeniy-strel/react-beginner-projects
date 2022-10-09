import React from 'react';

type propsType = {
  count: number;
  goBack: () => void;
};

export const Success = ({ count, goBack }: propsType) => {
  const handleBack = () => {
    goBack();
  };

  return (
    <div className='success-block'>
      <img src='/assets/success.svg' alt='Success' />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className='send-invite-btn' onClick={handleBack}>
        Назад
      </button>
    </div>
  );
};
