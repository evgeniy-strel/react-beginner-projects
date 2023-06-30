import { useEffect, useReducer, useState } from 'react';
import './index.scss';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_password_length': {
      return { ...state, length: action.payload };
    }
    case 'toggle_lower_case': {
      return { ...state, isLowerCase: !state.isLowerCase };
    }
    case 'toggle_upper_case': {
      return { ...state, isUpperCase: !state.isUpperCase };
    }
    case 'toggle_digits': {
      return { ...state, isDigits: !state.isDigits };
    }
    case 'toggle_symbols': {
      return { ...state, isSymbols: !state.isSymbols };
    }
  }
};

const initState = {
  length: 8,
  isLowerCase: false,
  isUpperCase: true,
  isDigits: false,
  isSymbols: true,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [password, setPassword] = useState('');

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const symbols = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    '\\',
    ']',
    '^',
    '_',
    '`',
  ];

  const generatePassword = () => {
    const types = getArrayTypes();
    let password = '';

    for (var i = 0; i < state.length; i++) {
      const type = types[getRandomValue(0, types.length - 1)];
      const symbol = type[getRandomValue(0, type.length - 1)];
      password += symbol;
    }

    setPassword(password);
  };

  const getArrayTypes = () => {
    const types = [];
    if (state.isLowerCase) types.push(lowerCase);
    if (state.isUpperCase) types.push(upperCase);
    if (state.isDigits) types.push(digits);
    if (state.isSymbols) types.push(symbols);

    return types;
  };

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handlePasswordLength = (e) => {
    dispatch({
      type: 'change_password_length',
      payload: +e.target.value,
    });
  };

  const toggleLowerCase = () => {
    dispatch({ type: 'toggle_lower_case' });
  };

  const toggleUpperCase = () => {
    dispatch({ type: 'toggle_upper_case' });
  };

  const toggleDigits = () => {
    dispatch({ type: 'toggle_digits' });
  };

  const toggleSymbols = () => {
    dispatch({ type: 'toggle_symbols' });
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="App">
      <span className="subtitle">Пароль:</span>
      <h2>{password}</h2>
      <div className="row">
        <span>Длина:</span>

        <input
          className="input-range"
          type="range"
          min="1"
          max="11"
          value={state.length}
          onChange={handlePasswordLength}></input>
        <span className="pwg-length">{state.length}</span>
      </div>
      <div className="row">
        <span>Прописные буквы:</span>
        <input
          className="styled-checkbox"
          id="checkbox1"
          type="checkbox"
          checked={state.isUpperCase}
          onChange={toggleUpperCase}
        />
        <label htmlFor="checkbox1" />
      </div>
      <div className="row">
        <span>Строчные буквы:</span>
        <input
          className="styled-checkbox"
          id="checkbox2"
          type="checkbox"
          checked={state.isLowerCase}
          onChange={toggleLowerCase}
        />
        <label htmlFor="checkbox2" />
      </div>
      <div className="row">
        <span>Цифры:</span>
        <input
          className="styled-checkbox"
          id="checkbox3"
          type="checkbox"
          checked={state.isDigits}
          onChange={toggleDigits}
        />
        <label htmlFor="checkbox3" />
      </div>
      <div className="row">
        <span>Символы:</span>
        <input
          className="styled-checkbox"
          id="checkbox4"
          type="checkbox"
          checked={state.isSymbols}
          onChange={toggleSymbols}
        />
        <label htmlFor="checkbox4" />
      </div>
      <button onClick={generatePassword}>Сгенерировать</button>
    </div>
  );
}

export default App;
