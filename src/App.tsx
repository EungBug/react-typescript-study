import React from 'react';

import Greetings from './Greetings';
import Counter from 'Counter';

/**
 * Greetings component
 const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  };

  return <Greetings name="Eungb" onClick={onClick} />;
};
 */

const App: React.FC = () => {
  return <Counter />;
};

export default App;
