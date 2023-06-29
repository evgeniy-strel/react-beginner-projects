import { useReducer } from 'react';
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
  length: 10,
  isLowerCase: false,
  isUpperCase: true,
  isDigits: false,
  isSymbols: true,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

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

  return (
    <div className="App">
      <span className="subtitle">Пароль:</span>
      <h2>2UYsAhMdPR7wBHwG</h2>
      <div className="row">
        <span>Длина пароля:</span>
        <input
          className="pwg-length"
          type="text"
          value={state.length}
          onChange={handlePasswordLength}
        />
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
      <button>Сгенерировать</button>
    </div>
  );
}

export default App;
