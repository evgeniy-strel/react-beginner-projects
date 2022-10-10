import React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

type propsType = {
  value: number;
  currency: string;
  allCurrency: string[];
  onChangeValue: (cur: any) => void;
  onChangeCurrency: (cur: string) => void;
};

export const Block = ({
  value,
  currency,
  allCurrency,
  onChangeValue,
  onChangeCurrency,
}: propsType) => {
  const [isShowedAll, setisShowedAll] = React.useState(false);

  const handleShowAll = () => {
    setisShowedAll(!isShowedAll);
  };

  const handleCurrencyInAll = (currency: string) => {
    if (!defaultCurrencies.includes(currency)) {
      defaultCurrencies[defaultCurrencies.length - 1] = currency;
    }
    onChangeCurrency(currency);
    setisShowedAll(false);
  };

  return (
    <div className='block'>
      <ul className='currencies'>
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}
        <li className={isShowedAll ? 'active-svg' : ''} onClick={handleShowAll}>
          <svg height='50px' viewBox='0 0 50 50' width='50px'>
            <rect fill='none' height='50' width='50' />
            <polygon points='47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 ' />
          </svg>
        </li>
      </ul>
      {isShowedAll && (
        <div className='all-currencies-container'>
          <ul className='currencies all-curencies'>
            {allCurrency.map((currency) => (
              <li onClick={() => handleCurrencyInAll(currency)}>{currency}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <input
          onChange={(e) => onChangeValue(e.target.value)}
          value={value}
          type='number'
        />
      </div>
    </div>
  );
};
