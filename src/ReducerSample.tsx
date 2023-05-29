import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'SET_GOOD'; isGood: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.count };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SET_COLOR':
      return { ...state, color: action.color };
    case 'SET_GOOD':
      return { ...state, isGood: action.isGood };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

const ReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'Hi',
    color: 'red',
    isGood: true,
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'Hello, world!' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
  const setGood = () => dispatch({ type: 'SET_GOOD', isGood: false });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'Yes' : 'No'}
      </p>

      <div>
        <button onClick={setCount}>Set count</button>
        <button onClick={setText}>Set text</button>
        <button onClick={setColor}>Set color</button>
        <button onClick={setGood}>Toggle Good</button>
      </div>
    </div>
  );
};

export default ReducerSample;
