import React from 'react';

import Greetings from './Greetings';
import Counter from 'Counter';
import MyForm from 'MyForm';

/**
 * Greetings component
 const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  };

  return <Greetings name="Eungb" onClick={onClick} />;
};
 */

/*
 Counter component
const App: React.FC = () => {
  return <Counter />;
};
*/

/**
 * MyForm component
 */
const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;
